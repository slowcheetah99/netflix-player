import { motion } from "framer-motion";
import { Wrapper, Cinema } from "./styles";
import { useState } from "react";
const intro = {
  initial: {
    opacity: 0,
    pathLength: 0,
    stroke: "#1e1e1e",
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    stroke: "#D81F26",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },

  exit: {
    opacity: 0,
    pathLength: 0,
    stroke: "#ccc",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const exitAnim = {
  initial: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
export default function Loader() {
  const [out, setOut] = useState(false);
  return (
    <Wrapper
      initial="initial"
      animate="animate"
      exit="exit"
      variants={exitAnim}
      style={out ? { ...transitionOut } : ""}
    >
      <Cinema
        width="356"
        height="216"
        viewBox="0 0 356 216"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={intro}
          onAnimationComplete={() => {
            setOut((state) => !state);
          }}
          d="M8.62289 3.00014C3.12308 7 2.69636 16.257 3.12292 42.9998C3.12292 42.9998 2.62252 138 5.12266 167.5C7.6228 197 21.3598 209.503 50.6227 213H236.623C265.311 214.521 266.287 189 266.287 189V135.5L352.623 182.5V33.9999L266.287 82.9999C266.331 59.8583 266.122 44.5001 263.623 36.5C261.123 28.4999 250.274 8.13903 230.123 3L8.62289 3.00014Z"
        />
      </Cinema>
    </Wrapper>
  );
}

const transitionOut = {
  transformY: -200,
  opacity: 0,
};
