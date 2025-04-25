const SearchList = ({ items, onItemClick, emptyMessage }) => {
  return (
    <ul>
      {items.length > 0 ? (
        items.map((item, index) => (
          <li key={index} onClick={() => onItemClick(item)}>
            {item.label}
          </li>
        ))
      ) : (
        <p>{emptyMessage}</p>
      )}
    </ul>
  );
};

export default SearchList;
