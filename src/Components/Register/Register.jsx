import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, loginUser } from "../../features/User/userSlice";
import { Loading } from "../index";

import "./register.css";

//? Initial user state
const initialState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const Register = () => {
  //? Get user and loading from app store
  const { user, isLoading } = useSelector((store) => store.user);
  const [isMember, setIsMember] = useState(true);
  const [userValues, setUserValues] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //? navigate away if user exists
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/dashboard/me");
      }, 2000);
    }
  }, [user]);
  //? Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };

  //? Set member
  const setMember = () => {
    setIsMember((prevState) => !prevState);
  };

  //? Handle form submit
  //* Separate into smaller functions later
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConfirm } = userValues;

    if (
      !email ||
      !password ||
      (!isMember && !name) ||
      (!isMember && !passwordConfirm)
    ) {
      return toast.error("Check your input", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }

    switch (isMember) {
      case true:
        dispatch(loginUser({ email, password }));
        break;
      case false:
        if (password.toLowerCase() === passwordConfirm.toLowerCase()) {
          dispatch(registerUser({ email, password, passwordConfirm, name }));
        } else {
          return toast.error("Passwords don't match.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
        break;
      default:
        console.log("No such option in register.");
        break;
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container className="register-container p-5">
      <Row>
        <Col
          sm="12"
          md="6"
          className="p-3 text-right text-muted register-container_left"
        >
          <h1>{isMember ? "Login" : "Register"}</h1>
          <br />
          <h3>
            Welcome to our <span>GoJapan</span> website! To register and start
            booking your dream trips, please follow these simple steps:
          </h3>
          {isMember ? (
            <>
              <div>
                <ol>
                  <li>Enter your email address in the designated field.</li>
                  <li>Enter your password in the designated field.</li>
                  <li>
                    Click on the sign in button or press enter to submit your
                    information.
                  </li>
                  <li>
                    If your login is successful, you will be directed to the
                    main page of your website. If it is not successful, you may
                    be prompted to re-enter your information or check your login
                    credentials.
                  </li>
                </ol>
              </div>
            </>
          ) : (
            <>
              <ol>
                <li>
                  Fill in your name, email address, and create a password.
                </li>
                <li>
                  Click on the "Register" button. Check your email for a
                  verification message, click on the link provided to verify
                  your account.
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
            </>
          )}
        </Col>
        <Col
          sm="12"
          md="6"
          className="p-5 d-flex flex-column justify-content-center align-items-center register-container_right text-light"
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={userValues.email}
                onChange={handleChange}
                name="email"
                required
              />
              <Form.Text className="text-light">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={userValues.password}
                onChange={handleChange}
                name="password"
                minLength={8}
                required
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
                    value={userValues.passwordConfirm}
                    onChange={handleChange}
                    name="passwordConfirm"
                    minLength={8}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={userValues.name}
                    onChange={handleChange}
                    name="name"
                    minLength={3}
                    maxLength={30}
                    required
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
