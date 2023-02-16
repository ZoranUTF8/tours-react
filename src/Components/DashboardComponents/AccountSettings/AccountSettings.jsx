import "./AccountSettings.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from "../../index";
import { Stack, Row, Col } from "react-bootstrap";

const AccountSettings = () => {
  //? Get user and loading from app store
  const { user } = useSelector((store) => store.user);

  const [updatedUser, setUpdatedUser] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Form submitted with value: ");
    // Do something with the form value here
  };

  return (
    <div className="account-settings-container">
      <h1 className="account-settings_title">Your account settings</h1>
      <div className="account-settings_input text-center">
        <form
          onSubmit={handleSubmit}
          className="account-settings_input_form d-flex flex-column"
        >
          <Stack gap={3} className="col-sm-12 col-md-8 mx-auto">
            <label className="input_label  text-muted" htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              value={updatedUser.name}
              onChange={handleChange}
              className="input_field"
            />

            <label className="input_label text-muted" htmlFor="name">Email</label>
            <input
              name="email"
              type="email"
              value={updatedUser.email}
              onChange={handleChange}
              className="input_field"
            />
            <button className="button-primary w-50 mx-auto" type="submit">
              Submit
            </button>
          </Stack>
        </form>

        <div className="account-settings_input_image">
          <h3>Image goes here</h3>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
