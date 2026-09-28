import './AddItem.css'
import { MdAdd } from "react-icons/md";
import { Button } from 'react-bootstrap';
function AddItem(prop){
    return(
        
        <div className="addItem"  onClick={prop.onClick} >
            <MdAdd size={'50px'}/>
            <p>Add Category</p>
        </div>
        
        
    )
}

export default AddItem