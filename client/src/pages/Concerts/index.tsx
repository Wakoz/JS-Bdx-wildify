import { useEffect } from "react";
import "../../App.css";
import ConcertSearch from "../../components/displayBlocks/MyConcertsSearch";
import ImageBlockConcerts from "../../components/imageBlock/imageBlockConcert";

export default function Concerts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ImageBlockConcerts />
      <ConcertSearch />
    </main>
  );
}
