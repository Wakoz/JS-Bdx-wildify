import "./Main2ndPart.css";
import ArtistItem from "./ArtistItem";
import PodcastItem from "./PodcastItem";

function Main2ndPart() {
  return (
    <section className="playlists-section">
      <ArtistItem imageSrc="artistes.jpg" title="Mes artistes" />
      <PodcastItem imageSrc="podcast.jpg" title="Mes podcast" />
    </section>
  );
}

export default Main2ndPart;
