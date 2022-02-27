import { Routes, Route } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <AuthenticatedRoute>
              <div>
                <h3>Protected route</h3>
              </div>
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <h3>Login Page</h3>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
