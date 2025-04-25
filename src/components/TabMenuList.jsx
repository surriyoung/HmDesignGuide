import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const routeMap = {
  "/": "홈",
  "/color": "색상",
  "/font-size": "폰트",
  "/table": "테이블",
  "/button": "컴포넌트",
  "/form": "폼",
};

function TabMenuList() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tabs, setTabs] = useState(() => {
    const saved = localStorage.getItem("openTabs");
    return saved ? JSON.parse(saved) : [{ path: "/", label: "홈" }];
  });

  // 라우트 변경 시 탭 추가
  useEffect(() => {
    const currentPath = location.pathname;
    const label = routeMap[currentPath];
    if (!label) return;

    setTabs((prev) => {
      const exists = prev.some((tab) => tab.path === currentPath);
      if (exists) return prev;
      const updated = [...prev, { path: currentPath, label }];
      localStorage.setItem("openTabs", JSON.stringify(updated));
      return updated;
    });
  }, [location]);

  const handleCloseTab = (e, path) => {
    e.stopPropagation();
    e.preventDefault();
    const filtered = tabs.filter((tab) => tab.path !== path);
    setTabs(filtered);
    localStorage.setItem("openTabs", JSON.stringify(filtered));

    if (location.pathname === path) {
      // 현재 닫은 탭이 현재 활성화된 탭이라면, 가장 마지막 탭으로 이동
      const lastTab = filtered[filtered.length - 1] || {
        path: "/",
      };
      navigate(lastTab.path);
    }
  };

  return (
    <ul className="tab-menu">
      {tabs.map(({ path, label }) => (
        <li key={path} className={location.pathname === path ? "open" : ""}>
          <Link to={path}>
            {label}
            {path !== "/" && (
              <button
                onClick={(e) => handleCloseTab(e, path)}
                className="close-btn"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.33317 16.3307L4.1665 15.1641L8.83317 10.4974L4.1665 5.83073L5.33317 4.66406L9.99984 9.33073L14.6665 4.66406L15.8332 5.83073L11.1665 10.4974L15.8332 15.1641L14.6665 16.3307L9.99984 11.6641L5.33317 16.3307Z"
                    fill="#999899"
                  />
                </svg>
              </button>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TabMenuList;
