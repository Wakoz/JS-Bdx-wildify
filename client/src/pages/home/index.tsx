import "../../App.css";
import PodcastSearch from "../../components/displayBlocks/MyArtistsSearch";
import GetPlaylists from "../../components/displayBlocks/MyPlaylistSearch";

export default function Home() {
	return (
		<main>
			<GetPlaylists />
			{/* <PodcastSearch /> */}
		</main>
	);
}
