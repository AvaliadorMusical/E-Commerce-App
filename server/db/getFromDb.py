from pymongo import MongoClient
from flask import Flask, jsonify, request
from credenciais import url_mongo

app = Flask(__name__)

cliente = MongoClient(url_mongo)

db = cliente["e-commerce"]

produtos = db["produtos"]
produtos.insert_one({"name": "xyz"})
print(produtos.find())

@app.route("/products/show")
def mostrarProdutos():
    return jsonify(produtos.find())

if __name__ == "__main__":
    app.run(debug=True)