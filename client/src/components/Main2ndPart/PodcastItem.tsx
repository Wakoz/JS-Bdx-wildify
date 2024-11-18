import type React from "react";
import "./PodcastItem.css";

interface PodcastItemProps {
  imageSrc: string;
  title: string;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ title }) => (
  <article className="podcast-item">
    <img
      src="./src/assets/images/podcast.jpg"
      alt={title}
      className="podcast-image"
    />
    <figcaption>{title}</figcaption>
  </article>
);

export default PodcastItem;
