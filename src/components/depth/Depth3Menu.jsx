import { Link } from "react-router-dom";

const Depth3Menu = ({ items }) => (
  <ul className="depth3 show">
    {items.map(({ to, label }) => (
      <li key={to}>
        <span className="menu">
          <Link to={to}>{label}</Link>
        </span>
      </li>
    ))}
  </ul>
);

export default Depth3Menu;
