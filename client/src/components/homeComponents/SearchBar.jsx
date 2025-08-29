import { useState } from "react";
import styles from "../../styles/Home.module.css";

function SearchBar({ searchIcon, quickSearchIcon, onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.searchGroup}>
      <form onSubmit={(e) => {
          e.preventDefault();
          onSearch("linear", "name", query);
      }}>
        <input
          className={styles.searchBox}
          type="text"
          placeholder="Search product"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className={styles.buttonSettings}>
        <button
          className={styles.iconBtn}
          type="button"
          onClick={() => onSearch("linear", "name", query)}
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
          onClick={() => onSearch("binary", "name", query)}
        >
          <img src={quickSearchIcon} alt="Binary Search" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
