import "./Reminder.css";
import { IoIosArrowDown } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import ModalReminder from "../../modal/modalReminder/ModalReminder";
import { useState } from "react";
import { CiBellOff } from "react-icons/ci";

function Reminder({ onSelect, setReminder}) {
  const [isOpenReminder, setIsOpenReminder] = useState(false);

  const openCalenderHandler = () => {
    setIsOpenReminder(true);
  };

  return (
    <>
      <p className="title">Riminder(Optional) </p>
      <div className="wrapper " style={{ height: "50%" }}>
        <button
          className="customSelector "
          type="button"
          onClick={openCalenderHandler}
        >
          <div className="leftSide">
            <span className="icons" style={{ paddingLeft: "10px" }}>
              {setReminder? <CiBellOn size={30}/>:<CiBellOff size={30}/>}
            </span>
          </div>
          <div className="date">{setReminder ? (setReminder.title) : (<span style={{color:'#a8b3bf'}}>No Reminder</span>)}</div>

          <span className="iconRight">
            <IoIosArrowDown size={"20"} />
          </span>
        </button>
      </div>
      {isOpenReminder && (
        <ModalReminder
          onSelect={onSelect}
          setReminder={setReminder}
         
          onClose={() => setIsOpenReminder(false)}
          isOpen={isOpenReminder}
        />
      )}
    </>
  );
}

export default Reminder;
