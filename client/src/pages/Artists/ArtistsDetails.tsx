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
        apiRequest(`/artists/${artistId}/albums`).then((response) => response.json()),
        apiRequest(`/artists/${artistId}/top-tracks?market=FR`).then((response) => response.json())
      ])
        .then(([artistData, albumsData, topTracksData]) => {
          setArtist(artistData);
          setAlbums(albumsData.items);
          setTopTracks(topTracksData.tracks);
        })
        .catch((error) =>
          console.error("Erreur lors de la récupération des données de l'artiste :", error),
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

      {!!topTracks.length && (
        <div className="top-tracks-section">
          <h2>Top Titres</h2>
          <div className="top-tracks-list">
            {topTracks.map((track) => (
              <div key={track.id} className="track-item">
                {track.album.images?.[0] && (
                  <img
                    src={track.album.images[0].url}
                    alt={track.name}
                    width="150"
                    height="150"
                  />
                )}
                <p>{track.name}</p>
                {track.preview_url && (
                  <audio controls>
                    <source src={track.preview_url} type="audio/mpeg" />
                    <track kind="captions" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtistDetails;
