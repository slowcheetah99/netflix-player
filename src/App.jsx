import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { GlobalStyles } from "./globalStyles";
import { UserProvider } from "./context/userContext";
import { useAuthListener } from "./hooks";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { Browse, Home } from "./pages";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader } from "./components";
function App() {
  const { user } = useAuthListener();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <AnimatePresence initial={false} mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path={ROUTES.SIGN_UP}
              element={<IsUserRedirect user={user} />}
            />
            <Route
              path={ROUTES.SIGN_IN}
              element={<IsUserRedirect user={user} />}
            />
            <Route element={<ProtectedRoute user={user} />}>
              <Route path={ROUTES.BROWSE} element={<Browse />} />
              <Route path={ROUTES.HOME} element={<Home />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </UserProvider>
    </>
  );
}

export default App;

{
  /* <Route
              path={ROUTES.SIGN_IN}
              element={
                <IsUserRedirect
                  user={user}
                  loggedInPath={ROUTES.BROWSE}
                  path={ROUTES.SIGN_IN}
                />
              }
            /> */
}
{
  /* <Route
              path={ROUTES.SIGN_UP}
              element={
                <IsUserRedirect
                  user={user}
                  loggedInPath={ROUTES.BROWSE}
                  path={ROUTES.SIGN_UP}
                />
              }
            /> */
}

{
  /* <Route
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
            /> */
}
