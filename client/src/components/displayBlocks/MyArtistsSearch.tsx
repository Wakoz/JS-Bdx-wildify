import { useEffect, useState } from "react";
import { apiRequest } from "../../api/apiClient";
import MyBlocks from "./MyBlocks";

type ArtistItem = {
  id: number;
  name: string;
  genres: string[];
  external_urls: {
    spotify: string;
  };
  images: {
    url: string;
  }[];
};

export default function ArtistSearch() {
  const [userArtists, setUserArtists] = useState<ArtistItem[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await apiRequest("/me/top/artists");
        const data = await response.json();
        setUserArtists(data.items);
      } catch (error) {
        console.error("Erreur lors de la récupération des artistes :", error);
      }
    };

    fetchArtists();
  }, []);

  return <MyBlocks items={userArtists} />;
}
