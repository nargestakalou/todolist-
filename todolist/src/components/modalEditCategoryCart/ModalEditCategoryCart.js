import { Modal } from "react-bootstrap";
import "./ModalEditCategoryCart.css";
import { TbSubtitlesEdit } from "react-icons/tb";
import categoryIcons from "../../content/categoryIcon/categoryIcon";
import IconCardCategory from "../iconCardCategory/IconCardCategory";
import ColorPicker from "../colorPicker/ColorPicker";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoX } from "react-icons/go";

function ModalEditCategoryCart(props) {
  const icons = categoryIcons;
  const colors = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];

//state
const[close,setClose]=useState(false)
const[editCategory,setEditCategory]=useState(props.selected)
const[editTitle,setEditTitle]=useState(props.selected.title)
const[editColor,setEditColor]=useState(props.selected.color)
const[editIconKey,setEditIconKey]=useState(props.selected.iconKey)
const allCategory=JSON.parse(localStorage.getItem('categoryCarts'))
//handler
const editTitleHandler=(editTitle)=>{
  setEditTitle(editTitle)
  
}
const editColorHandler=(editColorId)=>{
  setEditColor(editColorId)
  
}
const editIconHandler=(editIcon)=>{
  setEditIconKey(editIcon.name)
  
}
const navigate =useNavigate()
const saveChangeCategoryHandler=()=>{
  const updateCategory={...editCategory,
    title:editTitle,
    color:editColor,
    iconKey:editIconKey
  }
  
  setEditCategory(updateCategory)
  const updateAllCategory=allCategory.map(cart=>cart.id===updateCategory.id?updateCategory:cart)
  
const allTasks=JSON.parse(localStorage.getItem('tasks')||'[]')
const updateAllTasks=allTasks.map(task=>task.selectedCategory.id===updateCategory.id?{...task,selectedCategory:updateCategory}:task)


localStorage.setItem('tasks',JSON.stringify(updateAllTasks))

  localStorage.setItem('categoryCarts',JSON.stringify(updateAllCategory))
  props.onClose()
  navigate('/')
}


  return (
    <>
      <Modal show={props.isOpen} onHide={props.onClose}>
         <div className='alignIcon' onClick={props.onClose}>
<GoX  size={25}/>
            </div>
        <div className="containerEdit">
          <div className="modalTitle">
            <span className="modalIcon">
              <TbSubtitlesEdit size={60} />
            </span>
            <h3 className="titleCategory">Edit Category</h3>
          </div>
          <div className="modalContent">
            <div className="categoryName">
              <input type="text" name="" id="" value={editTitle}  onChange={(e)=>editTitleHandler(e.target.value)} />
            </div>
            <div className="chooseIcon">
              <h5>Choose an icon</h5>
              <div className="icons">
                {icons.map((icon) => (
                  <IconCardCategory key={icon.name} {...icon} selected={editIconKey} handler={editIconHandler} />
                ))}
              </div>
            </div>
            <div className="categoryColor">
              <h5>Choose a color</h5>
              <div className="colorsRow">
                {colors.map((color) => (
                  <ColorPicker {...color}  colorId={editColor} handlerColor={editColorHandler} />
                ))}
              </div>
            </div>
          </div>
          <button className="saveChangeBtn" onClick={saveChangeCategoryHandler} >Save Change</button>
        </div>
      </Modal>
    </>
  );
}

export default ModalEditCategoryCart;
