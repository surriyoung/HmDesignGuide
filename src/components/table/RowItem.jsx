const RowItem = ({ label, value, showExample, type }) => {
  return (
    <div className="row">
      <div className="th">{label}</div>
      <div className="td">
        {showExample ? (
          <span
            style={
              type === "weight" ? { fontWeight: value } : { fontSize: value }
            }
          >
            {value}
          </span>
        ) : (
          value
        )}
      </div>
    </div>
  );
};

export default RowItem;
