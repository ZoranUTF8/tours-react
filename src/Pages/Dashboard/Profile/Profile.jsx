import "./profile.css";
import { Profile as ProfileComponent } from "../../../Components";
import ProfileNav from "./ProfileNav";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-container_left">
        <ProfileNav />
      </div>
      <hr className="profile-container_divider" />
      <div className="profile-container_right">
        <ProfileComponent />
      </div>
    </div>
  );
};

export default Profile;
