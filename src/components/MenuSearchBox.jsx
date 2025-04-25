import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
import SearchResults from "./searchMenu/SearchResults";
import RecentSearches from "./searchMenu/RecentSearches";

const MenuSearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const navigate = useNavigate();

  // 메뉴 목록 예시
  const menuItems = [
    { label: "홈", path: "/" },
    { label: "색상", path: "/color" },
    { label: "폰트", path: "/font-size" },
    { label: "테이블", path: "/table" },
    { label: "컴포넌트", path: "/button" },
    { label: "폼", path: "/form" },
  ];

  // 검색어 변경 시 실행되는 함수
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const filteredResults = menuItems.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  // 검색어 제출 시 실행되는 함수
  const handleSearchSubmit = () => {
    if (
      searchQuery &&
      !recentSearches.some((item) => item.label === searchQuery)
    ) {
      const updatedSearches = [
        { label: searchQuery, path: "/" },
        ...recentSearches.slice(0, 5),
      ];
      setRecentSearches(updatedSearches);
    }
    const matchedItem = menuItems.find(
      (item) => item.label.toLowerCase() === searchQuery.toLowerCase()
    );
    if (matchedItem) {
      navigate(matchedItem.path);
    }
  };

  // 검색 결과 닫기
  const handleCloseSearchResults = () => {
    setSearchResults([]);
  };

  useEffect(() => {
    const savedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(savedSearches);
  }, []);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  return (
    <div className="main-tile menu-search-box">
      <div className="search-box-wrap">
        <SearchBox
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          handleSearchSubmit={handleSearchSubmit}
        />
        {searchResults.length > 0 && (
          <SearchResults
            searchResults={searchResults}
            handleCloseSearchResults={handleCloseSearchResults}
            navigate={navigate}
          />
        )}
      </div>
      <RecentSearches
        recentSearches={recentSearches}
        menuItems={menuItems}
        navigate={navigate}
      />
    </div>
  );
};

export default MenuSearchBox;
