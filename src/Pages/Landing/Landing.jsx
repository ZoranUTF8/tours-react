import { OurServices } from "../index";
import { Container, Row, Col } from "react-bootstrap";
import {
  FeaturedTours,
  LandingVideo,
  AboutUs,
  Testimonials,
  Hero,
} from "../index";
import "./landing.css";

const Landing = () => {
  return (
    <Container fluid className="text-center">
      <Row>
        <Col md="12" className="p-0">
          <LandingVideo />
        </Col>
        <Col md="12" className="pt-5 pb-5">
          <AboutUs />
        </Col>
        <Col md="12" className="pb-5">
          <FeaturedTours />
        </Col>
        <Col md="12" className="pt-5 p-0">
          <Hero/>
        </Col>
        <Col md="12" className="pt-5 pb-5">
        <OurServices />
        </Col>
        <Col md="12" className="pt-5 pb-5 p-0">
          <Testimonials />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
