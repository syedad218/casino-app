import { FC, useState } from "react";
import { useAuth } from "../../AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const location: any = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e: any) => {
    console.log("username:", username);
    console.log("password:", password);

    auth.signIn(username, password, () => {
      navigate(from, { replace: true });
    });

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
      </div>
    </div>
  );
};

export default Login;
