import { Container, Row, Col } from "react-bootstrap";
import { AccountSettings } from "../../../Components";

const Settings = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="">
          <AccountSettings />
        </Col>
        <Col md={12} className="bg-danger">
          <h1>Password change</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
