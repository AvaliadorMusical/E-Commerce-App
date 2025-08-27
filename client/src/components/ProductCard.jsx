import styles from '../styles/Home.module.css';

function ProductCard({ title, description, price }) {
  return (
    <div className={styles.cardItem}>
      <div className={styles.image}>
        {/* Aqui pode entrar uma imagem depois */}
      </div>
      <div className={styles.eachProduct}>
        <div className={styles.description}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{price}</p>
        </div>
        <div className={styles.config}>
          <button>
            <img src="/src/assets/trash.png" alt="Remove" />
          </button>
        </div>
      </div>
    </div>

  )
}

export default ProductCard