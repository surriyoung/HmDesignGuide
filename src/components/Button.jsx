function Button({ type, name, children, onClick }) {
  return (
    <button
      className={`basic-btn ${type ? type : ""} ${children ? "icon-btn" : ""}`}
      onClick={onClick ? onClick : undefined}
    >
      {children ? children : name}
    </button>
  );
}

export default Button;
