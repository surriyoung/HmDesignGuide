const ToggleSwitch = ({ checked, onChange, label, isModeToggle = false }) => {
  return (
    <div className="toggle-wrap">
      {label && <span className="label">{label}</span>}
      <div className={`toggle-switch ${isModeToggle ? "mode-toggle" : ""}`}>
        <label className="switch">
          <input type="checkbox" checked={checked} onChange={onChange} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
