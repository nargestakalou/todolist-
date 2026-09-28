import { Link } from "react-router-dom";
import "./ItemsList.css";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";
import icons from '../../content/categoryIcon/categoryIcon'
function ItemsList(props) {
  const iconsCategory =icons
  const selectedCategory=iconsCategory.find(icon=>icon.name===props.iconKey)
  const allTasks=JSON.parse(localStorage.getItem('tasks'))
  const lengthItems=allTasks.filter(task=>task.selectedCategory.title===props.title).length
  
  return (
  props.isCategoryCart ?
      
   ( <div className={` itemContainer  ${props.class}  `}   onClick={props.onClick}>
        <div className={`iconItem ${props.classIcon}`}>
         {selectedCategory.icon}
        </div>
        <h5>{props.title}</h5>
        <div className="itemCount">
            <FaCircle size={'12px'}/>
            <span> <b >
              {lengthItems}
              </b>Items </span>
        </div>
      </div>)
     :
      (<Link to={props.link}>
      <div className={` itemContainer  ${props.class}  `} >
        <div className={`iconItem ${props.classIcon}`}>
         {props.icon }
        </div>
        <h5>{props.title}</h5>
        <div className="itemCount">
            <FaCircle size={'12px'}/>
            <span> <b >
              {props.length}
              </b>Items </span>
        </div>
      </div>
    </Link> )
  );
}
export default ItemsList;
