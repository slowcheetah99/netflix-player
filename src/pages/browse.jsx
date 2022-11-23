import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks/";
import { SelectionMap } from "../utils";
export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = SelectionMap({ series, films });
  return <BrowseContainer slides={slides} />;
}
