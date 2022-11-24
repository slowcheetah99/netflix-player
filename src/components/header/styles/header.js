import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";
import bg from "/images/misc/home-bg.jpg";
import { motion } from "framer-motion";
export const Background = styled(motion.section)`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => (src ? `/images/misc/${src}.jpg` : bg)});

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewport }) =>
      dontShowOnSmallViewport && `background: none;`}
  }
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => {
    active === "true" ? "700" : "normal";
  }};
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 15px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;

export const LogoutLink = styled.button`
  display: block;
  background-color: #e50914;
  width: fit-content;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 15px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 100px;
  margin-right: 40px;

  @media (min-width: 1440px) {
    height: 45px;
    width: 167px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  line-height: normal;
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallout = styled.p`
  color: #fff;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  font-size: 20px;
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: #fff;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

//to make props work on styled components, use state
export const SearchInput = styled.input`
  background-color: #444459;
  color: white;
  border: 1px solid #fff;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active === true ? "10px" : "0")};
  padding-inline: ${({ active }) => (active === true ? "10px" : "0")};
  padding: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0")};
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-right: 5px;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
    margin-block: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
