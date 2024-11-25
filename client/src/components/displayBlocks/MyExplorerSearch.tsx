import { useEffect, useState } from "react";
import { apiRequest } from "../../api/apiClient";
import MyBlocks from "./MyBlocks";

type CategoryItem = {
  genres?: string[];
  id: number;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: {
    url: string;
  }[];
};

export default function ExplorerSearch() {
  const [userCategory, SetUserCategories] = useState<CategoryItem[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiRequest("/browse/categories");
        const data = await response.json();

        const transformedCategorys: CategoryItem[] = data.categories.items.map(
          (item: {
            id: string;
            name: string;
            icons: { url: string }[];
          }) => ({
            id: item.id,
            name: item.name,
            external_urls: {
              spotify: `https://open.spotify.com/genre/${item.id}`,
            },
            images: item.icons.map((icon: { url: string }) => ({
              url: icon.url,
            })),
          }),
        );

        SetUserCategories(transformedCategorys);
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories :", error);
      }
    };

    fetchCategories();
  }, []);

  return <MyBlocks items={userCategory} />;
}
