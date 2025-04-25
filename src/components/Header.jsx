import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const Header = ({ theme, toggleTheme, user }) => {
  return (
    <header className="header">
      <ToggleSwitch
        checked={theme === "dark"}
        onChange={toggleTheme}
        isModeToggle={true} // 모드 토글이므로 true 전달
      />
      <div className="logo-container">LOGO</div>
      <div className="profile-container">
        <div className="profile">
          {user?.profileImage ? (
            <img src={user.profileImage} alt="Profile" />
          ) : (
            <span>{user?.name?.charAt(0) || "U"}</span>
          )}
        </div>
        <button className="icon-menu logout">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20V0H10V2.22222H2.22222V17.7778H10V20H0ZM14.4444 15.5556L12.9167 13.9444L15.75 11.1111H6.66667V8.88889H15.75L12.9167 6.05556L14.4444 4.44444L20 10L14.4444 15.5556Z"
              fill="#787878"
            />
          </svg>
          <span className="tooltip">로그아웃</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
