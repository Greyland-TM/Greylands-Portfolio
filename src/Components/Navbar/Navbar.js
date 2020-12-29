import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return(
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Greyland</Navbar.Brand>
          <Nav >
            <Nav.Link href="landingPage">Home</Nav.Link>
            <Nav.Link href="/resume">About Me</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </>
    )
}

export default Navigation;