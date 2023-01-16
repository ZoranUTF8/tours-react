import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/img/logo.png";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Offcanvas,
  Image,
} from "react-bootstrap";

const NavbarComponent = () => {
  const [user, setUser] = useState(false);
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} variant="dark" className="navbar sticky-top shadow-md" expand={expand}>
          <Container>
            <Navbar.Brand href="/landing">
              {" "}
              <Image
                src={Logo}
                width={50}
                height={50}
                alt="main logo image"
                roundedCircle
              />{" "}
              <p className="navbar-title navbar-text"> GoTrip</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  GoTrip
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#">Tours</Nav.Link>
                  <Nav.Link href="#">Destinations</Nav.Link>
                  <Nav.Link href="#">About Us</Nav.Link>
                  <Nav.Link href="#">Contact Us</Nav.Link>
                  <NavDropdown
                    title={user ? "Options" : "Account"}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action4">
                      {user ? "Me" : "Register"}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      {user ? "Options" : "Login"}
                    </NavDropdown.Item>
                    {user && (
                      <NavDropdown.Item href="#action5">
                        <NavDropdown.Divider />
                        Logout
                      </NavDropdown.Item>
                    )}
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavbarComponent;
