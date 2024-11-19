import "./style.css";

interface ArtistItemProps {
  title: string;
}

export default function ArtistItem({ title }: ArtistItemProps) {
  return (
    <article className="component-item">
      <a href="/artists">
        <img
          src="./src/assets/images/artistes.jpg"
          alt={title}
          className="component-image"
        />
        <figcaption>{title}</figcaption>
      </a>
    </article>
  );
}
