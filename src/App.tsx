import { Routes, Route, Navigate } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Login from "./containers/Login";
import Home from "./containers/Home";
import GameScreen from "./containers/GameScreen";

function App() {
  return (
    <div className="App">
      <div className="ui one column center aligned page grid">
        <div className="column twelve wide">
          <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logo" />
        </div>
      </div>
      <div className="main container">
        <Routes>
          <Route
            path="/games/:game"
            element={
              <AuthenticatedRoute>
                <GameScreen />
              </AuthenticatedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <AuthenticatedRoute>
                <Home />
              </AuthenticatedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
