function SelectBox({ options = [] }) {
  return (
    <select>
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default SelectBox;
