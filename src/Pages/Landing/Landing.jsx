import { OurServices } from "../index";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FeaturedTours } from "../index";

import Hero from "../../assets/img/hero.jpg";
import "./landing.css";

const Landing = () => {
  return (
    <Container fluid className="text-center landing-main-container">
      <Row>
        <Col md="12" className="p-0">
          <Image
            fluid
            src={Hero}
            alt="hero image"
            className="p-0 landing-hero_image"
          />
        </Col>
        <Col md="12" className="pt-5 pb-5">
          <OurServices />
        </Col>
        <Col md="12" className="pt-5 pb-5">
          <FeaturedTours />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
