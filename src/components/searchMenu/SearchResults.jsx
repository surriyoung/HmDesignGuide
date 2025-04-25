import SearchList from "./SearchList";

const SearchResults = ({
  searchResults,
  handleCloseSearchResults,
  navigate,
}) => {
  const handleItemClick = (item) => {
    navigate(item.path);
  };

  return (
    <div className="search-results result-wrap">
      <div className="result-title">
        <p>검색 결과</p>
        <button onClick={handleCloseSearchResults} className="close-btn">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33268 16.3307L4.16602 15.1641L8.83268 10.4974L4.16602 5.83073L5.33268 4.66406L9.99935 9.33073L14.666 4.66406L15.8327 5.83073L11.166 10.4974L15.8327 15.1641L14.666 16.3307L9.99935 11.6641L5.33268 16.3307Z"
              fill="#999899"
            />
          </svg>
        </button>
      </div>
      <SearchList
        items={searchResults}
        onItemClick={handleItemClick}
        emptyMessage="검색 결과가 없습니다."
      />
    </div>
  );
};

export default SearchResults;
