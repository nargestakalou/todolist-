import "./ModalDeleteCategoryCart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Modal } from "react-bootstrap";
import { GoX } from "react-icons/go";
import { useState } from "react";

function ModalDeleteCategoryCart(props) {
  const deleteCategoryCartHandler=()=>{
    const allCategory=JSON.parse(localStorage.getItem('categoryCarts'))
    const allTasks=JSON.parse(localStorage.getItem('tasks'))
    const updateAllCategory=allCategory.filter(task=>task.id!==props.selected.id)
    const updateAllTasks=allTasks.filter(task=>task.selectedCategory.id!==props.selected.id)
    localStorage.setItem("categoryCarts",JSON.stringify(updateAllCategory))
    localStorage.setItem('tasks',JSON.stringify(updateAllTasks))
    props.setAllTasks(updateAllTasks)
props.onClose() 

props.showToast()   
setTimeout(props.closeToast,5000)
  }
  return (
    <>
      <Modal show={props.isOpen} onHide={props.onClose}>
        <div className="alignIcon" onClick={props.onClose}>
          <GoX size={25} />
        </div>
        <div className="containerModDelete">
          <div className="modalIconDelete">
            <span className="modalDeleteIcon">
              <RiDeleteBin6Line size={50} />
            </span>
            <h4 className="titleDeleteCategory">Delete Category</h4>
          </div>
          <div className="cintentDeleteCategory">
            <p>Are you sure you want to delete <span>{props.selected.title}</span>? </p>
            <p>All tasks in this category will also be deleted.</p>
          </div>
          <div className="buttonsCategoryHandler">
            <button className="cancleBtn" onClick={props.onClose}>
              Cancle
            </button>
            <button className="deleteBtn" onClick={deleteCategoryCartHandler}>Delete</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalDeleteCategoryCart;
