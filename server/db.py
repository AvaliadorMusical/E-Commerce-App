from pymongo import MongoClient
from credenciais import url_mongo

cliente = MongoClient(url_mongo)
db = cliente["e-commerce"]
produtos = db["produtos"]