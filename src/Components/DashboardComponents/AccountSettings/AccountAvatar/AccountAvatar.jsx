import Image from "react-bootstrap/Image";
import "./AccountAvatar.css";

const AccountAvatar = ({
  avatarLink,
  updatedUser,
  setUpdatedUser,
  isLoading,
}) => {
  const setUsersAvatar = () => {
    setUpdatedUser({
      ...updatedUser,
      avatar:
        "https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    });
  };
  return (
    <div className="user_avatar_container">
      <div className="avatar_container_image">
        <Image src={avatarLink} alt="user avatar image" fluid roundedCircle />
      </div>
      <div className="avatar_container_image_button">
        <h6 onClick={setUsersAvatar} disabled={isLoading}>
          {isLoading ? "Loading..." : "Choose new photo"}
        </h6>
      </div>
    </div>
  );
};

export default AccountAvatar;
