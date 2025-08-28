import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import searchIcon from "../assets/search.png";
import quickSearchIcon from "../assets/quicksearch.png";

import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.css";

function Home() {
  const navigate = useNavigate();

  const goToAddPage = () => {
    navigate("/Add");
  };

  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("asc");
  const [search, setSearch] = useState("");

  const fetchProducts = async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`http://127.0.0.1:5000/products?${query}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts({ order });
  }, [order]);

  const [page, setPage] = useState(1);
  const perPage = 3;

  const start = (page - 1) * perPage;
  const paginated = products.slice(start, start + perPage);

  const sortByPrice = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleLinearSearch = () => {
    fetchProducts({ order, search, search_type: "linear" });
    setPage(1);
  };

  const handleBinarySearch = () => {
    fetchProducts({ order, search, search_type: "binary" });
    setPage(1);
  };

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerHeader}>
        <button className={styles.headerButtons} onClick={goToAddPage}>
          Add
        </button>

        <SearchBar
          searchIcon={searchIcon}
          quickSearchIcon={quickSearchIcon}
          value={search}
          onChange={handleSearch}
          onLinearSearch={handleLinearSearch}
          onBinarySearch={handleBinarySearch}
        />

        <button className={styles.headerButtons} onClick={sortByPrice}>
          Sort by Price ({order === "asc" ? "↑" : "↓"})
        </button>
      </div>

      <div className={styles.containerProducts}>
        <div className={styles.cardProduct}>
          {paginated.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              description={p.description}
              price={`R$ ${p.price.toFixed(2)}`}
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
