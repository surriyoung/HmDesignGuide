function SelectBox({ options = [] }) {
  return (
    <select className="input-style select-style">
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default SelectBox;
