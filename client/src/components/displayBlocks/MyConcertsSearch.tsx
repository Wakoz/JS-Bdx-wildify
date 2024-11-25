import { useEffect, useState } from "react";
import { fetchData } from "../../Utils/fetchUtils";
import MyBlocks from "./MyBlocks";
import type { DisplayItem } from "./types";

export default function ConcertSearch() {
  const [userConcerts, setUserConcerts] = useState<DisplayItem[]>([]);

  useEffect(() => {
    const fetchConcerts = async () => {
      const data = await fetchData("/me/shows", (responseData: unknown) => {
        if (
          typeof responseData === "object" &&
          responseData !== null &&
          "items" in responseData
        ) {
          const typedResponse = responseData as {
            items: { show: DisplayItem }[];
          };

          if (Array.isArray(typedResponse.items)) {
            return typedResponse.items.map((item) => item.show);
          }
        }
        return [];
      });

      if (data) {
        setUserConcerts(data);
      }
    };

    fetchConcerts();
  }, []);

  return <MyBlocks items={userConcerts} />;
}
