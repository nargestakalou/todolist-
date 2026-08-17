import './CategoryItem.css'
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa6";
import categoryIcon from '../../content/categoryIcon/categoryIcon';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useState } from 'react';

function CategoryItem(props){
    const[isClicked,setIsClicked]=useState(false)




    const icons=categoryIcon
    const selectIcon=icons.find(icon=>icon.name===props.icon)?.icon
    
    return(
       <div className='buttonItem'>
         <button className='buttonCategory' onClick={ ()=>  props.onSelect(props.category)} >
            <div className="left">
                <span className={`iconCategory color${props.id}`}>
                       {/* {icons.find(icon=>(
                icon.name===props.icon&&icon.icon
               ))} */}
               {selectIcon}
                </span>
                <span className='titleCategory'>{props.title}</span>

            </div>
            <div className="right">
                {props.category===props.categorySelected?<IoIosCheckmarkCircle size={30} className='selectedIcon'/>:<FaRegCircle size={30}/>}
            </div>

        </button>
    
       </div>
       
    
    )
}

export default CategoryItem