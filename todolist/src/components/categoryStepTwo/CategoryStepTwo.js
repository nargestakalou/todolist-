import { useState } from "react";
import ColorPicker from "../colorPicker/ColorPicker";
import "./CategoryStepTwo.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";

function CategoryStepTwo(props) {
  const colors = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },{id:5},{id:6},{id:7},{id:8}];
  const[allTasks,setAllTasks]=useState(JSON.parse(localStorage.getItem('tasks')))
  const[categoryTasks,setCategoryTasks]=useState(allTasks.filter(task=>task.selectedCategory.icon===props.inputValue).length)
  return (
    <div className="containerTwo ">
      <div className="modalTitle">
        <span onClick={props.backSp}>
          <GrFormPrevious size={30} />
        </span>
        <span className="titleCategory">Add Category</span>
      </div>
      <div className="modalContent">
        <h5>Choose a color</h5>
        <p>Pick a color for your category.</p>
        <div className="colorsRow">
         {colors.map(color=>(
          <ColorPicker   {...color}  handlerColor={props.colorIdHandler} colorId={props.colorId} />
         ))}
        </div>
      </div>
      <div className={`modalShow color${props.colorId}`}>
        <span className={`iconTwo color${props.colorId} backgr`}>
          {props.selectedIcon}
        </span>
        <span>{props.inputValue}</span>
        <span className="count">{categoryTasks} Items</span>
      </div>
      <button className="addBtnCategoryModal" onClick={props.createCartHandler}>Create</button>
    </div>
  );
}

export default CategoryStepTwo;
