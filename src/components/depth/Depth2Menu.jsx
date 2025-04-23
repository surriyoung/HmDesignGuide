import SettingIcon from "../../assets/icons/SettingIcon";
import GridIcon from "../../assets/icons/GridIcon";
import Depth2MenuItem from "./Depth2MenuItem";

const Depth2Menu = ({ isVisible }) => {
  return (
    <ul className={`depth2 ${isVisible ? "show" : ""}`}>
      <Depth2MenuItem
        icon={<SettingIcon />}
        title="기본설정"
        items={[
          { to: "/color", label: "색상" },
          { to: "/font-size", label: "폰트크기" },
        ]}
      />
      <Depth2MenuItem
        icon={<GridIcon />}
        title="레이아웃"
        items={[
          { to: "/grid", label: "그리드" },
          { to: "/table", label: "테이블" },
          { to: "/button", label: "버튼" },
          { to: "/form", label: "폼" },
          { to: "/layout", label: "기본 레이아웃" },
        ]}
      />
    </ul>
  );
};

export default Depth2Menu;
