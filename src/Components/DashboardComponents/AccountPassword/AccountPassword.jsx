import "./accountPassword.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AccountPassword = () => {
  return (
    <div className="password_change_container">
      <Form className="p-3 d-flex flex-column justify-content-center align-items-center">
        <Form.Group className="mb-3 col-lg-6 col-sm-9">
          <Form.Label className="form_label  text-muted">
            Current Password
          </Form.Label>
          <Form.Control
            className="input_field_password"
            type="password"
            placeholder="Enter Current Password"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6 col-sm-9">
          <Form.Label className="form_label  text-muted">
            New Password
          </Form.Label>
          <Form.Control
            className="input_field_password"
            type="password"
            placeholder="Enter New Password"
          />
          <Form.Text className="text-muted">
            Your new password has to be minimum 8 characters long.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6 col-sm-9">
          <Form.Label className="form_label text-muted">
            Confirm New Password
          </Form.Label>
          <Form.Control
            className="input_field_password"
            type="password"
            placeholder="Confirm New Password"
          />
        </Form.Group>

        <Button className="w-50" variant="outline-info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AccountPassword;
