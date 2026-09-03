import "./AllTasksNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiDotsHorizontal } from "react-icons/hi";
import Dropdown from "react-bootstrap/Dropdown";
import { BiSortAlt2 } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { useState } from "react";

function AllTasksNavbar(props) {
  const expand = "md";
const[category,setCategory]=useState(JSON.parse(localStorage.getItem('category')))
console.log(category);
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="mt-4 "
        style={{ background: "rgb(255, 255, 255)" }}
      >
        <Container
          style={{
            position: "fixed",
            top: "0",
            marginBottom: "40px",
            backgroundColor: "#fff",
            paddingTop:'16px'
          }}
          fluid
        >
          <Navbar.Brand href="#" style={{ color: "#5093b4" }}>
            <HiDotsHorizontal size={40} />
          </Navbar.Brand >
          <div className="titleNavbar">
            <h2>All Tasks</h2>
            <span className="countStyle">{props.count} </span>
          </div>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            className="customStyleToggle"
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="top"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                All Tasks
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 customStyleLink">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <Nav.Link
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span className="iconstyleNavbar">
                        <BiSortAlt2 size={20} />
                      </span>
                    <span>
                        Sort By
                    </span>
                    </Nav.Link>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={props.sortDateHandler}
                      href="#/action-1"
                    >
                      Due Date
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={props.sortHandler}
                      href="#/action-2"
                    >
                      Task Name
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic2">
                    <Nav.Link
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span className="iconstyleNavbar">
                        <MdCategory size={20} />{" "}
                      </span>
                     Filter by categorty
                    </Nav.Link>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                  {category.map(item=>(
                     <Dropdown.Item
                     onClick={()=>props.categoryHandler(item.title)}
                    >
                      {item.title}
                    </Dropdown.Item>
                  )

                  )}
                    
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default AllTasksNavbar;
