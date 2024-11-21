import "../../App.css";
import ConcertSearch from "../../components/displayBlocks/MyConcertsSearch";
import ImageBlockConcerts from "../../components/imageBlock/imageBlockConcert";

export default function Concerts() {
  return (
    <main>
      <ImageBlockConcerts />
      <ConcertSearch />
    </main>
  );
}
