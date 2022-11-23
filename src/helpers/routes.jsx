import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { Home, Signin, Signup, Browse } from "../pages";
export const IsUserRedirect = ({
  user,
  loggedInPath,
  children,
  ...restProps
}) => {
  const { slug } = useParams();
  return (
    <Routes>
      <Route
        {...restProps}
        render={() => {
          if (!user) {
            return children;
          }
          if (user) {
            return <Navigate to={{ pathname: loggedInPath }} />;
          }
          return null;
        }}
        element={
          slug === "/" ? <Home /> : slug === "/signin" ? <Signup /> : <Signin />
        }
      />
    </Routes>
  );
};

export const ProtectedRoute = ({ user, children, ...restProps }) => {
  return (
    <Routes>
      <Route
        {...restProps}
        render={({ location }) => {
          if (user) {
            return children;
          }
          if (!user) {
            return (
              <Navigate
                to={{ pathname: "signin", state: { from: location } }}
              />
            );
          }
          return null;
        }}
        element={<Browse />}
      />
    </Routes>
  );
};
