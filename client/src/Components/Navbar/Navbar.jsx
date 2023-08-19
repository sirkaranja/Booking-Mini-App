import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; // Import the Button component
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">FlyB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#Flights">Flights</Nav.Link>
            <Nav.Link href="#Hotel">Hotel</Nav.Link>
            <Nav.Link href="#Packages">Packages</Nav.Link>
            <Nav.Link href="#Sign in">Sign in</Nav.Link>
            {/* Replace the "Sign up" Nav.Link with a success Button */}
            <Button variant="primary" href="{Sign up}">Sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
