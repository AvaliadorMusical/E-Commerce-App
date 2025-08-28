from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

def products():
  return [
    { 
      "id": 1, 
      "title": "Esfirra de Mirtilo", 
      "price": 8.99, 
      "description": "Esfirra de mirtilo com massa macia e dourada, recheio de frutas frescas caramelizadas, oferecendo um sabor doce e equilibrado em cada mordida." 
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
      "title": "Coxinha", 
      "price": 6.99, 
      "description": "Coxinha crocante e recheada com frango desfiado, temperado no ponto perfeito." 
    },
    { 
      "id": 6, 
      "title": "Empadinha de Palmito", 
      "price": 7.50, 
      "description": "Massa amanteigada e crocante recheada com um cremoso refogado de palmito e especiarias." 
    },
    { 
      "id": 7, 
      "title": "Torta de Limão", 
      "price": 14.90, 
      "description": "Base crocante de biscoito com recheio de creme de limão e cobertura de merengue maçaricado." 
    },
    { 
      "id": 8, 
      "title": "Quiche de Espinafre", 
      "price": 19.90, 
      "description": "Quiche leve e saborosa com creme de ovos, queijo e folhas frescas de espinafre." 
    },
    { 
      "id": 9, 
      "title": "Croissant de Presunto e Queijo", 
      "price": 11.90, 
      "description": "Croissant folhado e amanteigado, recheado com presunto defumado e queijo derretido." 
    },
    { 
      "id": 10, 
      "title": "Muffin de Cenoura com Gotas de Chocolate", 
      "price": 9.50, 
      "description": "Muffin fofinho de cenoura com generosas gotas de chocolate meio amargo." 
    },
    { 
      "id": 11, 
      "title": "Brownie de Nozes", 
      "price": 10.20, 
      "description": "Brownie úmido de chocolate com pedaços crocantes de nozes." 
    },
    { 
      "id": 12, 
      "title": "Pão de Queijo", 
      "price": 6.80, 
      "description": "Clássico mineiro com casquinha crocante e interior macio e queijudo." 
    },
    { 
      "id": 13, 
      "title": "Baguete Artesanal", 
      "price": 15.30, 
      "description": "Pão francês de fermentação lenta, crocante por fora e macio por dentro." 
    },
    { 
      "id": 14, 
      "title": "Pastel de Carne", 
      "price": 8.10, 
      "description": "Pastel frito crocante e dourado, recheado com carne moída bem temperada." 
    },
    { 
      "id": 15, 
      "title": "Torta de Maçã", 
      "price": 13.40, 
      "description": "Clássica torta recheada com maçãs frescas e toque de canela." 
    },
    { 
      "id": 16, 
      "title": "Cheesecake de Morango", 
      "price": 18.60, 
      "description": "Cheesecake cremoso com calda e pedaços de morango fresco." 
    },
    { 
      "id": 17, 
      "title": "Sanduíche Natural", 
      "price": 12.00, 
      "description": "Pão integral recheado com peito de frango desfiado, alface, cenoura e maionese leve." 
    },
    { 
      "id": 18, 
      "title": "Donut de Chocolate", 
      "price": 7.70, 
      "description": "Rosquinha macia coberta com ganache de chocolate ao leite." 
    },
    { 
      "id": 19, 
      "title": "Macaron de Pistache", 
      "price": 9.80, 
      "description": "Doce francês leve e crocante com recheio cremoso de pistache." 
    },
    { 
      "id": 20, 
      "title": "Brigadeiro Gourmet", 
      "price": 5.90, 
      "description": "Tradicional doce brasileiro feito com chocolate belga e finalizado com granulado belga." 
    },
    { 
      "id": 21, 
      "title": "Cookie de Aveia", 
      "price": 6.50, 
      "description": "Biscoito rústico de aveia com passas e um leve toque de canela." 
    },
    { 
      "id": 22, 
      "title": "Cupcake de Red Velvet", 
      "price": 11.40, 
      "description": "Bolinho vermelho aveludado com cobertura de cream cheese." 
    },
    { 
      "id": 23, 
      "title": "Pizza Margherita", 
      "price": 24.90, 
      "description": "Pizza clássica com molho de tomate, muçarela fresca e manjericão." 
    },
    { 
      "id": 24, 
      "title": "Pizza de Calabresa", 
      "price": 26.50, 
      "description": "Pizza tradicional com fatias de calabresa e cebola roxa." 
    },
    { 
      "id": 25, 
      "title": "Risoto de Cogumelos", 
      "price": 29.90, 
      "description": "Arroz arbóreo cremoso preparado com cogumelos frescos e parmesão." 
    },
    { 
      "id": 26, 
      "title": "Lasanha Bolonhesa", 
      "price": 27.80, 
      "description": "Massa fresca em camadas com molho bolonhesa e bechamel gratinado." 
    },
    { 
      "id": 27, 
      "title": "Escondidinho de Carne Seca", 
      "price": 22.40, 
      "description": "Purê de mandioca cremoso com recheio de carne seca desfiada." 
    },
    { 
      "id": 28, 
      "title": "Pão Caseiro", 
      "price": 9.20, 
      "description": "Pão macio feito com fermentação natural e casca crocante." 
    },
    { 
      "id": 29, 
      "title": "Wrap de Frango", 
      "price": 15.60, 
      "description": "Tortilla recheada com frango grelhado, alface, cenoura e molho de iogurte." 
    },
    { 
      "id": 30, 
      "title": "Biscoito Amanteigado", 
      "price": 7.10, 
      "description": "Biscoito leve, crocante e amanteigado que derrete na boca." 
    },
    { 
      "id": 31, 
      "title": "Croquete de Carne", 
      "price": 8.40, 
      "description": "Salgado empanado e frito, recheado com carne moída temperada." 
    },
    { 
      "id": 32, 
      "title": "Esfirra de Carne", 
      "price": 6.90, 
      "description": "Esfirra aberta recheada com carne bovina moída, tomate e temperos." 
    },
    { 
      "id": 33, 
      "title": "Kibe Assado", 
      "price": 10.50, 
      "description": "Kibe de forno recheado com queijo e temperos árabes." 
    },
    { 
      "id": 34, 
      "title": "Salada Caesar", 
      "price": 18.70, 
      "description": "Clássica salada de alface romana, croutons, parmesão e molho caesar." 
    },
    { 
      "id": 35, 
      "title": "Salada Grega", 
      "price": 17.90, 
      "description": "Mix de alface, tomate, pepino, azeitona preta e queijo feta." 
    },
    { 
      "id": 36, 
      "title": "Hambúrguer Artesanal", 
      "price": 23.50, 
      "description": "Pão brioche, hambúrguer de carne bovina artesanal e queijo derretido." 
    },
    { 
      "id": 37, 
      "title": "Hot Dog Especial", 
      "price": 14.80, 
      "description": "Pão macio recheado com salsicha, molho especial e batata palha." 
    },
    { 
      "id": 38, 
      "title": "Batata Rústica", 
      "price": 9.90, 
      "description": "Batatas assadas com ervas, alho e um toque de azeite." 
    },
    { 
      "id": 39, 
      "title": "Tapioca de Queijo", 
      "price": 8.30, 
      "description": "Tapioca tradicional recheada com queijo coalho derretido." 
    },
    { 
      "id": 40, 
      "title": "Açaí na Tigela", 
      "price": 16.20, 
      "description": "Açaí cremoso servido com granola e banana fatiada." 
    },
    { 
      "id": 41, 
      "title": "Suco Natural de Laranja", 
      "price": 7.60, 
      "description": "Suco feito com laranjas frescas, sem adição de açúcar." 
    },
    { 
      "id": 42, 
      "title": "Smoothie de Morango", 
      "price": 12.40, 
      "description": "Bebida cremosa feita com morangos frescos e iogurte." 
    },
    { 
      "id": 43, 
      "title": "Café Espresso", 
      "price": 5.90, 
      "description": "Café encorpado e aromático preparado na máquina espresso." 
    },
    { 
      "id": 44, 
      "title": "Cappuccino Cremoso", 
      "price": 9.20, 
      "description": "Café espresso com leite vaporizado e espuma cremosa." 
    },
    { 
      "id": 45, 
      "title": "Chá Gelado de Pêssego", 
      "price": 6.80, 
      "description": "Bebida refrescante preparada com chá preto e pêssego." 
    },
    { 
      "id": 46, 
      "title": "Milkshake de Chocolate", 
      "price": 13.90, 
      "description": "Milkshake cremoso de chocolate, servido gelado." 
    },
    { 
      "id": 47, 
      "title": "Sorvete de Baunilha", 
      "price": 11.30, 
      "description": "Clássico sorvete de baunilha feito com favas naturais." 
    },
    { 
      "id": 48, 
      "title": "Sorvete de Pistache", 
      "price": 12.70, 
      "description": "Sorvete artesanal de pistache com textura cremosa." 
    },
    { 
      "id": 49, 
      "title": "Tiramisu", 
      "price": 18.90, 
      "description": "Sobremesa italiana com camadas de biscoito, café e creme mascarpone." 
    },
    { 
      "id": 50, 
      "title": "Pavê de Chocolate", 
      "price": 15.40, 
      "description": "Sobremesa em camadas de biscoito e creme de chocolate." 
    }
  ]

@app.route("/products", methods=["GET"])
def get_products():
  order = request.args.get("order")
  search = request.args.get("search", "").lower()
  items = products()

  if search:
    items = [
      p for p in items
      if search in p["title"].lower() or search in p["description"].lower()
    ]

  if order in ("asc", "desc"):
    n = len(items)
    for i in range(n - 1):
      for j in range(n - i - 1):
        should_swap = (
          items[j]["price"] > items[j + 1]["price"]
          if order == "asc"
          else items[j]["price"] < items[j + 1]["price"]
        )
      if should_swap:
        items[j], items[j + 1] = items[j + 1], items[j]
  return jsonify(items)

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