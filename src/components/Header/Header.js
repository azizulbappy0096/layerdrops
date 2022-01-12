import React, { useEffect, useState } from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  let [fixedNav, setFixedNav] = useState(null);
  let [absoluteNav, setAbsoluteNav] = useState(null);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      if (window.scrollY > 30 && fixedNav === null) {
        setFixedNav({
          transform: "translateY(0)",
          opacity: 1,
        });

        setAbsoluteNav({
          display: "none",
        });
      } else {
        setFixedNav(null);
        setAbsoluteNav(null);
      }
    });

    return () => {
      document.removeEventListener("scroll", (e) => {});
    };
  }, []);

  return (
    <header>
      <Navbar
        bg="transparent"
        expand="lg"
        className="py-4 navbar-absolute"
        style={absoluteNav}
      >
        <Container className="position-relative">
          <Navbar.Brand href="#">
            {" "}
            <img
              src="/img/logo-light.png"
              alt="logo-light"
              className="header__logo"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" className="me-md-auto" />
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
          <Button
            variant="light"
            className="nav__button rounded-pill px-4 py-2 position-absolute top-0 end-0 d-none d-md-block"
          >
            Contact
          </Button>
        </Container>
      </Navbar>

      <Navbar
        fixed="top"
        bg="transparent"
        expand="lg"
        className="py-4 navbar-fixed"
        style={fixedNav}
      >
        <Container className="position-relative">
          <Navbar.Brand href="#">
            {" "}
            <img
              src="/img/logo-light.png"
              alt="logo-light"
              className="header__logo"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" className="me-md-auto" />
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
          <Button
            variant="light"
            className="nav__button rounded-pill px-4 py-2 position-absolute top-0 end-0 d-none d-md-block"
          >
            Contact
          </Button>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
