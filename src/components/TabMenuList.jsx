import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import CloseIcon from "../assets/icons/CloseIcon";
import StarIcon from "../assets/icons/StarIcon";

const routeMap = {
  "/": "홈",
  "/dash": "대시보드",
  "/color": "색상",
  "/font-size": "폰트",
  "/table": "테이블",
  "/button": "컴포넌트",
  "/form": "폼",
  "/parking-status": "주차현황",
  "/parking-log": "입출차현황",
};

function TabMenuList() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tabs, setTabs] = useState(() => {
    const saved = localStorage.getItem("openTabs");
    return saved ? JSON.parse(saved) : [{ path: "/", label: "홈" }];
  });

  const [draggingIndex, setDraggingIndex] = useState(null);

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

  // 드래그 시작
  const handleDragStart = (index) => {
    if (tabs[index].path === "/") return; // 홈은 드래그 금지
    setDraggingIndex(index);
  };

  // 드래그 중
  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggingIndex === null || draggingIndex === index) return;
    if (tabs[index].path === "/") return; // 홈 위로 드래그 금지

    const updatedTabs = [...tabs];
    const draggedTab = updatedTabs[draggingIndex];

    updatedTabs.splice(draggingIndex, 1);
    updatedTabs.splice(index, 0, draggedTab);

    setDraggingIndex(index);
    setTabs(updatedTabs);
    localStorage.setItem("openTabs", JSON.stringify(updatedTabs));
  };

  // 드래그 종료
  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  return (
    <ul className="tab-menu">
      {tabs.map(({ path, label }, index) => (
        <li
          key={path}
          className={`${location.pathname === path ? "open" : ""} ${
            draggingIndex === index ? "dragging" : ""
          }`}
          draggable={path !== "/"}
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnd={handleDragEnd}
        >
          <Link to={path}>
            <div>
              {path !== "/" && (
                <button onClick={""} className={`favorite-btn`}>
                  <StarIcon />
                </button>
              )}
              {label}
            </div>
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
