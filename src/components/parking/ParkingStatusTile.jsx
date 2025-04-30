import ToggleSwitch from "../ToggleSwitch";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { useState } from "react";

function ParkingStatusTile({ name, currentCount, totalCount, type }) {
  const [toggle, setToggle] = useState(true);
  const progress = totalCount > 0 ? (currentCount / totalCount) * 100 : 0;

  let status = "";
  if (progress < 70) {
    status = "status1";
  } else if (progress < 80) {
    status = "status2";
  } else {
    status = "status3";
  }

  // type에 따라 클래스 추가
  let typeClass = "";
  if (type === "노상") typeClass = "street";
  else if (type === "노상형LPR") typeClass = "lpr";
  else if (type === "노외") typeClass = "offstreet";

  return (
    <div className={`parking-status-tile ${status} ${typeClass}`}>
      <div className="status-tile-top">
        <span>{type}</span>
        <h4>{name}</h4>
        <div className="satus">
          <p>
            <strong>{currentCount}</strong>
            <span>/</span>
            {totalCount}
          </p>
          <div className="status-bar">
            <span style={{ width: `${progress}%` }}></span>
          </div>
        </div>
      </div>
      <div className="status-tile-bot">
        <ToggleSwitch
          label="만차 설정"
          checked={toggle}
          onChange={() => setToggle(!toggle)}
        />
        <button>
          바로가기
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}

export default ParkingStatusTile;
