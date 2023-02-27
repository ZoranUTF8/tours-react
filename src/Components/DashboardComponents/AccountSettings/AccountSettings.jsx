import "./AccountSettings.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stack } from "react-bootstrap";
import AccountAvatar from "./AccountAvatar/AccountAvatar";
import { updateUser } from "../../../features/User/userSlice";

const AccountSettings = () => {
  //? Get user and loading from app store
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [updatedUser, setUpdatedUser] = useState({
    name: user?.name || "",
    email: user?.email || "",
    avatar: user?.avatar || "",
    userId: user?._id || null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Form submitted with value: ", { updatedUser });

    dispatch(updateUser(updatedUser));
  };

  const disabledSubmitBtn = () => {
    if (!updatedUser.name || !updatedUser.email || !updatedUser.avatar) {
      return true;
    }
    return false;
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
            <label className="input_label  text-muted" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={updatedUser.name}
              onChange={handleChange}
              className="input_field"
              minLength={3}
              maxLength={30}
            />

            <label className="input_label text-muted" htmlFor="name">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={updatedUser.email}
              onChange={handleChange}
              className="input_field"
            />
            <Button
              variant="outline-info"
              type="submit"
              disabled={disabledSubmitBtn()}
            >
              {isLoading ? "Loading…" : "Update profile"}
            </Button>
          </Stack>
        </form>

        <div className="account-settings_avatar_container">
          <AccountAvatar
            avatarLink={user?.avatar}
            updatedUser={updatedUser}
            setUpdatedUser={setUpdatedUser}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
