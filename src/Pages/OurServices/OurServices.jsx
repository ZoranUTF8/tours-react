import { Container, Row, Col, Image } from "react-bootstrap";
import servicesData from "../../assets/data/services/servicesData";
import "./OurServices.css";
const OurServices = () => {
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center">
        {servicesData.map((item) => {
          return (
            <Col
              md="3"
              xs="12"
              className="mb-5 single_service_card"
              key={item.id}
            >
              <div className="single_service_icon_container">
                <Image src={item.icon} className="single_service_icon" />
              </div>
              <div>
                <h5 className="single_service_text">{item.title}</h5>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default OurServices;
