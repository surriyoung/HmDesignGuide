import SettingIcon from "../../assets/icons/SettingIcon";
import GridIcon from "../../assets/icons/GridIcon";
import Depth2MenuItem from "./Depth2MenuItem";

const Depth2Menu = ({ isVisible, onClose, depth2Tit }) => {
  return (
    <ul className={`depth2 ${isVisible ? "show" : ""}`}>
      <li className="depth2-title">
        <span>{depth2Tit}</span>
        <button className="icon-menu" onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9502 5.80078L12.9502 12.8008L17.9502 19.8008L15.5002 19.8008L10.5002 12.8008L15.5002 5.80078L17.9502 5.80078ZM12.0002 5.80078L7.00019 12.8008L12.0002 19.8008L9.55019 19.8008L4.55019 12.8008L9.5502 5.80078L12.0002 5.80078Z"
              fill="#333333"
            />
          </svg>
          <span className="tooltip">닫기</span>
        </button>
      </li>
      <ul className="depth2-list">
        <Depth2MenuItem
          icon={<SettingIcon />}
          title="기본설정"
          items={[
            { to: "/color", label: "색상" },
            { to: "/font-size", label: "폰트" },
          ]}
        />
        <Depth2MenuItem
          icon={<GridIcon />}
          title="레이아웃"
          items={[
            { to: "/table", label: "테이블" },
            { to: "/button", label: "컴포넌트" },
            { to: "/form", label: "폼" },
          ]}
        />
      </ul>
    </ul>
  );
};

export default Depth2Menu;
