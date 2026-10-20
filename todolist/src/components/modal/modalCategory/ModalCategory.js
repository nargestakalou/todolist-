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
  const[newCategory,setNewCategory]=useState(JSON.parse(localStorage.getItem('categoryCarts')||'[]'))


  const [categoryItems, setCategoryItems] = useState(categoryLocalArray?categoryLocalArray:[
    { color: 1, title: "Work",iconKey:'work',id:crypto.randomUUID() },
    { color: 2, title: "Personal",iconKey:'personal',id:crypto.randomUUID()  },
    {
      color: 3,
      title: "Study",
      iconKey:'study',
      id:crypto.randomUUID()
    },
    {
      color: 4,
      title: "Health",
      iconKey:'health',
      id:crypto.randomUUID()
    },
    {
      color: 5,
      title: "Shopping",
      iconKey:'shopping',
      id:crypto.randomUUID()
    },
    {
      color: 6,
      title: "Finance",
      iconKey:'finance',
      id:crypto.randomUUID()
    },
    {
      color: 7,
      title: "Travel",
      iconKey:'travel',
      id:crypto.randomUUID()
    },
   
  ]);




  const addCategoryHandler=(newCategory)=>{
    setCategoryItems([...categoryItems,{
      id:categoryItems.length+1,
      title:newCategory,
      iconKey:'default'
    }])
  }

  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(categoryItems));
  }, [categoryItems]);

     const allCategory=[...newCategory,...categoryItems]



  return (
    <>
      <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton className="mx-2" style={{borderBottom:'none'}}>
          <Modal.Title>Select Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="buttonsContainerModal">
            {allCategory.map((item) => (
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
