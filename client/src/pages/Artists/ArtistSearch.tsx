import { useEffect, useState } from "react";
import { apiRequest } from "../../api/apiClient";
import ArtistList from "./ArtistList";

function ArtistSearch() {
  const [artistsList, setArtists] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchArtists("rock, metal");
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const fetchArtists = async (query: string) => {
    try {
      const response = await apiRequest(
        `search?q=${encodeURIComponent(query)}&type=artist`,
      );
      if (response.ok) {
        const data = await response.json();
        setArtists(data.artists.items);
      } else {
        console.error(
          "Erreur lors de la récupération des artistes :",
          await response.json(),
        );
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des artistes :", error);
    }
  };

  const handleSearch = () => {
    if (searchQuery) {
      setArtists([]);
      fetchArtists(searchQuery);
    } else {
      console.error("Veuillez saisir un terme de recherche.");
    }
  };

  return (
    <>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Rechercher un artiste"
      />
      <button type="button" onClick={handleSearch}>
        Rechercher
      </button>
      <ArtistList artists={artistsList} />
    </>
  );
}

export default ArtistSearch;
