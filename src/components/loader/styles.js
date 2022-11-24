import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1e1e1e;
  display: grid;
  place-items: center;
`;

export const Cinema = styled(motion.svg)`
  width: 200px;
  height: 200px;
  stroke-width: 5px;
`;
