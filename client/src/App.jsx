import { useState } from 'react'
import searchIcon from './assets/search.png'
import quickSearchIcon from './assets/quicksearch.png'
import menuIcon from './assets/menu.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-main">
        <div className="container-header">
          <button 
            className="header-buttons">
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

          <button 
            className="header-buttons">
            Sort
          </button>
        </div>

        <div className="container-products">
          <div className="card-product">
            <div className="card-item">
              <div className="image">

              </div>
              <div className="each-product">
                <div className="description">
                  <h3>Esfirra de Mirtilo</h3>
                  <p>Uma releitura doce da clássica esfirra: massa macia assada no forno, recheada com mirtilos suculentos e levemente caramelizados.</p>
                  <p>R$ 8,99</p>
                </div>
                <div className="config">
                  <button>
                    <img src={menuIcon} alt="Remove" />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-item">
              <div className="image">

              </div>
              <div className="each-product">
                <div className="description">
                  <h3>Omelete ao Molho</h3>
                  <p>Omelete macio preparado com ovos selecionados, servido com molho especial da casa (tomate rústico ou creme de ervas, conforme escolha).</p>
                  <p>R$ 16,90</p>
                </div>
                <div className="config">
                  <button>
                    <img src={menuIcon} alt="Remove" />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-item">
              <div className="image">

              </div>
              <div className="each-product">
                <div className="description">
                  <h3>Panqueca de Blueberry</h3>
                  <p>Massa leve e fofinha servida em camadas, coberta com calda de mirtilo fresco e um toque de açúcar de confeiteiro.</p>
                  <p>R$ 18,90</p>
                </div>
                <div className="config">
                  <button>
                    <img src={menuIcon} alt="Remove" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-pages">

          </div>
        </div>
      </div>
    </>
  )
}

export default App
