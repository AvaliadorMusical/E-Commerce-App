function Pagination({ totalItems, perPage, currentPage, setPage}) {
  const totalPages = Math.ceil(totalItems / perPage);
  const maxVisible = 5;
  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let end = start + maxVisible - 1;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - maxVisible + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="product-pages">
      {pages.map((num) => (
        <button
          key={num}
          className={currentPage === num ? 'page-btn active' : 'page-btn'}
          onClick={() => setPage(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Pagination