import { Link } from "react-router-dom";

const Depth1Menu = ({ onMenuClick }) => (
  <ul className="depth1">
    <li>
      <span className="menu icon-menu">
        <Link to="/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5973 3.11725C11.843 2.96092 12.157 2.96092 12.4027 3.11725L20.6527 8.36725C20.869 8.50492 21 8.74357 21 9V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V9C3 8.74357 3.13101 8.50492 3.34734 8.36725L11.5973 3.11725ZM4.5 9.41171V19.5H19.5V9.41171L12 4.63898L4.5 9.41171ZM16.5 15V16.5H7.5V15H16.5Z"
              fill="#333333"
            />
          </svg>
        </Link>
        <span className="tooltip">홈</span> {/* 툴팁 추가 */}
      </span>
    </li>
    <li>
      <span className="menu icon-menu" onClick={() => onMenuClick("메뉴")}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
            fill="#333333"
          />
        </svg>
        <span className="tooltip">메뉴</span> {/* 툴팁 추가 */}
      </span>
    </li>
  </ul>
);

export default Depth1Menu;
