import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthentificationContext } from "./contexts/AuthenticationContext";

const PrivateRoute = () => {
  const { isConnected } = useContext(AuthentificationContext);

  return isConnected ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
