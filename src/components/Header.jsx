import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
import Logout from "../assets/icons/Logout";
import SearchBox from "../components/SearchBox";
import SearchResults from "../components/searchMenu/SearchResults";

const Header = ({ theme, toggleTheme, user }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const menuItems = [
    { label: "홈", path: "/" },
    { label: "색상", path: "/color" },
    { label: "폰트", path: "/font-size" },
    { label: "테이블", path: "/table" },
    { label: "컴포넌트", path: "/button" },
    { label: "폼", path: "/form" },
    { label: "주차현황", path: "/parking-status" },
    { label: "입출차현황", path: "/parking-tracking" },
  ];

  const isRoot =
    location.pathname === "/" || location.pathname === "/HmDesignGuide";

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

  const handleSearchSubmit = () => {
    const matchedItem = menuItems.find(
      (item) => item.label.toLowerCase() === searchQuery.toLowerCase()
    );
    if (matchedItem) {
      navigate(matchedItem.path);
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const handleCloseSearchResults = () => {
    setSearchResults([]);
  };

  return (
    <header className="header">
      {isRoot ? (
        <ToggleSwitch
          checked={theme === "dark"}
          onChange={toggleTheme}
          isModeToggle={true}
        />
      ) : (
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
      )}

      <div className="logo-container">LOGO</div>

      <div className="profile-container">
        <div className="profile">
          {user?.profileImage ? (
            <img src={user.profileImage} alt="Profile" />
          ) : (
            <span>{user?.name?.charAt(0) || "U"}</span>
          )}
        </div>
        <button className="icon-menu logout">
          <Logout />
          <span className="tooltip">로그아웃</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
