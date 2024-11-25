import { useEffect } from "react";
import "../../App.css";
import SectionItems from "../../components/Section/SectionItems";
import GetPlaylists from "../../components/displayBlocks/MyPlaylistSearch";
import ImageBlockHome from "../../components/imageBlock/imageBlockHome";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const listLinks = [
    {
      title: "Artists",
      href: "/artists",
      imgSrc: "./src/assets/images/artistes.jpg",
    },
    {
      title: "Podcasts",
      href: "/podcasts",
      imgSrc: "./src/assets/images/podcast.jpg",
    },
  ];
  return (
    <main>
      <ImageBlockHome />
      <GetPlaylists />
      <SectionItems listLinkItems={listLinks} />
    </main>
  );
}
