import { useEffect, useState } from "react";
import { useAuth } from "../App/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const location: any = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();
  const from = location.state?.from?.pathname || "/";

  /** handle already logged-in users by redirecting to home screen */
  useEffect(() => {
    if (auth.authenticated) {
      navigate(from, { replace: true });
    }
  }, [auth, from, navigate]);

  const loginCallback = (result: any) => {
    if (result?.status === "success") {
      navigate(from, { replace: true });
    } else if (result?.status === "fail") {
      setError(result?.error);
    }
  };

  const handleSubmit = (e: any) => {
    auth.signIn(username, password, loginCallback);

    e.preventDefault();
  };

  return (
    <div className="login" style={{ display: "block" }}>
      <div className="ui grid centered">
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <div className="required field">
              <div className="ui icon input">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <i className="user icon"></i>
              </div>
            </div>
            <div className="required field">
              <div className="ui icon input">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="lock icon"></i>
              </div>
            </div>
            <div className="field">
              <div className="ui icon input">
                <input type="submit" value="Login" />
                <i className="right chevron icon"></i>
              </div>
            </div>
          </div>
        </form>
        {error && (
          <div className="twelve wide column hidden">
            <div className="ui negative message">
              <i className="close icon" onClick={() => setError("")}></i>
              <div className="header">Login failed!</div>
              <p>{error.charAt(0).toUpperCase() + error.slice(1)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
