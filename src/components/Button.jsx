function Button({ type, name, children, onClick, disabled }) {
  return (
    <button
      type="button"
      className={`basic-btn ${type ? `${type}-btn` : ""} ${
        children ? "icon-btn" : ""
      }`}
      onClick={onClick ? onClick : undefined}
      disabled={disabled ? disabled : undefined}
    >
      {children ? children : name}
    </button>
  );
}

export default Button;
