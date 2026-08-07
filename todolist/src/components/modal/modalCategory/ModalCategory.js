import "./ModalCategory.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CategoryItem from "../../categoryItem/CategoryItem";
import { useEffect, useState } from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

function ModalCategory({ isOpen, onClose ,onSelect,categorySelected}) {
  const [categoryItems, setCategoryItems] = useState([
    { id: 1, title: "Work",icon:'work' },
    { id: 2, title: "Personal",icon:'personal'  },
    {
      id: 3,
      title: "Study",
      icon:'study'
    },
    {
      id: 4,
      title: "Health",
      icon:'health'
    },
    {
      id: 5,
      title: "Shopping",
      icon:'shopping'
    },
    {
      id: 6,
      title: "Finance",
      icon:'finance'
    },
    {
      id: 7,
      title: "Travel",
      icon:'travel'
    },
   
  ]);


  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(categoryItems));
  }, [categoryItems]);


const addCategoryHandler=()=>{

}


  return (
    <>
      <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton className="mx-2" style={{borderBottom:'none'}}>
          <Modal.Title>Select Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="buttonsContainer">
            {categoryItems.map((item) => (
              <CategoryItem key={item.id} {...item}  category={item} onSelect={onSelect} categorySelected={categorySelected} />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer style={{borderTop:'none'}}>
          
          <Button className="buttonAddCategory" onClick={onClose }>
           Add New Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCategory;
