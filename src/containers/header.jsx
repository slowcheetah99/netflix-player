import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { useAuthListener } from "../hooks";
import { FirebaseContext } from "../context/firebase";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export function HeaderContainer({ children }) {
  const { user } = useAuthListener();
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  async function handleSignOut(e) {
    e.preventDefault();
    await firebase.auth().signOut();
  }

  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="home" />
        {!user ? (
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
        ) : (
          <Header.LogoutLink onClick={handleSignOut}>
            Sign out
          </Header.LogoutLink>
        )}
      </Header.Frame>
      {children}
    </Header>
  );
}
