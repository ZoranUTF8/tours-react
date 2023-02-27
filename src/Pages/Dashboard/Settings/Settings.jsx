import { Container, Row, Col } from "react-bootstrap";
import { AccountSettings, AccountPassword } from "../../../Components";

const Settings = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="">
          <AccountSettings />
        </Col>
        <Col md={12} className="">
          <AccountPassword />
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
