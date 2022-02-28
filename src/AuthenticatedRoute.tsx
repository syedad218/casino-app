import { FC } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

interface Props {
  children: JSX.Element;
}

const AuthenticatedRoute: FC<Props> = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();
  if (!auth.authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default AuthenticatedRoute;
