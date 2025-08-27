import styles from '../styles/Home.module.css';

function SearchBar({ searchIcon, quickSearchIcon }) {
  return (
    <div className={styles.searchGroup}>
      <form>
        <input 
          className={styles.searchBox}
          type="text" 
          placeholder="Search product"
        />
      </form>
      <div className={styles.buttonSettings}>
        <button className={styles.iconBtn}>
          <img className={styles.searchImg} src={searchIcon} alt="Linear Search" />
        </button>
        <button className={styles.iconBtn}>
          <img src={quickSearchIcon} alt="Binary Search" />
        </button>
      </div>  
    </div>

  ) 
}

export default SearchBar