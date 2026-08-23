import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import "./Home.css";
import ItemsList from "../../components/itemsList/ItemsList";
import { FaTasks } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { GiDeadWood } from "react-icons/gi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import AddItem from "../../components/addItem/AddItem";
import AddButton from "../../components/addButton/AddButton";
function Home() {
  const lists = [
    {
      title: "All task",
      icon: <FaTasks />,
      link: "/alltask",
      id: 1,
      class: "backgroundColor",
      classIcon: "customIcon",
      length: JSON.parse(localStorage.getItem('tasks')).length

    },
    {
      title: "Personal Stuff",
      icon: <IoPersonOutline />,
      link: "/personal",
      id: 2,
    },
    { title: "Ideas", icon: <GiDeadWood />, link: "/ideas", id: 3 },
    { title: "Work", icon: <MdWorkOutline />, link: "/work", id: 4 },
    {
      title: "Favourite",
      icon: <MdOutlineFavoriteBorder />,
      link: "/favourite",
      id: 5,
    },
     
  ];
  return (
    <>
        <MyNavbar />
        <Container >
          <h1 className="titleHome">My List</h1>
          <Row className="row-cols-2 row-cols-md-4 gy-4  mx-3" style={{paddingBottom:'100px'}} >
            {lists.map((list) => (
              <Col key={list.id}>
                <ItemsList {...list} />
              </Col>
            ))}
           <Col >
         <AddItem/>

           </Col>
          </Row>
        <AddButton/>

        </Container>
    </>
  );
}

export default Home;
