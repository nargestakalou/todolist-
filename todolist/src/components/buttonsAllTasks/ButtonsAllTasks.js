

import './ButtonsAllTasks.css'
import { RiTaskLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import ButtonAllTasks from '../buttonAllTasks/ButtonAllTasks';
import { CiCalendar } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";

import { SlStar } from "react-icons/sl";



function ButtonsAllTasks(props){

    return(
        <>
        <div className="ContainerButtons">
            <div className="Buttons">
               <ButtonAllTasks title='All Tasks' onClick={props.onClickAllTasks}  icon={<RiTaskLine  size={25} />}isActive={props.isActive}   />
               <ButtonAllTasks title='Today' onClick={props.onClickToday} icon={<CiCalendar  size={25} />} isActive={props.isActive}  />
               <ButtonAllTasks title='Upcoming' onClick={props.onClickUpcoming}  icon={<MdOutlineWatchLater  size={25} />} isActive={props.isActive}   />
               <ButtonAllTasks title='Completed' onClick={props.onClickCompleted}  icon={<FaRegCheckCircle  size={25} />}  isActive={props.isActive}  />
               <ButtonAllTasks title='Important' onClick={props.onClickImportant}  icon={<SlStar  size={25} />} isActive={props.isActive}  />
            </div>
        </div>
        </>
    )
}


export default ButtonsAllTasks