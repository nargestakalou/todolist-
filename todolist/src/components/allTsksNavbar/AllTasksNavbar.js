import './AllTasksNavbar.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiDotsHorizontal } from "react-icons/hi";



function AllTasksNavbar(){
      const expand = "md";

    return(
        <>
         <Navbar key={expand} expand={expand} className="mt-4 "style={{background:'rgb(255, 255, 255)'}}>
        <Container style={{position:'fixed',top:'0',marginBottom:'40px',backgroundColor:'#fff'}} fluid>
          <Navbar.Brand href="#" style={{ color: "#5093b4" }}>
            <HiDotsHorizontal  size={40} />
          
          </Navbar.Brand>
           <div className="titleNavbar">
             <h2>All Tasks</h2>
            <span>0</span>
           </div>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            className="customStyleToggle"
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                All Tasks
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 customStyleLink">
                <Nav.Link>sort by</Nav.Link>
                <Nav.Link>Filter</Nav.Link>
                <Nav.Link>Filter by category</Nav.Link>
                
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
        
        </>
    )
}


export default AllTasksNavbar