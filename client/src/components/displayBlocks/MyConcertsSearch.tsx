import { useEffect, useState } from "react";
import MyBlocks from "./MyBlocks";

type ConcertItem = {
  id: number;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: {
    url: string;
  }[];
};

export default function ConcertSearch() {
  const [userConcerts, setUserConcerts] = useState<ConcertItem[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/userConcerts`)
      .then((response) => response.json())
      .then((data) => {
        const shows = data.items.map(
          (item: { show: ConcertItem }) => item.show,
        );
        setUserConcerts(shows);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <MyBlocks items={userConcerts} />;
}
