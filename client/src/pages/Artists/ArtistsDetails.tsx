import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiRequest } from "../../api/apiClient";

interface ArtistDetailsProps {
  id: string;
  name: string;
  images?: {
    url: string;
  }[];
  genres?: string[];
}

function ArtistDetails() {
  const { artistId } = useParams<{ artistId: string }>();
  const [artist, setArtist] = useState<ArtistDetailsProps | null>(null);

  useEffect(() => {
    if (artistId) {
      apiRequest(`/artists/${artistId}`)
        .then((response) => response.json())
        .then((data) => setArtist(data))
        .catch((error) =>
          console.error("Erreur lors de la récupération de l'artiste :", error),
        );
    }
  }, [artistId]);

  if (!artist) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="artist-details">
      <h1>{artist.name}</h1>
      {artist.images?.[0] && (
        <img
          src={artist.images[0].url}
          alt={artist.name}
          width="200"
          height="200"
        />
      )}
      {artist.genres && <p>Genres : {artist.genres.join(", ")}</p>}
    </div>
  );
}

export default ArtistDetails;
