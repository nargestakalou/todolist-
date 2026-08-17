import { FaRegCircle } from 'react-icons/fa6';
import './ReminderItem.css'
import { IoIosCheckmarkCircle, IoMdTime } from "react-icons/io";
import reminderIcons from '../../content/ReminderIcon/reminderIcon';


function ReminderItem(props){

const allIcons=reminderIcons
const selectionIcon=allIcons.find(rIcon=>rIcon.name===props.icon)?.icon

    return(

<>
      <div className='buttonItem'>
         <button className='buttonCategory' onClick={props.onSelect} >
            <div className="left">
                <span className={`iconCategory color1`}>
                   {selectionIcon}
               
                </span>
                <span className='titleCategory'>{props.title}</span>
                <span className='titlespan'>{props.spanTitle}</span>

            </div>
            <div className="right">
                {/* {props.category===props.categorySelected?<IoIosCheckmarkCircle size={30} className='selectedIcon'/>:<FaRegCircle size={30}/>} */}
                {props.setReminder&&  props.id===props.setReminder.id?<IoIosCheckmarkCircle size={30} className='selectedIcon'/>:  <FaRegCircle size={25}/>
}
            </div>

        </button>
    
       </div>
       


</>

    )
}


export default ReminderItem