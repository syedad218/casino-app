import { Routes, Route, Navigate } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Login from "../Login";
import Home from "../Home";
import GameScreen from "../GameScreen";
import logo from "../../logo.svg";
import { routeTemplates } from "./routes";

function App() {
  return (
    <div className="App">
      <div className="ui one column center aligned page grid">
        <div className="column twelve wide">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="main container">
        <Routes>
          <Route
            path={routeTemplates.game}
            element={
              <AuthenticatedRoute>
                <GameScreen />
              </AuthenticatedRoute>
            }
          />
          <Route path={routeTemplates.login} element={<Login />} />
          <Route
            path={routeTemplates.home}
            element={
              <AuthenticatedRoute>
                <Home />
              </AuthenticatedRoute>
            }
          />
          <Route path={routeTemplates.wildcard} element={<Navigate to={routeTemplates.home} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
