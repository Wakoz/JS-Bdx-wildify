import type React from "react";
import "./ArtistItem.css";

interface ArtistItemProps {
  imageSrc: string;
  title: string;
}

const ArtistItem: React.FC<ArtistItemProps> = ({ imageSrc, title }) => (
  <article className="artist-item">
    <img
      src="./src/assets/images/artistes.jpg"
      alt={title}
      className="artist-image"
    />
    <figcaption>{title}</figcaption>
  </article>
);

export default ArtistItem;
