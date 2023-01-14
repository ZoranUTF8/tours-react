import { Container, Col, Row, NavItem, Nav, NavLink } from "react-bootstrap";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Nav>
              <NavItem className="footer-navitem">
                <NavLink
                  className="footer-navlink"
                  href="https://www.facebook.com"
                >
                  <FaFacebookF size="25px" />
                </NavLink>
              </NavItem>
              <NavItem className="footer-navitem">
                <NavLink
                  className="footer-navlink"
                  href="https://www.instagram.com"
                >
                  <AiFillInstagram size="25px" />
                </NavLink>
              </NavItem>
              <NavItem className="footer-navitem">
                <NavLink className="footer-navlink" href="https://twitter.com">
                  <FaTwitter size="25px" />
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col className="footer-column-2 text-center">
            <p>Your journey starts here!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
