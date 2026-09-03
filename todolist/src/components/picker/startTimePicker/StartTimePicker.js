import "./StartTimePicker.css";
import { IoMdTime } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

function StartTimePicker({ time, onSelect, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const openCalenderHandler = () => {
    setIsOpen(true);
  };
  const handler = (timeSelected) => {
    onSelect(timeSelected);
    setIsOpen(false);
  };

  return (
    <>
      <p className="title">{title}</p>
      <div className="wrapper">
        <button
          className="customSelector"
          type="button"
          onClick={openCalenderHandler}
        >
          <div className="leftSide">
            <span className="icons" style={{ paddingLeft: "10px" }}>
              <IoMdTime size={25} />
            </span>
          </div>
          <div className="date">
            {new Date(time).toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
            })}
          </div>

          <span className="iconRight">
            <IoIosArrowDown size={"20"} />
          </span>
        </button>
        <DatePicker
          selected={time}
          dateFormat={"h:mm aa"}
          onChange={handler}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          className="customCalender"
          open={isOpen}
        />
      </div>
    </>
  );
}

export default StartTimePicker;
