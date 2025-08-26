function ProductCard({ title, description, price }) {
  return (
    <div className="card-item">
      <div className="image">
        {/* Aqui pode entrar uma imagem depois */}
      </div>
      <div className="each-product">
        <div className="description">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{price}</p>
        </div>
        <div className="config">
          <button>
            <img src="/src/assets/trash.png" alt="Remove" />
          </button>


        </div>
      </div>
    </div>
  )
}

export default ProductCard