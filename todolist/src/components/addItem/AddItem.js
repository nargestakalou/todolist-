import { Link } from 'react-router-dom'
import './AddItem.css'
import { MdAdd } from "react-icons/md";

function AddItem(){
    return(
        <Link to={''}>
        <div className="addItem">
            <MdAdd size={'50px'}/>
        </div>
        
        </Link>
    )
}

export default AddItem