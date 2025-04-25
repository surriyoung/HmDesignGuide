const ToggleSwitch = ({
  name,
  checked,
  onChange,
  label,
  isModeToggle = false,
}) => {
  return (
    <div className="toggle-wrap">
      {label && <span className="label">{label}</span>}
      <div className={`toggle-switch ${isModeToggle ? "mode-toggle" : ""}`}>
        <label className="switch">
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
