import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutUsImage from "../../assets/img/aboutus/aboutUs.jpg";
import "./aboutUs.css";
const AboutUs = () => {
  return (
    <Container className="p-2">
      <Row>
        <Col xs="12" md="6" className="p-0 ">
          <Image src={AboutUsImage} fluid className="about-us_image" />
        </Col>
        <Col xs="12" md="6" className="">
          <div className="about-us_text ">
            <p className="section-title">ABOUT OUR COMPANY</p>
            <h3 className="about-us_text_info text-muted">
              Welcome to GoJapan - the number one destination for tours and
              guides in Japan!
            </h3>
            <p className="about-us_text_desc text-muted">
              We are here to make your experience in Japan the best it can be.
              Our website is the perfect place to find the perfect tour or guide
              for your needs.
            </p>
            <Link to="/aboutUs" className="about-us_text-link">
              About us
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
