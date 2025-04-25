import SearchList from "./SearchList";

const RecentSearches = ({ recentSearches, menuItems, navigate }) => {
  const handleItemClick = (item) => {
    const matchedItem = menuItems.find(
      (menuItem) => menuItem.label === item.label
    );
    if (matchedItem) navigate(matchedItem.path);
  };

  return (
    <div className="recent-searches result-wrap">
      <p className="result-title">최근 검색 기록</p>
      <SearchList
        items={recentSearches}
        onItemClick={handleItemClick}
        emptyMessage="최근 검색이 없습니다."
      />
    </div>
  );
};

export default RecentSearches;
