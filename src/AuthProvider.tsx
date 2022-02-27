import { FC, useState, createContext, useContext } from "react";
import { login } from "./containers/Login/actions";

interface Props {
  children: React.ReactNode;
}

interface Player {
  name: string;
  avatar: string;
  event: string;
}

interface AuthContextType {
  authenticated: Player | null;
  signIn: (username: string, password: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider: FC<Props> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<Player | null>(null);

  const signIn = (username: string, password: string, callback: VoidFunction) => {
    login(username, password).then((result) => {
      if (result.status === "success") {
        setAuthenticated(result.player);
        callback();
      }
    });
  };

  const signOut = (callback: VoidFunction) => {
    return callback();
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
