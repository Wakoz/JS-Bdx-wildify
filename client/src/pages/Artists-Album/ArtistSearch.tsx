import { useState } from "react";
import ArtistList from "./ArtistList";

function ArtistSearch() {
  const [artistsList, setArtists] = useState([]);

  const getArtists = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/artists`)
      .then((response) => response.json())
      .then((data) => {
        setArtists(data.results);
      });
  };
  return (
    <div className="App">
      <button type="button" onClick={getArtists}>
        Get artists
      </button>
      <ArtistList artists={artistsList} />
    </div>
  );
}

export default ArtistSearch;
