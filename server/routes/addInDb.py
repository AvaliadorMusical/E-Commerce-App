from db import produtos
from flask import Flask, jsonify, request


app = Flask(__name__)



@app.route("/produtos/add")
def addProduto():
    nome = request.json.get("name")
    preço = request.json.get("price")
    nota = request.json.get("rating")
    descricao = request.json.get("description")
    imagem = request.json.get("image")
    produtos.insert_one({ "name" : nome, "price" : preço, "rating" : nota, "description" : descricao, "image": imagem})

