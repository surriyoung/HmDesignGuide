import ArrowIcon2 from "../../assets/icons/ArrowIcon2";
import CollectIcon from "../../assets/icons/CollectIcon";
import DueIcon from "../../assets/icons/DueIcon";
import SettleIcon from "../../assets/icons/SettleIcon";

function AmountCard({ type }) {
  return (
    <div className={`main-tile amount-tile ${type}`}>
      <h4>
        {type == "settle" ? (
          <SettleIcon />
        ) : type == "due" ? (
          <DueIcon />
        ) : (
          <CollectIcon />
        )}
        {type == "settle"
          ? "정산금액"
          : type == "due"
          ? "미납금액"
          : "미납수납금액"}
      </h4>
      <p>
        <strong>1,546,450</strong>원
      </p>
      <div className="more-btn-bg">
        <div className="more-btn">
          <ArrowIcon2 />
        </div>
      </div>
    </div>
  );
}
export default AmountCard;
