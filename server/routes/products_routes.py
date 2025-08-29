from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from bson import ObjectId
from credenciais import url_mongo

# cria a conexão com o banco
cliente = MongoClient(url_mongo)
db = cliente["e-commerce"]
produtos = db["produtos"]

# cria um "conjunto de rotas" chamado Blueprint
products_bp = Blueprint("products", __name__)

# rota GET /products → lista todos os produtos
@products_bp.route("/", methods=["GET"])
def get_products():
    items = list(produtos.find())
    # transforma o ObjectId em string, senão o JSON dá erro
    for item in items:
        item["_id"] = str(item["_id"])
    return jsonify(items)

# rota POST /products → insere um produto novo
@products_bp.route("/", methods=["POST"])
def add_products():
    data = request.json  # pega o JSON enviado pelo frontend
    result = produtos.insert_one(data)  # insere no banco
    return jsonify({"_id": str(result.inserted_id)}), 201

# rota DELETE /products/<id> → remove um produto pelo id
@products_bp.route("/<id>", methods=["DELETE"])
def delete_product(id):
    produtos.delete_one({"_id": ObjectId(id)})
    return jsonify({"message": "deleted"})
