import './NavbarPersonal.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiDotsHorizontal } from "react-icons/hi";


function NavbarPersonal(props){

const expand='md'

    return(
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
            paddingTop:'16px',
    
          }}
          fluid
        >
          <Navbar.Brand href="#" style={{ color: "#5093b4" }}>
            <HiDotsHorizontal size={40} />
          </Navbar.Brand >
          <div className="titleNavbar">
            <h2> Personal Tasks</h2>
            <span className="countStyle">{props.count} </span>
          </div>
          
        </Container>
      </Navbar>



        
        </>
    )
}
export default NavbarPersonal