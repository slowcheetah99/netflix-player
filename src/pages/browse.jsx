import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks/";
import { SelectionMap } from "../utils";
import { motion } from "framer-motion";
import { fadeOut } from "../constants/framerVariants";
export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = SelectionMap({ series, films });
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeOut}
    >
      <BrowseContainer slides={slides} />;
    </motion.div>
  );
}
