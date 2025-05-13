import CloseIcon from "../../assets/icons/CloseIcon";
import InfoIcon from "../../assets/icons/InfoIcon";

function ParkingAlarm({ onClick }) {
  return (
    <div className="parking-alarm">
      <button className="close-btn" onClick={onClick}>
        <CloseIcon />
      </button>
      <div className="alarm-content-wrap">
        <InfoIcon />
        <div className="alarm-content">
          <p>
            <strong>서변2</strong> 감면요청
          </p>
          <span>출구정산기[아이조아]</span>
        </div>
      </div>
      <div className="alarm-bar"></div>
    </div>
  );
}
export default ParkingAlarm;
