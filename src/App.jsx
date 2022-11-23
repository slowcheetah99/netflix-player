import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { GlobalStyles } from "./globalStyles";
import { UserProvider } from "./context/userContext";
import { useAuthListener } from "./hooks";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <GlobalStyles />
      <UserProvider>
        <div className="App">
          <Routes>
            <Route
              path={ROUTES.SIGN_IN}
              element={
                <IsUserRedirect
                  user={user}
                  loggedInPath={ROUTES.BROWSE}
                  path={ROUTES.SIGN_IN}
                />
              }
            />
            <Route
              path={ROUTES.SIGN_UP}
              element={
                <IsUserRedirect
                  user={user}
                  loggedInPath={ROUTES.BROWSE}
                  path={ROUTES.SIGN_UP}
                />
              }
            />
            <Route
              path={ROUTES.BROWSE}
              element={<ProtectedRoute user={user} path={ROUTES.BROWSE} />}
            />
            <Route
              path={ROUTES.BROWSE}
              element={
                <IsUserRedirect
                  user={user}
                  loggedInPath={ROUTES.BROWSE}
                  path={ROUTES.HOME}
                />
              }
            />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;