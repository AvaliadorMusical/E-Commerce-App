import { useNavigate } from 'react-router-dom';
import styles from '../styles/Add.module.css';

function Add() {
  const navigate = useNavigate()

  function goToHomePage(){
    navigate("/")
  }

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerProducts}>
        <div className={styles.upCard}>
          <div className={styles.imgCard}>

          </div>
          <div className={styles.infoCard}>
            <div className={styles.descCard}>
              <input type="text" placeholder="Name" />
            </div>
            <div className={styles.descCard}>
              <input type="text" placeholder="Price" />
            </div>
            <div className={styles.descCard}>
              <input type="text" placeholder="Rate" />
            </div>
          </div>
        </div>
        <div className={styles.downCard}>
          <div className={styles.description}>
              <textarea placeholder="Write the product description..." maxLength={150}/>
          </div>
          <div className={styles.downBtn}>
            <button className={styles.mainBtn} onClick={goToHomePage}>Back</button>
            <button className={styles.mainBtn}>Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add