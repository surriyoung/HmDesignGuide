import ArrowIcon2 from "../assets/icons/ArrowIcon2";
import InfoIcon from "../assets/icons/InfoIcon";

function DashBoardTile({ title, tasks }) {
  const hasTasks = tasks && tasks.length > 0;

  return (
    <div className="dash-board-tile">
      <div className="dash-board-top">
        <h4>{title}</h4>
        <button>
          <ArrowIcon2 />
        </button>
      </div>
      <div className="dash-board-bot">
        {hasTasks ? (
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        ) : (
          <div className="no-tasks">
            <InfoIcon />
            <p>처리할 내용이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default DashBoardTile;
