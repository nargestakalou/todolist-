import "./ModalCategory.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CategoryItem from "../../categoryItem/CategoryItem";
import { useEffect, useState } from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import AddCategoryInput from "../../input/addCategoryInput/AddCategoryInput";

function ModalCategory({ isOpen, onClose ,onSelect,categorySelected}) {

 const categoryLocal=localStorage.getItem('category')
  const categoryLocalArray=JSON.parse(categoryLocal)
  


  const [categoryItems, setCategoryItems] = useState(categoryLocalArray?categoryLocalArray:[
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

 


  const addCategoryHandler=(newCategory)=>{
    setCategoryItems([...categoryItems,{
      id:categoryItems.length+1,
      title:newCategory,
      icon:'default'
    }])
  }

  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(categoryItems));
  }, [categoryItems]);




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
          <hr style={{margin:'30px 0'}} />
          <AddCategoryInput categoryNewHandler={addCategoryHandler}/>
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
