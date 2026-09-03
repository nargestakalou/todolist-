import './SortAllTasks.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { PiSortAscending } from "react-icons/pi";


function SortAllTask(props){
    return(
        <div className="ContainerSortAllTasks">
             <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
<span><PiSortAscending size={25}/></span>  
<span>  sort by</span>  
<span style={{fontWeight:'bold'}}>{props.sortTitle}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={props.sortDateHandler} href="#/action-1">Due date</Dropdown.Item>
        <Dropdown.Item onClick={props.sortHandler} href="#/action-2">Task name</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        </div>
    )
}


export default SortAllTask