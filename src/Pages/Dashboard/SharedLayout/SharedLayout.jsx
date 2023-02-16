import { NavbarComponent } from "../../../Components";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./shared-layout.css";
const SharedLayout = () => {
  return (
    <main>
      <Container fluid>
        <Row>
          <Col className="fullPage">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SharedLayout;
