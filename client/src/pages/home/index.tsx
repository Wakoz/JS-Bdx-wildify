import "../../App.css";
import GetPlaylists from "../../components/displayBlocks/MyPlaylistSearch";
import ImageBlock from "../../components/imageBlock/imageBlock";

export default function Home() {
  return (
    <main>
      <ImageBlock />
      <GetPlaylists />
    </main>
  );
}
