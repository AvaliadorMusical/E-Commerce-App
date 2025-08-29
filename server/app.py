from flask import Flask
from flask_cors import CORS
from routes.products_routes import products_bp   # importa as rotas de produtos
from routes.algorithms_routes import algorithms_bp  # importa as rotas de algoritmos

# cria a aplicação Flask
app = Flask(__name__)
CORS(app)  # libera o acesso do frontend (React)

# registra as rotas vindas de outros arquivos
# tudo que for "/products" vem de products_routes
app.register_blueprint(products_bp, url_prefix="/products")

# tudo que for "/products/search/..." ou "/products/sort/..." vem de algorithms_routes
app.register_blueprint(algorithms_bp, url_prefix="/products")

if __name__ == "__main__":
    # inicia o servidor Flask em localhost:5000
    app.run(debug=True)
