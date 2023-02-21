import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user, token } = useSelector((store) => store.user);

  //? If no user than navigate to landing 
  //! LOGOUT USER ?
  if (!user || !token) {
    return <Navigate to="/landing" />;
  }

  //? If user is logged in than give access to other routes
  return children;
};

export default ProtectedRoute;
