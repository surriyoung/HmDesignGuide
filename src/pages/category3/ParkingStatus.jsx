import { useEffect, useState } from "react";
import Button from "../../components/Button";
import ParkingStatusTile from "../../components/parking/ParkingStatusTile";
import TabBtn from "../../components/TabBtn";
import ParkingAlarm from "../../components/parking/ParkingAlarm";
import ParkingQuickMenuAddModal from "../../components/parking/ParkingQuickMenuAddModal";
import ParkingQuickMenu from "../../components/parking/ParkingQuickMenu";

function ParkingStatus() {
  const [selectedTab, setSelectedTab] = useState("전체");
  const [showAlarm, setShowAlarm] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [quickMenus, setQuickMenus] = useState([]); // 추가된 메뉴 상태

  // base64 변환 함수
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // 저장된 메뉴 불러오기
  useEffect(() => {
    const savedMenus = JSON.parse(localStorage.getItem("quickMenus")) || [];
    setQuickMenus(savedMenus);
  }, []);

  const handleTabClick = (name) => {
    setSelectedTab(name);
  };

  const handleAlarmButtonClick = () => {
    setShowAlarm(true);
    setTimeout(() => {
      setShowAlarm(false);
    }, 5000); // 10초 후 알람 숨김
  };

  const handleAddMenu = async ({ menuName, image }) => {
    const imageBase64 = image ? await toBase64(image) : null;
    const newMenu = { menuName, imageBase64 };
    const updatedMenus = [...quickMenus, newMenu];
    setQuickMenus(updatedMenus);
    localStorage.setItem("quickMenus", JSON.stringify(updatedMenus));
  };

  // 예시 데이터
  const parkingData = [
    {
      name: "갓바위5",
      currentCount: 36,
      totalCount: 119,
      type: "노외",
    },
    {
      name: "경상감영",
      currentCount: 50,
      totalCount: 56,
      type: "노외",
    },
    {
      name: "공항1",
      currentCount: 309,
      totalCount: 456,
      type: "노외",
    },
    {
      name: "공항2",
      currentCount: 190,
      totalCount: 190,
      type: "노외",
    },
    {
      name: "국채보상운동기념공원",
      currentCount: 309,
      totalCount: 456,
      type: "노상",
    },
    {
      name: "달서대로",
      currentCount: 0,
      totalCount: 100,
      type: "노상",
    },
    {
      name: "대현2동",
      currentCount: 37,
      totalCount: 44,
      type: "노외",
    },
    {
      name: "동대구역 고가교 하단",
      currentCount: 27,
      totalCount: 28,
      type: "노외",
    },
    {
      name: "서대구역 남편",
      currentCount: 102,
      totalCount: 129,
      type: "노상형LPR",
    },
    {
      name: "수성못1",
      currentCount: 45,
      totalCount: 70,
      type: "노외",
    },
    {
      name: "수성못2",
      currentCount: 22,
      totalCount: 40,
      type: "노외",
    },
    {
      name: "범어공원",
      currentCount: 18,
      totalCount: 50,
      type: "노외",
    },
    {
      name: "중앙로지하상가",
      currentCount: 98,
      totalCount: 150,
      type: "노외",
    },
    {
      name: "대구시청",
      currentCount: 5,
      totalCount: 30,
      type: "노외",
    },
    {
      name: "동성로1",
      currentCount: 14,
      totalCount: 25,
      type: "노상",
    },
    {
      name: "동성로2",
      currentCount: 0,
      totalCount: 20,
      type: "노상",
    },
    {
      name: "침산동공영",
      currentCount: 63,
      totalCount: 100,
      type: "노외",
    },
    {
      name: "이월드주차장",
      currentCount: 280,
      totalCount: 300,
      type: "노외",
    },
    {
      name: "두류공원 서문",
      currentCount: 120,
      totalCount: 150,
      type: "노외",
    },
    {
      name: "칠성시장",
      currentCount: 34,
      totalCount: 90,
      type: "노외",
    },
    {
      name: "성서산단입구",
      currentCount: 77,
      totalCount: 80,
      type: "노상",
    },
    {
      name: "대구문화예술회관",
      currentCount: 12,
      totalCount: 60,
      type: "노외",
    },
    {
      name: "대구역광장",
      currentCount: 44,
      totalCount: 50,
      type: "노상",
    },
    {
      name: "이현공단로",
      currentCount: 89,
      totalCount: 120,
      type: "노상형LPR",
    },
    {
      name: "테크노폴리스 중심상가",
      currentCount: 150,
      totalCount: 200,
      type: "노외",
    },
    {
      name: "비산네거리",
      currentCount: 27,
      totalCount: 40,
      type: "노상",
    },
    {
      name: "달서구청",
      currentCount: 15,
      totalCount: 50,
      type: "노외",
    },
    {
      name: "동구청",
      currentCount: 9,
      totalCount: 25,
      type: "노외",
    },
  ];

  // 필터링된 리스트
  const filteredData =
    selectedTab === "전체"
      ? parkingData
      : parkingData.filter((item) => item.type === selectedTab);

  return (
    <div className="main-wrap">
      <div className="main-content parking-content">
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
        <ParkingQuickMenu addedMenus={quickMenus} />

        <button className="alarm-btn" onClick={handleAlarmButtonClick}>
          알람
          <br />
          보기
        </button>
        {showAlarm && <ParkingAlarm onClick={() => setShowAlarm(false)} />}

        <button className="add-btn" onClick={() => setShowAddModal(true)}>
          메뉴
          <br />
          추가
        </button>

        {showAddModal && (
          <ParkingQuickMenuAddModal
            onClose={() => setShowAddModal(false)}
            onComplete={handleAddMenu}
          />
        )}
      </div>
    </div>
  );
}

export default ParkingStatus;
