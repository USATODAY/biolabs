from flask import Flask, request, render_template

import os, json

## basic Flask configuration/setup
app = Flask(__name__)
app.config.from_object(__name__)

dir_path = os.path.dirname(os.path.realpath(__file__))


## read json file from static dir and sace it to python dictionary
lab_data = json.loads(open("%s/static/data.json" % dir_path).read())

@app.route('/')
def index():
    return render_template('index.html', labs=lab_data)

if __name__ == "__main__":
    app.run(host='0.0.0.0')


