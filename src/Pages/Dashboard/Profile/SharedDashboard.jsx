import "./SharedDashboard.css";
import { Outlet } from "react-router-dom";
import ProfileNav from "./ProfileNav";

const SharedDashboard = () => {
  return (
    <div className="profile-container">
      <div className="profile-container_left">
        <ProfileNav />
      </div>
      <hr className="profile-container_divider" />
      <div className="profile-container_right">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedDashboard;
