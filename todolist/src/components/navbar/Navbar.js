import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { PiStickerLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  const expand = "md";
  return (
    <>
      <Navbar key={expand} expand={expand} className=" " style={{background:'rgb(255, 255, 255)'}}>
        <Container style={{position:'fixed',top:'0',marginBottom:'40px',backgroundColor:'#fff'}} fluid>
          <Navbar.Brand href="#" style={{ color: "rgb(82, 147, 180)" }}>
            <PiStickerLight size={"40px"} />
          </Navbar.Brand>
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
                lists
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 customStyleLink">
                <NavLink  to={'/'}  >Home</NavLink>
                <NavLink  to={'/alltask'} >All Task</NavLink>
                <NavLink to={'/favourite'}>Favourite</NavLink>
                <NavLink to={'/ideas'}>ideas</NavLink>

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
