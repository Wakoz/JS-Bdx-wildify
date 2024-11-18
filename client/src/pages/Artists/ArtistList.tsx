type Artist = {
  id: string;
  name: string;
  images?: { url: string }[];
  genres?: string[];
};

type ArtistListProps = {
  artists: Artist[];
};

const ArtistList = ({ artists }: ArtistListProps) => {
  return (
    <div className="artist-list">
      {artists.slice(0, 4).map((artist) => (
        <div key={artist.id} className="artist-card">
          <div className="artist-image-container">
            {artist.images && artist.images.length > 0 ? (
              <img
                className="artist-image"
                src={artist.images[0].url}
                alt={artist.name}
              />
            ) : (
              <div className="artist-image-placeholder">
                Image non disponible
              </div>
            )}
          </div>
          <h3 className="artist-name">{artist.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ArtistList;
