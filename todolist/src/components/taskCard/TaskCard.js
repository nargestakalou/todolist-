import "./TaskCard.css";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { useEffect, useState } from "react";

function TaskCard(props) {
  const today = new Date();
  const taskDate = new Date(props.startDate);
  const todayOnly = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  const taskDateOnly = new Date(
    taskDate.getFullYear(),
    taskDate.getMonth(),
    taskDate.getDate(),
  );
  const tomorrowOnly = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1,
  );

  const [showDate, setShowDate] = useState("");
  useEffect(() => {
    if (todayOnly.getTime() === taskDateOnly.getTime()) {
      setShowDate("Today");
    } else if (taskDateOnly.getTime() === tomorrowOnly.getTime()) {
      setShowDate("Tomorrow");
    } else {
      setShowDate(
        taskDateOnly.toLocaleDateString("en-Us", {
          year: "numeric",

          month: "numeric",
          day: "numeric",
        }),
      );
    }
  }, [props.startDate]);

  return (
    <div
      className={`containerTaskCard mx-3 border${props.selectedCategory.id}`}
    >
      <div className="contentTaskCard">
        <div className="contentIconTask">
          <FaRegCircle size={30} />
        </div>
        <div className="contentRightTask">
          <h5>{props.titleTask}</h5>
          <div className="contentDateTask">
            <div className="contentLeftDateTask">
              <CiCalendar size={25} />

              <span className="dateTask">{showDate}</span>
              <span style={{ paddingLeft: "35px" }}>
                <MdOutlineWatchLater size={25} />
              </span>
              <span className="dateTask">
                {new Date(props.startTime).toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <div className="contentRightDateTask">
              <span
                className={`categoryTask color${props.selectedCategory.id}`}
              >
                {props.selectedCategory.title}
              </span>
              <span className="styleIconThreeDots" style={{ color: "#a8b3bf" }}>
                <BsThreeDots size={30} />
              </span>
            </div>
          </div>
          <div className="contentReminder">
            <span>
              {" "}
              <CiBellOn size={25} />
            </span>

            <span className="dateTask">{props.reminder.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
