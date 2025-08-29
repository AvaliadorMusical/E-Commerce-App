from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from credenciais import url_mongo
import algorithms as alg  # importa as funções linear_search, binary_search, bubble_sort

# conecta no banco
cliente = MongoClient(url_mongo)
db = cliente["e-commerce"]
produtos = db["produtos"]

# cria um "conjunto de rotas" só pros algoritmos
algorithms_bp = Blueprint("algorithms", __name__)

# rota GET /products/search/linear → busca linear
@algorithms_bp.route("/search/linear", methods=["GET"])
def search_linear():
    key = request.args.get("key", "name")     # campo pra buscar (ex: name)
    value = request.args.get("value", "")     # valor buscado
    products = list(produtos.find())
    for p in products:
        p["_id"] = str(p["_id"])
    result = alg.linear_search(products, key, value)
    return jsonify(result or [])

# rota GET /products/search/binary → busca binária
@algorithms_bp.route("/search/binary", methods=["GET"])
def search_binary():
    key = request.args.get("key", "name")
    value = request.args.get("value", "")
    products = list(produtos.find())
    for p in products:
        p["_id"] = str(p["_id"])
    # ordena antes de rodar o binary search
    products_sorted = sorted(products, key=lambda x: str(x.get(key, "")).lower())
    result = alg.binary_search(products_sorted, key, value)
    return jsonify(result or [])

# rota GET /products/sort/bubble → ordena usando bubble sort
@algorithms_bp.route("/sort/bubble", methods=["GET"])
def sort_bubble():
    key = request.args.get("key", "price")  # campo a ser usado na ordenação
    products = list(produtos.find())
    for p in products:
        p["_id"] = str(p["_id"])
    result = alg.bubble_sort(products, key)
    return jsonify(result or [])
