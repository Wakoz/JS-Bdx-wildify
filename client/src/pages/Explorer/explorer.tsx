import { useEffect } from "react";
import ExplorerSearch from "../../components/displayBlocks/MyExplorerSearch";
import ImageBlockConcerts from "../../components/imageBlock/imageBlockConcert";

export default function Explorer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ImageBlockConcerts />
      <ExplorerSearch />
    </main>
  );
}
