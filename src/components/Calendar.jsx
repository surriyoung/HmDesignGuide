import Anniversary from "./calendar/Anniversary";
import Weekly from "./calendar/Weekly";

function Calendar() {
  return (
    <>
      <div className="main-tile">
        <Weekly />
        <Anniversary />
      </div>
    </>
  );
}
export default Calendar;
