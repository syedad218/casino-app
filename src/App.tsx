import { Routes, Route } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Login from "./containers/Login";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <div className="ui one column center aligned page grid">
        <div className="column twelve wide">
          <img src="images/logo.svg" alt="logo" />
        </div>
      </div>
      <div className="main container">
        <Routes>
          <Route
            path="/"
            element={
              <AuthenticatedRoute>
                <Home />
              </AuthenticatedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
