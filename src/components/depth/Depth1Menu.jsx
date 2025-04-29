import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/HomeIcon";
import MenuIcon from "../../assets/icons/MenuICon";
import DashBoardIcon from "../../assets/icons/DashBoardIcon";

const Depth1Menu = ({ onMenuClick }) => (
  <ul className="depth1">
    <li>
      <span className="menu icon-menu">
        <Link to="/">
          <HomeIcon />
        </Link>
        <span className="tooltip">홈</span>
      </span>
    </li>
    <li>
      <span className="menu icon-menu">
        <Link to="/dash">
          <DashBoardIcon />
        </Link>
        <span className="tooltip">대시보드</span>
      </span>
    </li>
    <li>
      <span className="menu icon-menu" onClick={() => onMenuClick("메뉴")}>
        <MenuIcon />
        <span className="tooltip">메뉴</span> {/* 툴팁 추가 */}
      </span>
    </li>
  </ul>
);

export default Depth1Menu;
