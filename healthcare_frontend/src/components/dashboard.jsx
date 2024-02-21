import React from "react";
import Container from  'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import medlogo from '../assets/images/medlogo.jpg';
import '../assets/styles/dashboard.css';
//  import ReactDom from "react-dom"

const Navigationbar = () => {
    return(
        <Navbar expand = "md" style={{backgroundColor : "#5b00ff", color : "white"}}>
            <Container>
                <Navbar.Brand href = "#home"><img src = {medlogo} alt = "Logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href = "#home" style={{color : "white"}}>Home</Nav.Link>
                        <Nav.Link href = "#link" style={{color : 'white'}}>Link</Nav.Link>
                        <NavDropdown title = "Dropdown" id = "basic-nav-dropdown" style={{color : 'white'}}>
                            <NavDropdown.Item href="#action">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action2">Action2</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Action3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigationbar;