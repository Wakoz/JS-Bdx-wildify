import "../../App.css";
import SectionItems from "../../components/Section/SectionItems";
import GetPlaylists from "../../components/displayBlocks/MyPlaylistSearch";
import ImageBlockHome from "../../components/imageBlock/imageBlockHome";

export default function Home() {
  return (
    <main>
      <ImageBlockHome />
      <GetPlaylists />
      <SectionItems />
    </main>
  );
}
