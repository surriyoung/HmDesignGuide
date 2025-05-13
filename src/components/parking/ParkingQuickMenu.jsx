import { useState } from "react";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import QuickIcon1 from "../../assets/parking/QuickIcon1";
import QuickIcon2 from "../../assets/parking/QuickIcon2";
import QuickIcon3 from "../../assets/parking/QuickIcon3";
import QuickIcon4 from "../../assets/parking/QuickIcon4";
import QuickIcon5 from "../../assets/parking/QuickIcon5";
import QuickIcon6 from "../../assets/parking/QuickIcon6";
import QuickIcon7 from "../../assets/parking/QuickIcon7";
import QuickIcon8 from "../../assets/parking/QuickIcon8";

function ParkingQuickMenu({ addedMenus = [] }) {
  const [menuShow, setMenuShow] = useState(true);

  return (
    <div className="parking-quick-menu-wrap">
      <button
        className={`close-btn ${menuShow ? "" : "off"}`}
        onClick={() => setMenuShow(!menuShow)}
      >
        <span>{menuShow ? "접기" : "펼치기"}</span>
        <ArrowIcon />
      </button>
      <ul className={`parking-quick-menu ${menuShow ? "" : "off"}`}>
        {/* 기존 고정 메뉴들 */}
        <li>
          <QuickIcon1 />
          <span>미출차내역</span>
        </li>
        <li>
          <QuickIcon2 />
          <span>미인식내역</span>
        </li>
        <li>
          <QuickIcon3 />
          <span>정산내역</span>
        </li>
        <li>
          <QuickIcon4 />
          <span>미납내역</span>
        </li>
        <li>
          <QuickIcon5 />
          <span>정기권</span>
        </li>
        <li>
          <QuickIcon6 />
          <span>수동입차</span>
        </li>
        <li>
          <QuickIcon7 />
          <span>민원등록</span>
        </li>
        <li>
          <QuickIcon8 />
          <span>장애관리</span>
        </li>

        {/* 추가된 메뉴들 */}
        {addedMenus.map((menu, index) => (
          <li key={index}>
            {menu.imageBase64 && (
              <img
                src={menu.imageBase64}
                alt="추가된 아이콘"
                style={{ width: 40, height: 40 }}
              />
            )}
            <span>{menu.menuName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParkingQuickMenu;
