import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutUsImage from "../../assets/img/aboutUs.jpg";
import "./aboutUs.css";
const AboutUs = () => {
  return (
    <Container className="p-2">
      <Row>
        <Col xs="12" md="6" className="p-0 ">
          <Image src={AboutUsImage} fluid className="about-us_image" />
        </Col>
        <Col xs="12" md="6" className="">
          <div className="about-us_text">
            <p className="about-us_text_title">ABOUT OUR COMPANY</p>
            <h3 className="about-us_text_info">We are Go Trip Tours Support Company</h3>
            <p className="about-us_text_desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <Button className="about-us_text-button">
              <Link to="/aboutUs" className="about-us_text-link">About us</Link>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
