from flask import Flask,render_template 
from os import path
app = Flask(__name__,template_folder='../client/templates',static_folder='../client/static')

@app.route("/")
@app.route("/home")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)