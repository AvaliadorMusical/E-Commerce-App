from db import produtos
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/products/show")
def mostrarProdutos():
    docs = list(produtos.find({}, {"_id": 0}))
    return jsonify(docs)

