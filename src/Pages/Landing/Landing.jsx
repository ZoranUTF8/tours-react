import { OurServices } from "../index";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FeaturedTours } from "../index";

import Hero from "../../assets/img/hero.jpg";
import "./landing.css";

const Landing = () => {
  return (
    <Container fluid={true} className="text-center landing-main-container">
      <Row>
        <Col md="12" className="p-0">
          <Image
            fluid={true}
            src={Hero}
            alt="hero image"
            className="p-0 landing-hero_image"
          />
        </Col>
        <Col md="12" className="mt-5 mb-5">
          <OurServices />
        </Col>
        <Col md="12">
          <FeaturedTours />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
