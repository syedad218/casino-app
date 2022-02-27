import React, { FC, useState, createContext, useContext, useEffect } from "react";
import { logout } from "./containers/Home/actions";
import { login } from "./containers/Login/actions";

interface Props {
  children: React.ReactNode;
}

export interface Player {
  name: string;
  avatar: string;
  event: string;
  username: string;
}

interface AuthContextType {
  authenticated: Player | null;
  signIn: (username: string, password: string, callback: any) => void;
  signOut: (username: string, callback: any) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider: FC<Props> = ({ children }) => {
  const prevAuth = localStorage.getItem("authenticated");
  const userDetails = JSON.parse(prevAuth!);
  const [authenticated, setAuthenticated] = useState<Player | null>(() => userDetails);

  useEffect(() => {
    if (authenticated) {
      localStorage.setItem("authenticated", JSON.stringify(authenticated));
    }
  }, [authenticated]);

  const signIn = (username: string, password: string, callback: any) => {
    login(username, password).then((result) => {
      if (!result) return;
      else if (result?.status === "success") {
        setAuthenticated(result.player);
      }
      callback(result);
    });
  };

  const signOut = (username: string, callback: any) => {
    logout(username).then((response) => {
      if (!response) return;
      else if (response?.status === "success") {
        setAuthenticated(null);
      }
      callback(response);
    });
  };

  const initialValue = { authenticated, signIn, signOut };

  return <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>;
};

/** utility function to use the authentication context inside the provider wrapped components */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
