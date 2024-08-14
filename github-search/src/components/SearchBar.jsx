const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="search"
        className="search-box"
        placeholder="Enter Profile Name..."
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
