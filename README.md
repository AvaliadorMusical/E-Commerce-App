# E-commerce Simples

Projeto acadêmico para aplicar **Linear Search**, **Binary Search** e **Bubble Sort** em um e-commerce básico. Usuários podem criar, deletar, buscar (linear ou binária) e filtrar produtos por preço (bubble sort).

- **Frontend**: React + Vite
- **Backend**: Flask + MongoDB

## Tecnologias
- **Frontend**: React, Vite, JavaScript
- **Backend**: Flask, MongoDB, Flask-CORS
- **Outras**: Node.js, Python, Git

## Pré-requisitos
- Node.js (v18+): [nodejs.org](https://nodejs.org)
- Python (v3.8+): [python.org](https://www.python.org)
- MongoDB: Local ([MongoDB Community](https://www.mongodb.com/try/download/community)) ou [Atlas](https://www.mongodb.com/cloud/atlas)
- Git: [git-scm.com](https://git-scm.com)

## Como Rodar

### 1. Clonar o Repositório
```bash
git clone <url-do-repositorio>
cd <nome-do-repositorio>
```

### 2. Backend (Flask + MongoDB)
```bash
cd server
python -m venv venv
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate
pip install -r requirements.txt
# Configure MongoDB (edite app.py ou .env com MONGODB_URI=mongodb://localhost:27017/ecommerce)
python app.py
```
> **Dica**: Se `requirements.txt` não existir, instale: `pip install flask flask-cors pymongo`. Backend roda em `http://localhost:5000`.

### 3. Frontend (React + Vite)
```bash
cd client
npm install
npm run dev
```
> **Dica**: Acesse `http://localhost:5173`. Backend deve estar rodando.

### 4. Usar a Aplicação
- No navegador, acesse o frontend.
- Crie, busque (linear/binary), filtre (bubble sort) ou delete produtos.

## Estrutura
```
ecommerce-simples/
├── client/           # Frontend
│   ├── src/         # Código React
│   └── package.json # Dependências
├── server/          # Backend
│   ├── app.py       # API Flask
│   └── requirements.txt
└── README.md
```

## Algoritmos
- **Linear Search**: Busca sequencial em listas.
- **Binary Search**: Busca rápida em listas ordenadas.
- **Bubble Sort**: Ordena preços trocando elementos adjacentes.

## Solução de Problemas
- **CORS**: Verifique `flask-cors` em `app.py`.
- **MongoDB**: Confirme URI e se o banco está ativo.
- **Portas**: Mude em `app.py` (ex: `port=5001`) ou `vite.config.js`.
- **Dependências**: Reinstale com `pip install` ou `npm install`.

## Contribuições
Projeto acadêmico. Faça fork e melhore! Dúvidas? Fale com o desenvolvedor.

---

**Desenvolvido por [Seu Nome] e equipe.**