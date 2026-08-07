import "./StartTimePicker.css";
import { IoMdTime } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function StartTimePicker() {
  return (
    <>
      <p className="title">Start Time</p>
      <button className="customSelector" type="button">
        <div className="leftSide">
          <span className="icons">
            <IoMdTime size={25} />
          </span>

          <span>Select time </span>
        </div>
        <div className="rightSide">
          <IoIosArrowDown size={"20px"} />
        </div>
      </button>
    </>
  );
}

export default StartTimePicker;
