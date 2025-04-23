import React, { useState } from "react";

const ButtonGuide = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isModeToggled, setIsModeToggled] = useState(true);

  const handleToggleChange = () => {
    setIsToggled((prev) => !prev);
  };

  const handleModeToggleChange = () => {
    setIsModeToggled((prev) => !prev);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>버튼 가이드</h1>

      <button
        style={{
          marginRight: "1rem",
          padding: "0.5rem 1rem",
          background: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        기본 버튼
      </button>

      <button
        style={{
          padding: "0.5rem 1rem",
          background: "#28A745",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        성공 버튼
      </button>

      <h2>토글버튼-기본</h2>
      <div className="toggle-wrap">
        <span className="label">타이틀</span>
        <div className="toggle-switch">
          <label className="switch">
            <input
              type="checkbox"
              checked={isToggled}
              onChange={handleToggleChange}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <h2>토글버튼-모드</h2>
      <div className="toggle-switch mode-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={isModeToggled}
            onChange={handleModeToggleChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default ButtonGuide;
