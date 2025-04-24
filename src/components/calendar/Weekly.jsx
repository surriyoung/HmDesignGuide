import moment from "moment";
import "moment/locale/ko";

moment.locale("ko");

const Weekly = () => {
  const today = moment();
  const startOfWeek = moment().startOf("week");
  const days = Array.from({ length: 7 }, (_, i) =>
    startOfWeek.clone().add(i, "days")
  );

  const weekDaysFull = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const weekDaysShort = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="weekly">
      <div className="today-wrap">
        <strong>오늘, {weekDaysFull[today.day()]}</strong>{" "}
        {today.format("YYYY.MM.DD")}
      </div>

      <div className="weekly-wrap">
        {days.map((day) => {
          const isToday = day.isSame(today, "day");
          const isWeekend = day.day() === 0 || day.day() === 6;

          return (
            <div
              key={day.format("YYYY-MM-DD")}
              className={isToday ? "today" : ""}
            >
              <p className={isWeekend ? "weekend" : ""}>
                {weekDaysShort[day.day()]}
              </p>
              <p className="date">{day.format("DD")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weekly;
