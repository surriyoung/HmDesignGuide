import { useState } from "react";
import Depth1Menu from "./depth/Depth1Menu";
import Depth2Menu from "./depth/Depth2Menu";

const Navbar = () => {
  const [showDepth2, setShowDepth2] = useState(false);

  return (
    <aside className={`${showDepth2 ? "expand" : ""}`}>
      <nav>
        <Depth1Menu onMenuClick={() => setShowDepth2((prev) => !prev)} />
        <Depth2Menu isVisible={showDepth2} />
      </nav>
    </aside>
  );
};

export default Navbar;
