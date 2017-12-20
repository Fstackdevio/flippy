#!/usr/bin/python 
from __future__ import print_function
import json
import pymysql as MySQLdb
from blockchain.v2.receive import receive
from blockchain.exchangerates import to_btc
import sys
from flask import Flask, request, url_for, render_template

from crypt_receive import app
import crypt_receive.db
from crypt_receive.db import run_db, get_db, setup_db, close_connection

INVOICE_ID = 9010
PRICE_IN_USD = 0.15
PRODUCT_URL = 'nutbolt.jpg'
connect_db = crypt_receive.db.connect_db()

# callback = http://localhost:5000/payment/9005?secret=MC3cqj43..IMM 
# new callback = http://localhost:5000/payment/transaction?invoice_id=9010&secret=MC3cqj43..IMM
# xpub = xpub6D5eSTTAHfaDKZS9EyqjNyZxEPXEaWtzMDBXebRA3zmpiJ1BYxAg7roq6SvjUoLgnynhrKJ6BB3NhcQHffPcCHTnKutJzXQDYRtFXJJCTKz 
# secrete = MC3cqj43..IMM 
# api_key = be4d1ec0-a18e-4a33-9e08-696748c183c4
#(callback_url + ' ' + app.config['XPUB'] + ' ' + app.config['SECRET_KEY'] + ' ' + app.config['API_KEY'],  file=sys.stderr)

@app.route("/")
def root():
    price_in_btc = to_btc('USD', PRICE_IN_USD)
    cur = connect_db.cursor()
    sql = 'INSERT INTO invoices(invoice_id, price_in_usd, price_in_btc, product_url) VALUES(%s, %s, %s, %s)'
    if (cur.execute(sql, (INVOICE_ID, PRICE_IN_USD, price_in_btc, PRODUCT_URL))):
        return render_template('invoice.html', blockchain_root=app.config['BLOCKCHAIN_ROOT'], invoice_id=INVOICE_ID, price_in_btc=price_in_btc)
    else:
        return "error"

@app.route("/create/<int:invoice_id>")
def create_handler(invoice_id):
    callback_url = url_for('payment_handler', invoice_id=invoice_id, secret=app.config['SECRET_KEY'], _external=True)
    print(callback_url)
    recv = receive(app.config['XPUB'], callback_url, app.config['API_KEY'])
    cur = connect_db.cursor()
    sql = 'UPDATE invoices SET address=%s WHERE invoice_id=%s'
    if (cur.execute(sql, (recv.address, invoice_id))):
      return json.dumps({'input_address': recv.address})
    else:
      return json.dumps({'message': 'err festack'})

@app.route('/payment/transaction', methods=['GET','POST'])
def payment_handler(invoice_id):
    address = request.args.get('address')
    secret = request.args.get('secret')
    confirmations = request.args.get('confirmations')
    tx_hash = request.args.get('transaction_hash')
    value = float(request.args.get('value')) / 100000000
    cur = connect_db.cursor()
    sql = 'SELECT address FROM invoices WHERE invoice_id = %i'
    order = cur.execute(sql, (invoice_idd))
    # order = query_db("""SELECT address FROM invoices WHERE invoice_id = ?""", [invoice_idd], one=True)
    if address != order['address']:
        return 'Incorrect Receiving Address', 400
    if secret != app.config['SECRET_KEY']:
        return 'invalid secret', 400
    if confirmations >= 4:
        run_db("""INSERT INTO invoice_payments
                  (invoice_id, transaction_hash, value)
                  VALUES (%i, %s, %s)""",
               [invoice_id, tx_hash, value])
        run_db("""DELETE FROM pending_invoice_payments
                  WHERE invoice_id = %i""",
               [invoice_id])
        return '*ok*'
    else:
        run_db("""INSERT INTO pending_invoice_payments
                  (invoice_id, transaction_hash, value)
                VALUES (?, ?, ?)""",
               [invoice_id, tx_hash, value])
        return 'Waiting for confirmations'
    # should never reach here!
    return 'something went wrong', 500

@app.route("/order_status/<int:invoice_id>")
def order_status(invoice_id):
    order = query_db("""SELECT price_in_usd, product_url, price_in_btc
                        FROM invoices
                        WHERE invoice_id = %i""",
                     [invoice_id],
                     one=True)
    pending_txs = query_db("""SELECT value
                              FROM pending_invoice_payments
                              WHERE invoice_id = %i""",
                           [invoice_id]) or [{'value': 0}]
    confirmed_txs = query_db("""SELECT value
                                FROM invoice_payments
                                WHERE invoice_id = %i""",
                             [invoice_id]) or [{'value': 0}]

    confirmed = sum(t['value'] for t in confirmed_txs)
    pending = sum(t['value'] for t in pending_txs)
    return render_template('order_status.html', invoice_id=invoice_id, order=order, pending=pending, confirmed=confirmed)
