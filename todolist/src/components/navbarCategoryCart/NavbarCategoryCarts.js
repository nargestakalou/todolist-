import './NavbarCategoryCarts.css'
import { Container,Navbar } from 'react-bootstrap'
import { HiDotsHorizontal } from "react-icons/hi";


function NavbarCategoryCarts(props){
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
            paddingTop: "16px",
          }}
          fluid
        >
          <Navbar.Brand href="#" style={{ color: "#5093b4" }}>
            <HiDotsHorizontal size={40} />
          </Navbar.Brand>
          <div className="titleNavbar">
            <h2> {props.title} </h2>
            <span className="countStyle">{props.count} </span>
          </div>
        </Container>
      </Navbar>

        
        </>
    )
}

export default NavbarCategoryCarts