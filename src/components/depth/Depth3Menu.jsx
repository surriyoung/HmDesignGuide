import { useLocation, Link } from "react-router-dom";

const Depth3Menu = ({ items }) => {
  const location = useLocation(); // 현재 경로 정보 가져오기

  return (
    <ul className="depth3 show">
      {items.map(({ to, label }) => {
        // 현재 경로와 메뉴 항목의 경로가 일치하면 open 클래스를 추가
        const isActive = location.pathname === to;
        return (
          <li key={to}>
            <span className={`menu ${isActive ? "open" : ""}`}>
              <Link to={to}>{label}</Link>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Depth3Menu;
