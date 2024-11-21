import { useEffect, useState } from "react";
import { apiRequest } from "../../api/apiClient";
import MyBlocks from "./MyBlocks";

type PlaylistItem = {
  id: number;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: {
    url: string;
  }[];
};

export default function GetPlaylists() {
  const [userPlaylists, setUserPlaylists] = useState<PlaylistItem[]>([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await apiRequest("/me/playlists");
        const data = await response.json();
        setUserPlaylists(data.items);
      } catch (error) {
        console.error("Erreur lors de la récupération des artistes :", error);
      }
    };

    fetchPlaylists();
  }, []);

  return <MyBlocks items={userPlaylists} />;
}
