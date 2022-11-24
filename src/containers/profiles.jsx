import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "/images/misc/logo.svg";
export function SelectProfileContainer({ user, setProfile }) {
  return user.displayName ? (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix Home" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item>
            <Profiles.User
              onClick={() => {
                setProfile({ displayName: user.name, photoURL: user.photoURL });
              }}
            >
              <Profiles.Picture src={user.photoURL} alt="user profile" />
              <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    </>
  ) : (
    <h1>Loading</h1>
  );
}
