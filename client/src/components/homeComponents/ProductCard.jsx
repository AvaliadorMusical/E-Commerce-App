import styles from '../../styles/Home.module.css';

function ProductCard({ id, name, description, price }) {
  const eventHandler = async () => {
    

    const response = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
    const data = await response.json()
    console.log(data)
  }
    

  return (
    <div className={styles.cardItem}>
      <div className={styles.image}>
        {/* Aqui pode entrar uma imagem depois */}
      </div>
      <div className={styles.eachProduct}>
        <div className={styles.description}>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{price}</p>
        </div>
        <div className={styles.config}>
          <button onClick={eventHandler}>
            <img src="/src/assets/trash.png" alt="Remove" />
          </button>
        </div>
      </div>
    </div>

  )
}

export default ProductCard