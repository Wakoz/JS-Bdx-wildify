import "../../App.css";
import GetPlaylists from "../../components/displayBlocks/MyPlaylistSearch";
import ImageBlockPodcasts from "../../components/imageBlock/imageBlockPodcasts";

export default function Podcasts() {
  return (
    <main>
      <ImageBlockPodcasts />
      <GetPlaylists />
    </main>
  );
}
