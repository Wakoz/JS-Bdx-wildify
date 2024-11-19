import "./SectionItems.css";
import ArtistItem from "./Component-Section/ArtistItem";
import PodcastItem from "./Component-Section/PodcastItem";

function SectionItems() {
  return (
    <section className="playlists-section">
      <ArtistItem title="Mes artistes" />
      <PodcastItem title="Mes podcasts" />
      {/* <PlaylistItem title="Mes playlists" /> */}
    </section>
  );
}

export default SectionItems;
