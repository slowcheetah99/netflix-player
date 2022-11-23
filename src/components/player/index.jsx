import { useState, useContext, createContext } from "react";
import { Button, Overlay, Inner, Container, Close } from "./styles/player";
import ReactDOM from "react-dom";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return (
    <Button {...restProps} onClick={() => setShowPlayer(!showPlayer)}>
      Play
    </Button>
  );
};

Player.Video = function PlayerVideo({ children, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
          <Inner>
            <video id="netflix-player" controls>
              <source src="/videos/bunny.mp4" type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};
