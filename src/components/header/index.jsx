import { Link as ReachRouterLink } from "react-router-dom";
import searchIcon from "/images/icons/search.png";
import { useState } from "react";

import {
  Background,
  Logo,
  Container,
  ButtonLink,
  Group,
  Text,
  Link,
  PlayButton,
  Feature,
  FeatureCallout,
  Search,
  SearchIcon,
  SearchInput,
  Picture,
  Dropdown,
  Profile,
  LogoutLink,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : { children };
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Link = function HeaderLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src={searchIcon} alt="search icon" />
      </SearchIcon>
      <SearchInput
        placeholder="search films, movies and series"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        active={searchActive}
      />
    </Search>
  );
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ to, ...restProps }) {
  return <ButtonLink to={to} {...restProps} />;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallout = function HeaderFeatureCallout({
  children,
  ...restProps
}) {
  return <FeatureCallout {...restProps}>{children}</FeatureCallout>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture src={`/images/users/${src}.png`} {...restProps} />;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.LogoutLink = function HeaderLogoutLink({ children, ...restProps }) {
  return <LogoutLink {...restProps}>{children}</LogoutLink>;
};
