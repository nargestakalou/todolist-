 import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import "./Home.css";
import ItemsList from "../../components/itemsList/ItemsList";
import { FaTasks } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import AddItem from "../../components/addItem/AddItem";
import AddButton from "../../components/addButton/AddButton";
import { useState } from "react";
import ModalCategoryHome from "../../components/modalCategory/ModalCategoryHome";
import { useNavigate } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import ModalCategoryCart from "../../components/modalCategoryCart/ModalCategoryCart";
import ModalEditCategoryCart from "../../components/modalEditCategoryCart/ModalEditCategoryCart";
import ModalDeleteCategoryCart from "../../components/modalDeleteCategoryCart/ModalDeleteCategoryCart";
import Toast from "../../components/toast/Toast";

function Home() {
  const [show, setShow] = useState(false);
  const[showModalEdit,setShowModalEdit]=useState(false)
    const[contentToast,setContentToast]=useState('Category deleted successfully!')
  const[showToast,setShowToast]=useState(false)

  const[showModal,setShowModal]=useState(false)
  const[selectedCategory,setSelectedCategory]=useState('')
const[showِDeleteModal,setShowDeleteModal]=useState(false)
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [allTasks, setAllTasks] = useState(savedTasks);
  const [personalTasks, setPersonalTasks] = useState(
    allTasks.filter((task) => task.selectedCategory?.title === "Personal"),
  );
  const [workTasks, setWorkTasks] = useState(
    allTasks.filter((task) => task.selectedCategory?.title === "Work"),
  );
  const categoryCarts = JSON.parse(localStorage.getItem("categoryCarts") || []);
  const [newCategoryCarts, setNewCategoryCarts] = useState(categoryCarts);

  const [favoriteTasks, setFavoriteTasks] = useState(
    allTasks.filter((task) => task.isFavorite === true),
  );
const navigate=useNavigate()



  const lists = [
    {
      title: "All task",
      icon: <FaTasks size={25} />,
      link: "/alltask",
      id: 1,
      class: "backgroundColor",
      classIcon: "customIcon",
      length: allTasks.length,
    },
    {
      title: "Personal Stuff",
      icon: <IoPersonOutline size={25} />,
      link: "/personal",
      id: 2,
      length: personalTasks.length,
    },
    {
      title: "Work",
      icon: <MdWorkOutline size={25} />,
      link: "/work",
      id: 4,
      length: workTasks.length,
    },
    {
      title: "Favorite",
      icon: <MdOutlineFavoriteBorder size={25} />,
      link: "/favorites",
      id: 5,
      length: favoriteTasks.length,
    },
  ];

  const openModalHandler = () => {
    setShow(true);
  };
  const closeHandler = () => {
    setShow(false);
  };

const routHandler=(selectedCart)=>{
  navigate('/categorytasks',{
    state:selectedCart
  })
  
}
//edit category
const onOpenHandler=(event,title)=>{
  event.stopPropagation()
    const selectedCategoryCart=categoryCarts.find(category=>category.title===title)
setSelectedCategory(selectedCategoryCart)  

  setShowModal(true)

  // console.log(selectedCategory);

}

const editeCategoryHandler=()=>{
setShowModalEdit(true)
setShowModal(false)
}
const deleteCategoryCartHandler=()=>{
setShowDeleteModal(true)
setShowModal(false)
}


  return (
    <>
      <MyNavbar />
      <Container>
        <h1 className="titleHome">My List</h1>
        <Row
          className="row-cols-1 row-cols-md-2 row-cols-lg-4 gy-4  mx-3"
          style={{ paddingBottom: "100px" }}
        >
          {lists.map((list) => (
            <Col key={list.id}>
              <ItemsList {...list} />
            </Col>
          ))}
                      {showToast&& <Toast content={contentToast} />}

          {categoryCarts.map((cart) => (
            <Col>
              <ItemsList {...cart} isCategoryCart  onClick={()=>routHandler(cart)} openHandler={onOpenHandler}   />

            </Col>
          ))}
          <Col>
            <AddItem onClick={openModalHandler} />
          </Col>
        </Row>
        {showModal&&
         <ModalCategoryCart isOpen={showModal} onClose={()=>setShowModal(false) } onEdit={editeCategoryHandler} onDelete={deleteCategoryCartHandler} />}
        {show && <ModalCategoryHome show={show} onClose={closeHandler} />}
        {showModalEdit&& <ModalEditCategoryCart isOpen={showModalEdit} onClose={()=>setShowModalEdit(false)} selected={selectedCategory}  />  }
          {showِDeleteModal&& <ModalDeleteCategoryCart  isOpen={showِDeleteModal} onClose={()=>setShowDeleteModal(false)} selected={selectedCategory} showToast={()=>setShowToast(true)} closeToast={()=>setShowToast(false)} setAllTasks={setAllTasks} />}
        <AddButton />
      </Container>
    </>
  );
}

export default Home;
