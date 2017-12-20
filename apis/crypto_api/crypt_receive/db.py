#!/usr/bin/python 
from contextlib import closing
from flask import g
from crypt_receive import app

import pymysql as MySQLdb
from flaskext.mysql import MySQL
from flask import Flask
from flask_restful import Resource, Api

def connect_db():
    # MySQL configurations
    host = "localhost"
    username = "root"
    password = ""
    dbname = "fstackpaytotaldb"
    #mysql configuraions end
    Dbconn = MySQLdb.connect(host, username, password, dbname)
    return Dbconn
    # return sqlite3.connect(app.config['DATABASE'])

def setup_db():
    with closing(connect_db()) as db:
        with app.open_resource('../resources/setup.sql') as fd:
            db.cursor()
        db.commit()

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = connect_db()
        db.row_factory = sqlite3.Row
    return db

def query_db(query, args=(), one=False):
    with closing(get_db().execute(query, args)) as cur:
        rv = cur.fetchall()
        return (rv[0] if rv else None) if one else rv

def run_db(query, args=()):
    cur = connect_db.cursor()
    db.execute(query, args)
    db.commit()

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()
