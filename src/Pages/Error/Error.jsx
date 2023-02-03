import NotFound from "../../assets/img/NotFound.svg";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
// import "./error.css";
const Error = () => {
  return (
    <Container className="fullPage error-container text-center d-flex justify-content-center align-items-center ">
      <Row>
        <Col xs="12" md="6">
          <Image fluid={true} src={NotFound} alt="404 page" />
        </Col>
        <Col
          xs="12"
          md="6"
          className="mt-3 d-flex flex-column p-3 justify-content-center align-items-center"
        >
          <h3>Ohh! Page not found.</h3>
          <p>We can't find the page you are requesting for.</p>
          <Link to="/landing" className="btn btn-info shadow mt-5">
            Back Home
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
