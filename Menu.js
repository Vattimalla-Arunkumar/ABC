import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Menu() {
  return (
    <Navbar data-testid="menu-content" bg="light" expand="lg">
      <Navbar.Brand href="#home">ABC Automobiles</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <Nav.Link href="#vehicles">Vehicles</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;