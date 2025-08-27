import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import searchIcon from '../assets/search.png';
import quickSearchIcon from '../assets/quicksearch.png';

import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.css';

function Home() {
  const navigate = useNavigate();

  const goToAddPage = () => {
    navigate("/Add");
  };

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("http://127.0.0.1:5000/products");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [page, setPage] = useState(1);
  const perPage = 3;

  const start = (page - 1) * perPage;
  const paginated = products.slice(start, start + perPage);

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerHeader}>
        <button className={styles.headerButtons} onClick={goToAddPage}>
          Add
        </button>

        <SearchBar searchIcon={searchIcon} quickSearchIcon={quickSearchIcon} />

        <button className={styles.headerButtons}>
          Sort
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
