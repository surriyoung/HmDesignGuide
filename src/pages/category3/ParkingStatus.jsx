import { useState } from "react";
import Button from "../../components/Button";
import ParkingStatusTile from "../../components/parking/ParkingStatusTile";
import TabBtn from "../../components/TabBtn";

function ParkingStatus() {
  const [selectedTab, setSelectedTab] = useState("전체");

  const handleTabClick = (name) => {
    setSelectedTab(name);
  };

  // 예시 데이터
  const parkingData = [
    {
      name: "달서대로",
      currentCount: 0,
      totalCount: 100,
      type: "노상",
    },
    {
      name: "서대구역 남편",
      currentCount: 102,
      totalCount: 129,
      type: "노상형LPR",
    },
    {
      name: "동대구역 고가교 하단",
      currentCount: 27,
      totalCount: 28,
      type: "노외",
    },
    {
      name: "경상감영",
      currentCount: 50,
      totalCount: 56,
      type: "노외",
    },
    {
      name: "국채보상운동기념공원",
      currentCount: 309,
      totalCount: 456,
      type: "노상",
    },
  ];

  // 필터링된 리스트
  const filteredData =
    selectedTab === "전체"
      ? parkingData
      : parkingData.filter((item) => item.type === selectedTab);

  return (
    <div className="main-wrap">
      <div className="main-content">
        <div className="btn-list tab-btn-list">
          {["전체", "노상", "노상형LPR", "노외"].map((tab) => (
            <TabBtn
              key={tab}
              name={tab}
              select={selectedTab === tab}
              onClick={() => handleTabClick(tab)}
            />
          ))}
        </div>
        <div className="palette">
          {filteredData.map((item) => (
            <ParkingStatusTile
              key={item.name}
              name={item.name}
              currentCount={item.currentCount}
              totalCount={item.totalCount}
              street={item.type === "노상"}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParkingStatus;
