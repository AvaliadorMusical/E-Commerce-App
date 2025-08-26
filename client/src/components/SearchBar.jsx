function SearchBar({ searchIcon, quickSearchIcon }) {
  return (
    <div className="search-group">
      <form>
        <input 
          className="search-box"
            type="text" 
            placeholder="Search product"
        />
      </form>
        <div className="button-settings">
          <button className="icon-btn">
            <img className="search-img" src={searchIcon} alt="Linear Search" />
          </button>
          <button className="icon-btn">
            <img src={quickSearchIcon} alt="Binary Search" />
              </button>
          </div>  
        </div>
  ) 
}

export default SearchBar