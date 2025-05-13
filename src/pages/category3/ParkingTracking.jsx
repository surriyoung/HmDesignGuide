import { useState, useEffect } from "react";
import TabBtn from "../../components/TabBtn";
import ParkingTrackingTile from "../../components/parking/ParkingTrackingTile";
import CarImg from "../../assets/car.png";
import ParkingAlarm from "../../components/parking/ParkingAlarm";
import ParkingQuickMenuAddModal from "../../components/parking/ParkingQuickMenuAddModal";
import ParkingQuickMenu from "../../components/parking/ParkingQuickMenu";

function ParkingTracking() {
  const [selectedTab, setSelectedTab] = useState("전체");
  const [showAlarm, setShowAlarm] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [quickMenus, setQuickMenus] = useState([]);

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
    }, 5000);
  };

  const handleAddMenu = async ({ menuName, image }) => {
    const imageBase64 = image ? await toBase64(image) : null;
    const newMenu = { menuName, imageBase64 };
    const updatedMenus = [...quickMenus, newMenu];
    setQuickMenus(updatedMenus);
    localStorage.setItem("quickMenus", JSON.stringify(updatedMenus));
  };

  return (
    <div className="main-wrap">
      <div className="main-content parking-content">
        <div className="btn-list tab-btn-list">
          {["전체", "갓바위5", "경상감영", "공항1"].map((tab) => (
            <TabBtn
              key={tab}
              name={tab}
              select={selectedTab === tab}
              onClick={() => handleTabClick(tab)}
            />
          ))}
        </div>

        <div className="palette">
          {/* 예시 차량 타일 */}
          <ParkingTrackingTile
            name="4주차장"
            type="입차LPR2"
            time="2025-04-30 15:25:49"
          />
          <ParkingTrackingTile
            name="4주차장"
            type="입차LPR2"
            time="2025-04-30 15:25:49"
            imgSrc={CarImg}
            carNum="248마 3236"
            carType="normal"
          />
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

export default ParkingTracking;
