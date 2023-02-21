import { useAuth } from "./hooks/useAuth";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ redirectTo = "/", component: Component }) => {
  console.log(redirectTo, Component);
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
