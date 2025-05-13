import CarIcon from "../../assets/icons/CarIcon";
import NoImage from "../../assets/parking/NoImgae";
import Button from "../Button";
import BarrierIcon1 from "../../assets/parking/BarrierIcon1";
import BarrierIcon2 from "../../assets/parking/BarrierIcon2";
import BarrierIcon3 from "../../assets/parking/BarrierIcon3";
import BarrierIcon4 from "../../assets/parking/BarrierIcon4";

/**
 *
 * @param {string} param0.name - 주차장 이름
 * @param {string} param0.type - LPR 종류
 * @param {string} param0.time - 입출차 시간
 * @returns {JSX.Element} ParkingTrackingTile 컴포넌트
 */
function ParkingTrackingTile({ name, type, time, carNum, carType, imgSrc }) {
  return (
    <div className="parking-tracking-tile">
      <div className="parking-tracking-top">
        <h4>
          <CarIcon />
          {name}-{type}
        </h4>
        <p className="park-time">{time}</p>
      </div>
      <div className="parking-tracking-img">
        {imgSrc ? <img src={imgSrc} alt="차량 이미지" /> : <NoImage />}
        {carNum && carType && (
          <div className="car-info">
            <span>{carNum}</span>
            <div className={carType}>
              {carType == "normal" ? "일반차량" : "특수차량"}
            </div>
          </div>
        )}
      </div>
      <div className="parking-tracking-bot">
        <div className="parking-tracking-tab">
          <span className="on">입차차단기</span>
          <span>만차차단기</span>
        </div>
        <div className="parking-tracking-btn-wrap">
          <Button name="열림">
            <BarrierIcon1 />
          </Button>
          <Button name="닫힘">
            <BarrierIcon2 />
          </Button>
          <Button name="열림고정">
            <BarrierIcon3 />
          </Button>
          <Button name="고정해제">
            <BarrierIcon4 />
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ParkingTrackingTile;
