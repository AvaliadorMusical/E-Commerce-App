import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import searchIcon from "../assets/search.png";
import quickSearchIcon from "../assets/quicksearch.png";

import ProductCard from "../components/homeComponents/ProductCard";
import Pagination from "../components/homeComponents/Pagination";
import SearchBar from "../components/homeComponents/SearchBar";
import styles from "../styles/Home.module.css";

function Home() {
  const navigate = useNavigate();

  const goToAddPage = () => {
    navigate("/Add");
  };

const handleSearch = async (type, key, value) => {
  const start = performance.now();
  const res = await fetch(`http://localhost:5000/products/search/${type}?key=${key}&value=${value}`);
  const data = await res.json();
  const end = performance.now();
  console.log(`${type} search took ${(end - start).toFixed(3)} ms`);
  setProducts(Array.isArray(data) ? data : []);
};

const handleSort = async (key) => {
  const start = performance.now();
  const res = await fetch(`http://localhost:5000/products/sort/bubble?key=${key}`);
  const data = await res.json();
  const end = performance.now();
  console.log(`Bubble sort took ${(end - start).toFixed(3)} ms`);
  setProducts(Array.isArray(data) ? data : []);
};


const fetchProducts = async () => {
  const response = await fetch("http://127.0.0.1:5000/products");
  const data = await response.json();
  console.log(data);
  setProducts(Array.isArray(data) ? data : []);
};

  useEffect(() => {
    fetchProducts();
  }, []);

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 3;

  const start = (page - 1) * perPage;
  const paginated = (products || []).slice(start, start + perPage);


  return (
    <div className={styles.containerMain}>
      <div className={styles.containerHeader}>
        <button className={styles.headerButtons} onClick={goToAddPage}>
          Add
        </button>

        <SearchBar
          searchIcon={searchIcon}
          quickSearchIcon={quickSearchIcon}
          onSearch={handleSearch}
        />

        <button className={styles.headerButtons}
          onClick={() => handleSort("price")}
        >
          Sort
        </button>
      </div>

      <div className={styles.containerProducts}>
        <div className={styles.cardProduct}>
          {paginated.map((p) => (
            <ProductCard
              key={p._id}
              id={p._id}
              name={p.name}
              description={p.description}
              price={p.price}
            />
          ))}
        </div>

        <div className={styles.productPages}>
          <Pagination
            totalItems={products.length}
            perPage={perPage}
            currentPage={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
