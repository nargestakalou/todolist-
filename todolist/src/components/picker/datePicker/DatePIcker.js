import './DatePicker.css'
import { CiCalendarDate } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";



function DatePicker(){
      return (
    <>
      <p className="title">Date</p>
      <button className="customSelector" type="button" >
        <div className="leftSide">
          <span className="icons">
        <CiCalendarDate size={25}/>
          </span>


        
            <span>Select date </span>
        
        </div>
        <div className="rightSide">
          <IoIosArrowDown size={"20px"} />
        </div>
      </button>
      
    </>
  );
}

export default DatePicker