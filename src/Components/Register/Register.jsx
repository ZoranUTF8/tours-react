import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

import "./register.css";

//? Initial user state
const initialState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const Register = () => {
  const [isMember, setIsMember] = useState(true);
  const [user, setUser] = useState(initialState);

  //? Hanlde form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //? Set member
  const setMember = () => {
    setIsMember((prevState) => !prevState);
  };

  //! Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    switch (isMember) {
      case true:
        console.log("already a member");
        break;
      case false:
        console.log("not a member");
        break;
      default:
        break;
    }
  };

  return (
    <Container fluid className="register-container">
      <Row className="">
        <Col
          sm="12"
          md="6"
          className="p-5 text-center text-muted register-container_left"
        >
          <h1>{isMember ? "Login" : "Register"}</h1>
          <br />
          <h3>
            Welcome to our <span>GoTrip</span> website! To register and start
            booking your dream trips, please follow these simple steps:
          </h3>
          <ol>
            <li> Fill in your name, email address, and create a password.</li>
            <li>
              Click on the "Register" button. Check your email for a
              verification message, click on the link provided to verify your
              account.
            </li>

            <li>
              Once your account is verified, you can now log in and start
              browsing and booking tours.
            </li>

            <li>
              Thank you for choosing us, we look forward to helping you plan
              your next adventure!"
            </li>
          </ol>
        </Col>
        <Col
          sm="12"
          md="6"
          className="p-3 d-flex flex-column justify-content-center align-items-center register-container_right"
          mb-sm="5"
        >
          <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={user.email}
                onChange={handleChange}
                name="email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                name="password"
              />
            </Form.Group>

            {!isMember && (
              <>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={user.passwordConfirm}
                    onChange={handleChange}
                    name="passwordConfirm"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={user.name}
                    onChange={handleChange}
                    name="name"
                  />
                </Form.Group>
              </>
            )}

            <Button
              variant="primary"
              type="submit"
              className="register-form_login_btn w-100"
            >
              {isMember ? "Sign in" : "Create account"}
            </Button>

            <Button
              variant="link"
              className="register-form_toggle_member_btn"
              onClick={setMember}
            >
              {isMember ? "Not Registered ?" : "Already Registered ?"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
