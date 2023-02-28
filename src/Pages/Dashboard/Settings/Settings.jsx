import "./settings.css";
import { Container, Row, Col } from "react-bootstrap";
import { AccountSettings, AccountPassword } from "../../../Components";

const Settings = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="">
          <AccountSettings />
        </Col>
        <hr />
        <Col md={12} className="">
          <AccountPassword />
        </Col>
        <hr />
      </Row>
    </Container>
  );
};

export default Settings;
