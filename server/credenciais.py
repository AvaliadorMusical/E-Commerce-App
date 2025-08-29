from dotenv import load_dotenv
import os

load_dotenv()  # carrega as variáveis do .env

url_mongo = os.getenv("MONGO_URL")