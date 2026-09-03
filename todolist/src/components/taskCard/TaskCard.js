import "./TaskCard.css";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import PopupMenu from "../popupMenu/PopupMenu";

function TaskCard(props) {

  const [showDate, setShowDate] = useState("");
const [isOpenPopup,setIsOpenPopup]=useState(false)
const popupRef=useRef(null)


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

const popupHandler=()=>{
setIsOpenPopup(true)

}
 useEffect(()=>{
const handleClickOutside=(event)=>{
  if(popupRef.current&& !popupRef.current.contains(event.target)){
    setIsOpenPopup(false)
  }
}
document.addEventListener('mousedown',handleClickOutside)
return ()=>{
  document.addEventListener('mousedown',handleClickOutside)
}

 },[])





  return (
    <div
      className={`containerTaskCard mx-3 border${props.selectedCategory.id}`}
      style={{position:'relative'}}
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
            <div className="contentRightDateTask" ref={popupRef}>
              <span
                className={`categoryTask color${props.selectedCategory.id}`}
              >
                {props.selectedCategory.title}
              </span>
              <span className="styleIconThreeDots" style={{ color: "#a8b3bf" }}  onClick={popupHandler}  >

                <BsThreeDots size={30} />

              </span>
                      {isOpenPopup&&<PopupMenu isCompletedhandler={props.isCompletedhandler} id={props.id} isFavoriteHandler={props.isFavoriteHandler} deletTaskHandler={props.deletTaskHandler} editTaskHandler={props.editTaskHandler}  editTaskHandler={props.editTaskHandler} />}

            </div>
          </div>
          <div className="contentReminder">
            <span>
              {" "}
              <CiBellOn size={25} />
            </span>

            <span className="dateTask">
              {props.reminder? props.reminder.title: 'No reminder'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
