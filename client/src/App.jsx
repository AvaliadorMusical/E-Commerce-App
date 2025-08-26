import { useState } from 'react'
import searchIcon from './assets/search.png'
import quickSearchIcon from './assets/quicksearch.png'
import menuIcon from './assets/menu.png'
import ProductCard from './components/ProductCard'

function App() {
  const [products] = useState([
    { id: 1, title: "Esfirra de Mirtilo", price: 8.99 },
  { id: 2, title: "Omelete ao Molho", price: 16.90 },
  { id: 3, title: "Panqueca de Blueberry", price: 18.90 },
  { id: 4, title: "Bolo de Chocolate", price: 12.50 },
  { id: 5, title: "Coxinha", price: 6.99 },
  { id: 6, title: "Pão de Queijo", price: 4.50 },
  { id: 7, title: "Croissant de Presunto", price: 9.99 },
  { id: 8, title: "Torta de Limão", price: 14.90 },
  { id: 9, title: "Pastel de Carne", price: 7.50 },
  { id: 10, title: "Empada de Frango", price: 8.50 },
  { id: 11, title: "Brigadeiro Gourmet", price: 3.50 },
  { id: 12, title: "Quiche de Queijo", price: 11.90 },
  { id: 13, title: "Cheesecake de Frutas Vermelhas", price: 19.90 },
  { id: 14, title: "Sanduíche Natural", price: 12.00 },
  { id: 15, title: "Muffin de Chocolate", price: 6.00 },
  { id: 16, title: "Brownie com Nozes", price: 7.90 },
  { id: 17, title: "Suco Natural de Laranja", price: 5.50 },
  { id: 18, title: "Café Espresso", price: 4.00 },
  { id: 19, title: "Chá Gelado", price: 4.50 },
  { id: 20, title: "Milkshake de Morango", price: 9.00 },
  { id: 21, title: "Pizza Marguerita", price: 22.90 },
  { id: 22, title: "Pizza Calabresa", price: 24.90 },
  { id: 23, title: "Lasanha à Bolonhesa", price: 28.50 },
  { id: 24, title: "Lasanha de Frango", price: 27.00 },
  { id: 25, title: "Risoto de Cogumelos", price: 32.90 },
  { id: 26, title: "Risoto de Camarão", price: 39.90 },
  { id: 27, title: "Hambúrguer Clássico", price: 18.50 },
  { id: 28, title: "Hambúrguer Duplo", price: 24.00 },
  { id: 29, title: "Hot Dog Especial", price: 14.90 },
  { id: 30, title: "Hot Dog Simples", price: 9.90 },
  { id: 31, title: "Salada Caesar", price: 15.90 },
  { id: 32, title: "Salada Tropical", price: 14.50 },
  { id: 33, title: "Crepe de Frango", price: 13.90 },
  { id: 34, title: "Crepe de Nutella", price: 16.90 },
  { id: 35, title: "Panetone Tradicional", price: 19.90 },
  { id: 36, title: "Churros com Doce de Leite", price: 8.90 },
  { id: 37, title: "Picolé de Chocolate", price: 4.50 },
  { id: 38, title: "Sorvete 2 bolas", price: 7.00 },
  { id: 39, title: "Petit Gateau", price: 17.90 },
  { id: 40, title: "Tiramisu", price: 21.00 }
  ])

  const [page, setPage] = useState(1)
  const perPage = 3

  const start = (page - 1) * perPage
  const paginated = products.slice(start, start + perPage)

  return (
    <>
      <div className="container-main">
        <div className="container-header">
          <button className="header-buttons">
            Add
          </button>
          <div className="search-group">
            <form>
              <input 
                className="search-box"
                type="text" 
                placeholder="Search product"
              />
            </form>
            <div className="button-settings">
              <button className="icon-btn">
                <img className="search-img" src={searchIcon} alt="Linear Search" />
              </button>
              <button className="icon-btn">
                <img src={quickSearchIcon} alt="Binary Search" />
              </button>
            </div>  
          </div>

          <button className="header-buttons">
            Sort
          </button>
        </div>

        <div className="container-products">
          <div className="card-product">
              {paginated.map(p => (
                <ProductCard
                  key={p.id}
                  title={p.title}
                  description="Aqui pegamos do back depois"
                  price={`R$ ${p.price.toFixed(2)}`}
                />
              ))} 
          </div>
          <div className="product-pages">
            {(() => {
              const totalPages = Math.ceil(products.length / perPage)
              const maxVisible = 5
              let start = Math.max(1, page - Math.floor(maxVisible / 2))
              let end = start + maxVisible - 1

              if (end > totalPages) {
                end = totalPages
                start = Math.max(1, end - maxVisible + 1)
              }

              const pages = []
              for (let i = start; i <= end; i++) {
                pages.push(i)
              }

              return pages.map(num => (
                <button
                  key={num}
                  className={page === num ? "page-btn active" : "page-btn"}
                  onClick={() => setPage(num)}
                >
                  {num}
                </button>
              ))
            })()}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
