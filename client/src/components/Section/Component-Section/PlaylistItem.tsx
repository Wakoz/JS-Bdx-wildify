import "./style.css";

interface PlaylistItemProps {
  title: string;
}

export default function PlaylistItem({ title }: PlaylistItemProps) {
  return (
    <article className="component-item">
      <a href="/">
        <img
          src="./src/assets/images/playlist.jpg"
          alt={title}
          className="component-image"
        />
        <figcaption>{title}</figcaption>
      </a>
    </article>
  );
}
