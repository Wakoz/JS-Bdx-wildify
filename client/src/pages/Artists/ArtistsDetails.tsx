import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiRequest } from "../../api/apiClient";
import DisplayTracks from "../../components/DisplayTracks";

interface ArtistDetailsProps {
  id: string;
  name: string;
  images?: {
    url: string;
  }[];
  genres?: string[];
}
interface Album {
  id: string;
  name: string;
  images: {
    url: string;
  }[];
  release_date: string;
}
interface TopTrack {
  id: string;
  name: string;
  preview_url: string;
  album: {
    images: {
      url: string;
    }[];
  };
}

function ArtistDetails() {
  const { artistId } = useParams<{ artistId: string }>();
  const [artist, setArtist] = useState<ArtistDetailsProps | null>(null);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [topTracks, setTopTracks] = useState<TopTrack[]>([]);
  useEffect(() => {
    if (artistId) {
      Promise.all([
        apiRequest(`/artists/${artistId}`).then((response) => response.json()),
        apiRequest(`/artists/${artistId}/albums`).then((response) =>
          response.json(),
        ),
        apiRequest(`/artists/${artistId}/top-tracks?market=FR`).then(
          (response) => response.json(),
        ),
      ])
        .then(([artistData, albumsData, topTracksData]) => {
          setArtist(artistData);
          setAlbums(albumsData.items);
          setTopTracks(topTracksData.tracks);
        })
        .catch((error) =>
          console.error(
            "Erreur lors de la récupération des données de l'artiste :",
            error,
          ),
        );
    }
  }, [artistId]);

  if (!artist) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <div className="artist-details">
        <section className="background-image">
          <h1>{artist.name}</h1>
          {artist.images?.[2] && (
            <img src={artist.images[0].url} alt={artist.name} />
          )}
        </section>

        {artist.genres && <p>Genres : {artist.genres.join(", ")}</p>}

        {!!albums.length && (
          <div className="albums-section">
            <h2>Albums</h2>
            <div className="albums-list">
              {albums.map((album) => (
                <div key={album.id} className="album-item">
                  {album.images?.[0] && (
                    <img
                      src={album.images[0].url}
                      alt={album.name}
                      width="150"
                      height="150"
                    />
                  )}
                  <p>{album.name}</p>
                  <p>Date de sortie : {album.release_date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <DisplayTracks topTracks={topTracks} />
    </>
  );
}

export default ArtistDetails;
