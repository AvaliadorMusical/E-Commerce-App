from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from credenciais import url_mongo
from bson import ObjectId

cliente = MongoClient(url_mongo)
db = cliente["e-commerce"]
produtos = db["produtos"]

app = Flask(__name__)
CORS(app)  

@app.route("/products", methods=["GET"])
def get_products():
  items = list(produtos.find())
  for item in items:
    item["_id"] = str(item["_id"])
  return jsonify(items)

@app.route("/products", methods=["POST"])
def add_products():
  data = request.json
  result = produtos.insert_one(data)
  return jsonify({"_id": str(result.inserted_id)}), 201

@app.route("/products/<id>", methods=["DELETE"])
def delete_product(id):
  produtos.delete_one({"_id": ObjectId(id)})
  return jsonify({"message": "deleted"})

if __name__ == "__main__":
  app.run(debug=True)