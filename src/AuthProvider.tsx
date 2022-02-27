import { FC, useState, createContext, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

interface AuthContextType {
  authenticated: boolean;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider: FC<Props> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const signIn = (newUser: string, callback: VoidFunction) => {
    return callback();
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
