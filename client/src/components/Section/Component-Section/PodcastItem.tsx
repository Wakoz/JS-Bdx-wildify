import "./style.css";

interface PodcastItemProps {
  title: string;
}

export default function PodcastItem({ title }: PodcastItemProps) {
  return (
    <article className="component-item">
      <a href="/podcasts">
      <img
        src="./src/assets/images/podcast.jpg"
        alt={title}
        className="component-image"
      />
      <figcaption>{title}</figcaption>
      </a>
    </article>
  );
};