

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
               <ButtonAllTasks title='َAll Tasks' onClick={props.onClickAllTasks}  icon={<RiTaskLine  size={25} />}isActive={props.isActiveButton}   />
               <ButtonAllTasks title='َToday' onClick={props.onClickToday} icon={<CiCalendar  size={25} />} isActive={props.isActiveButton}  />
               <ButtonAllTasks title='Upcoming'  icon={<MdOutlineWatchLater  size={25} />}  />
               <ButtonAllTasks title='Completed'  icon={<FaRegCheckCircle  size={25} />}  />
               <ButtonAllTasks title='Important'  icon={<SlStar  size={25} />}  />
            </div>
        </div>
        </>
    )
}


export default ButtonsAllTasks