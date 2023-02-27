import "./accountPassword.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AccountPassword = () => {
  return (
    <Form className="p-3 d-flex flex-column justify-content-center align-items-center">
      <Form.Group className="mb-3 col-lg-6 col-sm-9" controlId="formBasicEmail">
        <Form.Label className="form_label  text-muted">
          Email address
        </Form.Label>
        <Form.Control
          className="input-filed"
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6 col-sm-9" controlId="formBasicEmail">
        <Form.Label className="form_label  text-muted">Password</Form.Label>
        <Form.Control
          className="input-filed"
          type="password"
          placeholder="Password"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6 col-sm-9" controlId="formBasicEmail">
        <Form.Label className="form_label  text-muted">Password</Form.Label>
        <Form.Control
          className="input-filed"
          type="password"
          placeholder="Password"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="outline-info" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AccountPassword;
