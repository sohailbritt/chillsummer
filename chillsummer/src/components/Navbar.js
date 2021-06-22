import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'



const Header = () => {
    return (
      
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"style={{color:"white"}}>Chill Summer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
              <Nav.Link href="#explore" style={{color:"white"}}>Explore</Nav.Link>
              <Nav.Link href="#about" style={{color:"white"}}>About</Nav.Link>
              <Nav.Link href="#contact" style={{color:"white"}}>Contact Us</Nav.Link>
            </Nav>
   
         </Navbar.Collapse>
        </Navbar>

    )
}

export default Header
