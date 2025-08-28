import styles from "../styles/Home.module.css";

function SearchBar({
  searchIcon,
  quickSearchIcon,
  value,
  onChange,
  onLinearSearch,
  onBinarySearch,
}) {
  return (
    <div className={styles.searchGroup}>
      <form>
        <input
          className={styles.searchBox}
          type="text"
          placeholder="Search product"
          value={value}
          onChange={onChange}
        />
      </form>
      <div className={styles.buttonSettings}>
        <button
          className={styles.iconBtn}
          type="button"
          onClick={onLinearSearch}
        >
          <img
            className={styles.searchImg}
            src={searchIcon}
            alt="Linear Search"
          />
        </button>
        <button
          className={styles.iconBtn}
          type="button"
          onClick={onBinarySearch}
        >
          <img src={quickSearchIcon} alt="Binary Search" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
