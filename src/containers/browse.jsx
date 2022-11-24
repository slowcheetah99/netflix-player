import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import Fuse from "fuse.js";
import { UserContext } from "../context/userContext";
import { Header, Card, Player } from "../components";
import * as ROUTES from "../constants/routes";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "../containers/footer";
import logo from "/images/misc/logo.svg";
import { motion, useScroll, useTransform } from "framer-motion";

export function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  // const userInfo = firebase.auth().currentUser;
  const { profile: user, setProfile } = useContext(UserContext);
  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);
  // const userInfo = firebase.auth().currentUser;

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      return setSlideRows(results);
    }
    return setSlideRows(slides[category]);
  }, [searchTerm]);

  const { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  async function handleSignOut(e) {
    e.preventDefault();
    await firebase.auth().signOut();
  }
  //replace user below with userInfo after completing the project
  return user ? (
    <>
      <Header src="joker1" dontShowOnSmallViewport style={{ y }}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix Home" />
            <Header.Link
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.Link>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={handleSignOut}>Sign out</Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallout>Watch Joker Now</Header.FeatureCallout>
          <Header.Text>
            Forever alone in a crowd , failed comedian Arthur Fleck seeks
            connection as he roams the streets of Gotham City. Arthur wears two
            masks, -- the one he paints for his day job as a clown, and the
            guise he projects in a futile attempt to feel like he's part of the
            world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <Card.Group>
        {slideRows.map((slide) => (
          <Card key={`${category}-${slide.title.toLowerCase()}`}>
            <Card.Title>{slide.title}</Card.Title>
            <Card.Entities>
              {slide.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
