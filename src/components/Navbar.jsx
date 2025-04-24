import { useState } from "react";
import Depth1Menu from "./depth/Depth1Menu";
import Depth2Menu from "./depth/Depth2Menu";

const Navbar = () => {
  const [showDepth2, setShowDepth2] = useState(false);
  const [depth2Tit, setDepth2Tit] = useState(""); // 타이틀 상태 추가

  const handleMenuClick = (title) => {
    setDepth2Tit(title);
    setShowDepth2(true);
  };

  return (
    <aside className={`${showDepth2 ? "expand" : ""}`}>
      <nav>
        <Depth1Menu onMenuClick={handleMenuClick} />
        <Depth2Menu
          isVisible={showDepth2}
          onClose={() => setShowDepth2(false)}
          depth2Tit={depth2Tit} // 타이틀 전달
        />
      </nav>
    </aside>
  );
};

export default Navbar;
