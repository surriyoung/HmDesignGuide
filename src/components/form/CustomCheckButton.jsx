const CustomCheckButton = ({ label, checked, onChange }) => {
  return (
    <button
      type="button"
      className={`custom-check-button ${checked ? "checked" : ""}`}
      onClick={() => onChange(!checked)}
    >
      {checked ? (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5501 18.2437L3.8501 12.5438L5.2751 11.1188L9.5501 15.3937L18.7251 6.21875L20.1501 7.64375L9.5501 18.2437Z"
            fill="#8C4DF0"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 13.2422H5V11.2422H11V5.24219H13V11.2422H19V13.2422H13V19.2422H11V13.2422Z"
            fill="#787878"
          />
        </svg>
      )}
      <span>{label}</span>
    </button>
  );
};

export default CustomCheckButton;
