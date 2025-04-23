import { useState } from "react";
import Depth3Menu from "./Depth3Menu";

const Depth2MenuItem = ({ icon, title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <div
        className={`menu ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div>
          {icon}
          <span>{title}</span>
        </div>
        <svg
          className="arrow"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.8925 10.5878L8.17833 15.302L7 14.1236L11.125 9.99865L7 5.87365L8.17833 4.69531L12.8925 9.40948C13.0487 9.56575 13.1365 9.77768 13.1365 9.99865C13.1365 10.2196 13.0487 10.4315 12.8925 10.5878Z"
            fill="#333333"
          />
        </svg>
      </div>
      {isOpen && <Depth3Menu items={items} />}
    </li>
  );
};

export default Depth2MenuItem;
