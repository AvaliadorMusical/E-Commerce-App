from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

products = [
  { 
    "id": 1, 
    "title": "Esfirra de Mirtilo", 
    "price": 8.99, 
    "description": "Uma deliciosa esfirra com mirtilos frescos e levemente caramelizados, envolta em uma massa macia." 
  },
  { 
    "id": 2, 
    "title": "Omelete ao Molho", 
    "price": 16.90, 
    "description": "Omelete fofa com molho especial da casa, servido com tomate rústico ou creme de ervas." 
  },
  { 
    "id": 3, 
    "title": "Panqueca de Blueberry", 
    "price": 18.90, 
    "description": "Panquecas fofinhas recheadas com mirtilos frescos, servidas com calda de blueberry." 
  },
  { 
    "id": 4, 
    "title": "Bolo de Chocolate", 
    "price": 12.50, 
    "description": "Bolo de chocolate cremoso com uma camada de cobertura de ganache de chocolate." 
  },
  { 
    "id": 5, 
    "title": "Coxinh", 
    "price": 6.99, 
    "description": "Coxinha crocante e recheada com frango desfiado, temperado no ponto perfeito." 
  }
]

@app.route("/products", methods=["GET"])
def get_products():
  return jsonify(products)

@app.route("/products", methods=["POST"])
def add_product():
  data = request.get_json()
  new_id = max(p["id"] for p in products) + 1 if products else 1
  new_product = { "id": new_id, **data }
  products.append(new_product)
  return jsonify(new_product), 201

@app.route("/products/<int:pid>", methods=["DELETE"])
def delete_product(pid):
  global products
  products = [p for p in products if p["id"] != pid]
  return jsonify({"message": "removed"}), 200

if __name__ == "__main__":
  app.run(debug=True)