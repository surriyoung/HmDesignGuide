function TabBtn({ name, select, onClick }) {
  return (
    <button className={`tab-btn ${select ? "select" : ""}`} onClick={onClick}>
      {name}
    </button>
  );
}

export default TabBtn;
