import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/img/logo.png";
import { useSelector, useDispatch } from "react-redux";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Offcanvas,
  Image,
} from "react-bootstrap";
import { logoutCurrentUser } from "../../features/User/userSlice";

const NavbarComponent = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          variant="dark"
          className="navbar sticky-top"
          expand={expand}
        >
          <Container>
            <Link to="/landing">
              <Navbar.Brand>
                <Image
                  className="logo"
                  src={Logo}
                  width={50}
                  height={50}
                  alt="main logo image"
                  roundedCircle
                />
                <p className="navbar-title navbar-text"> GoJapan</p>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="navbarOffCanvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  GoJapan
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="main-nav">
                  {user ? (
                    <>
                      <NavLink
                        to="/alltours"
                        className={({ isActive }) =>
                          isActive
                            ? "activeLink nav_link"
                            : "notActive nav_link"
                        }
                      >
                        Tours
                      </NavLink>
                      <NavLink
                        to="/aboutus"
                        className={({ isActive }) =>
                          isActive
                            ? "activeLink nav_link"
                            : "notActive nav_link"
                        }
                      >
                        About Us
                      </NavLink>
                      <NavLink
                        to="/contactus"
                        className={({ isActive }) =>
                          isActive
                            ? "activeLink nav_link"
                            : "notActive nav_link"
                        }
                      >
                        Contact Us
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to="/aboutus"
                        className={({ isActive }) =>
                          isActive
                            ? "activeLink nav_link"
                            : "notActive nav_link"
                        }
                      >
                        About Us
                      </NavLink>
                      <NavLink
                        to="/contactus"
                        className={({ isActive }) =>
                          isActive
                            ? "activeLink nav_link"
                            : "notActive nav_link"
                        }
                      >
                        ContactUs
                      </NavLink>
                    </>
                  )}
                  {user ? (
                    <>
                      <NavDropdown
                        title="Options"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        className="dropdownNav"
                      >
                        <NavLink
                          to={user ? "dashboard/me" : "/register"}
                          className={({ isActive }) =>
                            isActive
                              ? "activeLink nav_link"
                              : "notActive nav_link"
                          }
                        >
                          Me
                        </NavLink>

                        <NavDropdown.Divider />

                        <NavLink
                          to={user ? "dashboard/me" : "/register"}
                          className={({ isActive }) =>
                            isActive
                              ? "activeLink nav_link"
                              : "notActive nav_link"
                          }
                          onClick={() =>
                            dispatch(logoutCurrentUser("Logging you out..."))
                          }
                        >
                          Logout
                        </NavLink>
                      </NavDropdown>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to="/register"
                        className={({ isActive }) =>
                          isActive
                            ? "activeLink nav_link"
                            : "notActive nav_link"
                        }
                      >
                        Register/Login
                      </NavLink>
                    </>
                  )}
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
