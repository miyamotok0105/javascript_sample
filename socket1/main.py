import os
import json
import datetime
import random
import time
from gevent import pywsgi
from geventwebsocket.handler import WebSocketHandler
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/publish')
def publish():
    if request.environ.get('wsgi.websocket'):
        ws = request.environ['wsgi.websocket']
        while True:
            t = int(time.mktime(datetime.datetime.now().timetuple()))
            ws.send(json.dumps([{"time": t, "y": random.random() * 1000},
                                {"time": t, "y": random.random() * 1000}]))
            time.sleep(1)
    return

if __name__ == '__main__':
    app.debug = True
    server = pywsgi.WSGIServer(('localhost', 8000), app, handler_class=WebSocketHandler)
    server.serve_forever()
