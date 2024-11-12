import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
    return(
        <Navbar className="bg-dark">
            <Container>
                <Navbar.Brand href="#" className="text-white">STUDENT ALUMNI INTERACTION SYSTEM</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link as={Link} className="text-primary">Home</Nav.Link>
                    <Nav.Link as={Link} className="text-primary">Alumni</Nav.Link>
                    <Nav.Link as={Link} className="text-primary">Gallery</Nav.Link>
                    <Nav.Link as={Link} className="text-primary">About</Nav.Link>
                    <Nav.Link as={Link} to='/register' className="text-primary">Login / Register</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;