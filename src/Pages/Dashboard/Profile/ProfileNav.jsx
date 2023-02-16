import "./profileNav.css";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiTwotoneSetting, AiTwotoneStar, AiFillIdcard } from "react-icons/ai";
import { RiSuitcaseFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";

import { useSelector } from "react-redux";

const ProfileNav = () => {
  const {
    user: { role },
  } = useSelector((store) => store.user);

  return (
    <>
      <Stack
        gap={2}
        className="profile-nav_top d-flex p-4 justify-content-center "
      >
        <div>
          <Link to={"settings"}>
            <AiTwotoneSetting /> Settings
          </Link>
        </div>
        <div>
          <Link to={"mybookings"}>
            <RiSuitcaseFill />
            My Bookings
          </Link>
        </div>
        <div>
          <Link>
            <AiTwotoneStar />
            My Reviews
          </Link>
        </div>
        <div>
          <Link>
            <AiFillIdcard />
            Billing
          </Link>
        </div>
      </Stack>

      <hr className="profile-nav_top_divider" />
      {role === "admin" && (
        <Stack
          gap={2}
          className="profile-nav_top d-flex p-4 justify-content-center"
        >
          <h3>Admin</h3>
          <div>
            <Link className="profile-nav_top_link">
              <FiEdit /> Manage tours
            </Link>
          </div>
          <div>
            <Link className="profile-nav_top_link">
              <HiUsers />
              Manage users
            </Link>
          </div>
          <div>
            <Link className="profile-nav_top_link">
              <AiTwotoneStar />
              Manage Reviews
            </Link>
          </div>
          <div>
            <Link className="profile-nav_top_link">
              <RiSuitcaseFill />
              Manage Booking
            </Link>
          </div>
        </Stack>
      )}
    </>
  );
};

export default ProfileNav;
