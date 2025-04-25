function SearchBox({ searchQuery, handleSearchChange, handleSearchSubmit }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown} // 추가된 부분
        placeholder="메뉴를 검색하세요"
      />
      <button onClick={handleSearchSubmit}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 14.318L13.4306 11.7388C14.2947 10.5231 14.8083 9.03896 14.8083 7.43184C14.8083 3.3272 11.4934 0 7.40416 0C3.31496 0 0 3.3272 0 7.43184C0 11.5365 3.31496 14.8637 7.40416 14.8637C9.036 14.8637 10.5396 14.3275 11.7634 13.4298L14.3242 16L16 14.318ZM2.04768 7.43184C2.04768 4.46256 4.44592 2.05528 7.40416 2.05528C10.3624 2.05528 12.7606 4.46256 12.7606 7.43184C12.7606 10.4011 10.3625 12.8084 7.40416 12.8084C4.44584 12.8084 2.04768 10.4011 2.04768 7.43184Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchBox;
