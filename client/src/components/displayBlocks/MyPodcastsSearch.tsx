import { useEffect, useState } from "react";
import MyBlocks from "./MyBlocks";

type PodcastItem = {
  id: number;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: {
    url: string;
  }[];
};

export default function PodcastSearch() {
  const [userPodcasts, setUserPodcasts] = useState<PodcastItem[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/userPodcasts`)
      .then((response) => response.json())
      .then((data) => {
        const episodes = data.items.map(
          (item: { episode: PodcastItem }) => item.episode,
        );
        setUserPodcasts(episodes);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.info(userPodcasts);
  return <MyBlocks items={userPodcasts} />;
}
