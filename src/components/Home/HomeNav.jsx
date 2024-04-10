import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function HomeNavigation() {
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand
          href="#home"
          className="border border-black shadow px-2 w3-hover-opacity"
        >
          <b>P</b>|P
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'black'}}/>
        <Navbar.Collapse id="basic-navbar-nav" style={{color:'black'}}>
          <Nav className="me-auto text-black" id="custom-re-nav-links">
          <Nav.Link as={Link} to="/home" style={{color:'black'}} id="custom-re-nav-links">
  Home
</Nav.Link>
<Nav.Link as={Link} to="/about" style={{color:'black'}} id="custom-re-nav-links" className="w3-margin-right">
  About
</Nav.Link>
<Nav.Link as={Link} to="/real-estate" style={{color:'black'}} id="custom-re-nav-links" className="w3-margin-right">
    Real Estate
</Nav.Link>
<Nav.Link as={Link} to="/baseball" style={{color:'black'}} id="custom-re-nav-links" className="w3-margin-right">
    Baseball
</Nav.Link>
<Nav.Link as={Link} to="/dashboard" style={{color:'black'}} id="custom-re-nav-links" className="w3-margin-right">
  Dashboard
</Nav.Link>
<Nav.Link as={Link} to="/contact" style={{color:'black'}} id="custom-re-nav-links" className="w3-margin-right">
    Contact
</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavigation;
