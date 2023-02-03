import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);

  //? If no user than navigate to landing
  if (!user) {
    return <Navigate to="/landing" />;
  }

  //? If user is logged in than give access to other routes
  return children;
};

export default ProtectedRoute;
