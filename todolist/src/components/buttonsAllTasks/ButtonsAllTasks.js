

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
               <ButtonAllTasks title='All Tasks' onClick={props.onClick}  icon={<RiTaskLine  size={25} />}isActive={props.isActive}   />
               <ButtonAllTasks title='Today' onClick={props.onClick} icon={<CiCalendar  size={25} />} isActive={props.isActive}  />
               <ButtonAllTasks title='Upcoming' onClick={props.onClick}  icon={<MdOutlineWatchLater  size={25} />} isActive={props.isActive}   />
               <ButtonAllTasks title='Completed' onClick={props.onClick}  icon={<FaRegCheckCircle  size={25} />}  isActive={props.isActive}  />
               <ButtonAllTasks title='Favorite' onClick={props.onClick}  icon={<SlStar  size={25} />} isActive={props.isActive}  />
            </div>
        </div>
        </>
    )
}


export default ButtonsAllTasks