import "./CustomSelectedDate.css";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function CustomSelectedDate({ date, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const openCalenderHandler = () => {
    setIsOpen(true);
  };
  const handler = (dateSelected) => {
    onSelect(dateSelected);
    setIsOpen(false);
  };

  return (
    <>
      <p className="title">Date</p>
      <div className="wrapper">
        <button
          className="customSelector"
          type="button"
          onClick={openCalenderHandler}
        >
          <div className="leftSide">
            <span className="icons" style={{ paddingLeft: "10px" }}>
              <CiCalendarDate size={25} />
            </span>
          </div>
          <div className="date">{date.toLocaleDateString("en-GB")}</div>

          <span className="iconRight">
            <IoIosArrowDown size={"20"} />
          </span>
        </button>
        <DatePicker
          selected={date}
          dateFormat={"dd/MM/yyyy"}
          onChange={handler}
          className="customCalender"
          open={isOpen}
        />
      </div>
    </>
  );
}

export default CustomSelectedDate;
