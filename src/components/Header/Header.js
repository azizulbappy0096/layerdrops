import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar fixed="top" bg="transparent" expand="lg" className="py-4">
      <Container>
        <Navbar.Brand href="#"> <img src="/img/logo-light.png" alt="logo-light" className="header__logo" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" className="me-auto" />
        <Navbar.Collapse className="justify-content-center">
          <Nav className="my-2 my-lg-0">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1" className="ps-lg-5">
              Features
            </Nav.Link>
            <Nav.Link href="#action1" className="ps-lg-5">
              Pricing
            </Nav.Link>
            <Nav.Link href="#action1" className="ps-lg-5">
              Testimonials
            </Nav.Link>
            <Nav.Link href="#action1" className="ps-lg-5">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="light" className="nav__button rounded-pill px-4 py-2">
          Contact
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
