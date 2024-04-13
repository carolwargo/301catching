import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LayoutNav() {

    return (
        <motion.div
        initial={{ y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        className="home"
        
        >
              
                    <Navbar expand="lg" className="fixed-top shadow" style={{ backgroundColor: 'white', zIndex: 100,  }}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor:'white' }} className='border-none '/>
                    <Navbar.Collapse id="basic-navbar-nav" style={{ color: 'black' }}  className='border-none'>
                        <Nav className="me-auto " id="custom-bb-nav-links">
                            <Nav.Link as={Link} to="/about" style={{ color: 'black' , textShadow: '0 6px 12px rgba(255, 0, 0, 0.4)'}} id="custom-bb-nav-links" className="mx-1">
                                ABOUT
                            </Nav.Link>
                            <Nav.Link as={Link} to="/catching" style={{ color: 'black' , textShadow: '0 6px 12px rgba(255, 0, 0, 0.4)'}} id="custom-bb-nav-links" className="mx-1">
                                CATCHING
                            </Nav.Link>
                            <Nav.Link as={Link} to="/performance" style={{ color: 'black' , textShadow: '0 6px 12px rgba(255, 0, 0, 0.4)'}} id="custom-bb-nav-links" className="mx-1">
                              PERFORMANCE
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact" style={{ color: 'black' , textShadow: '0 6px 12px rgba(255, 0, 0, 0.4)'}} id="custom-bb-nav-links" className="mx-1">
                                CONTACT
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         
        </motion.div>
    );

}

export default LayoutNav;

