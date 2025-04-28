import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import CloseIcon from "../assets/icons/CloseIcon";
import StarIcon from "../assets/icons/StarIcon";

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
  const [favoriteTabs, setFavoriteTabs] = useState(() => {
    const savedFavorites = localStorage.getItem("favoriteTabs");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
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
      const lastTab = filtered[filtered.length - 1] || { path: "/" };
      navigate(lastTab.path);
    }
  };

  const handleToggleFavorite = (e, path) => {
    e.stopPropagation();
    e.preventDefault();
    setFavoriteTabs((prev) => {
      let updated;
      if (prev.includes(path)) {
        updated = prev.filter((favPath) => favPath !== path);
      } else {
        updated = [...prev, path];
      }
      localStorage.setItem("favoriteTabs", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <ul className="tab-menu">
      {tabs.map(({ path, label }) => (
        <li key={path} className={location.pathname === path ? "open" : ""}>
          <Link to={path}>
            <div>
              {path !== "/" && (
                <button
                  onClick={(e) => handleToggleFavorite(e, path)}
                  className={`favorite-btn ${
                    favoriteTabs.includes(path) ? "favorite" : ""
                  }`}
                >
                  <StarIcon />
                </button>
              )}
              {label}
            </div>
            {/* 닫기 버튼 */}
            {path !== "/" && (
              <button
                onClick={(e) => handleCloseTab(e, path)}
                className="close-btn"
              >
                <CloseIcon />
              </button>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TabMenuList;
