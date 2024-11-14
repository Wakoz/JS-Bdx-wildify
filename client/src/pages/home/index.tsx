import "../../App.css";
import GetPlaylists from "../../components/displayBlocks/MyPlaylistSearch";
import PodcastSearch from "../../components/displayBlocks/MyArtistsSearch";

export default function Home() {
  return (
    <>
      <main className="home">
        <GetPlaylists />
        <PodcastSearch />
      </main>
    </>
  );
}
