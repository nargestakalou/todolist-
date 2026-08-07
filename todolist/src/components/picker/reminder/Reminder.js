import "./Reminder.css";
import { IoMdTime } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";

function Reminder() {
  return (
    <>
      <p className="title">Reminder(optional) </p>
      <button className="customSelector" type="button">
        <div className="leftSide">
          <span className="icons">
            <CiBellOn size={25} />
          </span>

          <span>No reminder </span>
        </div>
        <div className="rightSide">
          <IoIosArrowDown size={"20px"} />
        </div>
      </button>
    </>
  );
}

export default Reminder;
