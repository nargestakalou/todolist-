import { Button } from 'react-bootstrap';
import './AddCategoryInput.css'
import Form from "react-bootstrap/Form";
import { RiStickyNoteAddLine } from "react-icons/ri";
import { useState } from 'react';


function AddCategoryInput({categoryNewHandler}){
  const[newCategory,setNewCategory]=useState('')
  const addHandler=()=>{
categoryNewHandler(newCategory)
  }
    return(
       <>
       
       <Form.Group className="mb-3 mt-2 " controlId="formGridAddress1">
        <Form.Label className="title mb-3 block">New Category</Form.Label>
        <div className='display'>
        <div>
          <i className="icon">
            <RiStickyNoteAddLine size={"30px"} />
          </i>
          <Form.Control
            placeholder="Enter category name"
            className="inputStyleCategory"
          value={newCategory}
          onChange={(e)=>setNewCategory(e.target.value)}

          />
        </div>
        <Button className='addBtnCategory' onClick={addHandler}> Add New Category</Button>


        </div>
      </Form.Group>
       
       
       </>

    )
}

export default AddCategoryInput