import { useState, useEffect } from 'react'
import searchIcon from './assets/search.png'
import quickSearchIcon from './assets/quicksearch.png'
import ProductCard from './components/ProductCard'
import Pagination from './components/Pagination'
import SearchBar from './components/SearchBar'

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch("http://127.0.0.1:5000/products")
    const data = await response.json()
    console.log(data)
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  const [page, setPage] = useState(1)
  const perPage = 3

  const start = (page - 1) * perPage
  const paginated = products.slice(start, start + perPage)

  return (
    <>
      <div className="container-main">
        <div className="container-header">
          <button className="header-buttons">Add</button>
          <SearchBar searchIcon={searchIcon} quickSearchIcon={quickSearchIcon}/>
          <button className="header-buttons">Sort</button>
        </div>
        <div className="container-products">
          <div className="card-product">
              {paginated.map(p => (
                <ProductCard
                  key={p.id}
                  title={p.title}
                  description={p.description}
                  price={`R$ ${p.price.toFixed(2)}`}
                />
              ))}
          </div>
          <div className="product-pages">
            <Pagination
              totalItems={products.length}
              perPage={perPage}
              currentPage={page}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
