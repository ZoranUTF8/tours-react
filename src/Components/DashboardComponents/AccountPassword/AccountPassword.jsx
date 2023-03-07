import "./accountPassword.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword } from "../../../features/User/userSlice";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";

const initialInputState = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

const AccountPassword = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.user);

  const [updatedUserPassword, setUpdatedUserPassword] =
    useState(initialInputState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      updatedUserPassword.confirmNewPassword.length !==
        updatedUserPassword.newPassword.length ||
      updatedUserPassword.confirmNewPassword !== updatedUserPassword.newPassword
    ) {
      return toast.error("Passwords do not match.");
    } else {
      dispatch(updatePassword(updatedUserPassword));
      setUpdatedUserPassword(initialInputState);
    }
  };

  const handleChange = (e) => {
    setUpdatedUserPassword({
      ...updatedUserPassword,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="password_change_container">
      <Form
        className="p-3 d-flex flex-column justify-content-center align-items-center"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3 col-lg-6 col-sm-9">
          <Form.Label className="form_label  text-muted">
            Current Password
          </Form.Label>
          <Form.Control
            className="input_field_password"
            type="password"
            placeholder="Enter Current Password"
            value={updatedUserPassword.currentPassword}
            name="currentPassword"
            onChange={handleChange}
            minLength={8}
            required
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
            value={updatedUserPassword.newPassword}
            name="newPassword"
            onChange={handleChange}
            minLength={8}
            required
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
            value={updatedUserPassword.confirmNewPassword}
            name="confirmNewPassword"
            onChange={handleChange}
            minLength={8}
            required
          />
        </Form.Group>

        <Button
          className="w-50"
          variant="outline-info"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            "Submit"
          )}
        </Button>
      </Form>
    </div>
  );
};

export default AccountPassword;
