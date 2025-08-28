from pymongo import MongoClient
from flask import Flask, jsonify, request

app = Flask(__name__)

cliente = MongoClient("mongodb+srv://Henrique:Q52hUEvVCpYaJgUU@cluster0.zutd5pd.mongodb.net/")

db = cliente["e-commerce"]

produtos = db["produtos"]

@app.route("/produtos", methods=["GET"])
def addProduto():
    nome = request.json.get("name")
    preço = request.json.get("price")
    nota = request.json.get("rating")
    descricao = request.json.get("description")
    imagem = request.json.get("image")
    produtos.insert_one({ "name" : nome, "price" : preço, "rating" : nota, "description" : descricao, "image": imagem})

if __name__ == "__main__":
    app.run(debug=True)