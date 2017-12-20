#!/usr/bin/env python

# all the imports

from crypt_receive import app
from crypt_receive.db import setup_db

if __name__ == '__main__':
    setup_db()
    app.run(
        debug=True,
        port=app.config['PORT'] if 'PORT' in app.config else 5000,
        host=app.config['BIND'] if 'BIND' in app.config else '127.0.0.1'
    )

