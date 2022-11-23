import { Navigate, useParams, Outlet } from "react-router-dom";
import { Signin, Signup } from "../pages";

export function IsUserRedirect({ user }) {
  const { pathname } = window.location;
  return user ? (
    <Navigate to="/browse" />
  ) : pathname === "/signin" ? (
    <Signin />
  ) : (
    <Signup />
  );
}
//

export function ProtectedRoute({ user }) {
  return user ? <Outlet /> : <Navigate to="/signin" />;
}

// export const ProtectedRoute = ({ user, children, ...restProps }) => {
//   return (
//     <Routes>
//       <Route
//         {...restProps}
//         render={({ location }) => {
//           if (user) {
//             return children;
//           }
//           if (!user) {
//             return (
//               <Navigate
//                 to={{ pathname: "signin", state: { from: location } }}
//               />
//             );
//           }
//           return null;
//         }}
//         element={<Browse />}
//       />
//     </Routes>
//   );
// };

// export const IsUserRedirect = ({
//   user,
//   loggedInPath,
//   children,
//   ...restProps
// }) => {
//   const { slug } = useParams();
//   return (
//     <Routes>
//       <Route
//         {...restProps}
//         render={() => {
//           if (!user) {
//             return children;
//           }
//           if (user) {
//             return <Navigate to={{ pathname: loggedInPath }} />;
//           }
//           return null;
//         }}
//         element={
//           slug === "/" ? <Home /> : slug === "/signin" ? <Signin /> : <Signup />
//         }
//       />
//     </Routes>
//   );
// };
