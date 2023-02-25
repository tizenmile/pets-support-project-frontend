import { el } from "date-fns/locale";
import {
  TimeList,
  SpanDay,
  SpanTime,
  TimeItem,
  SpanTimeWrap,
} from "./TimetableStyle";
const Timetable = ({ workDays }) => {
  const date = new Date();
  const myDay = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"];
  const weekday = ["SU", "MN", "TU", "WE", "TH", "FR", "SA"];
  return (
    <div>
      {workDays && (
        <TimeList>
          <TimeItem>
            {myDay.map((el) => (
              <SpanDay
                key={el}
                style={{
                  color: weekday[date.getDay()] === el && "#f59256",
                }}
              >
                {el}
              </SpanDay>
            ))}

            <SpanTimeWrap>
              {workDays &&
                workDays.map((el, index) => (
                  <SpanTime
                    key={el._id}
                    style={{
                      color: date.getDay() === index && "#f59256",
                    }}
                  >
                    {console.log(
                      0 === (index + 1 || index + 1 === 7 || (index = 0)) &&
                        "#f59256"
                    )}
                    {el && el.isOpen ? el.from : ""}
                    {el && el.isOpen && "-"}
                    {el && el.isOpen ? el.to : "Closed"}
                  </SpanTime>
                ))}
            </SpanTimeWrap>
          </TimeItem>
        </TimeList>
      )}
    </div>
  );
};
export default Timetable;
