import "./style.css";
import { useCallback, useEffect, useState } from "react";

interface PseudoProps {
  display_name: string;
  images?: {
    height: number;
    url: string;
    width: number;
  }[];
}

function Pseudo() {
  const [pseudoData, setPseudoData] = useState<PseudoProps | null>(null);
  const getPseudo = useCallback(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/pseudo`)
      .then((response) => response.json())
      .then((data) => {
        setPseudoData(data.results[0]);
      });
  }, []);

  useEffect(() => {
    getPseudo();
  }, [getPseudo]);

  return pseudoData ? (
    <figure className="pseudo">
      <img
        src={
          pseudoData.images?.[0]?.url || "../src/assets/pseudo/logo-logout.svg"
        }
        alt="profile_picture"
      />
      <figcaption>{pseudoData.display_name}</figcaption>
    </figure>
  ) : (
    <p>Loading...</p>
  );
}

export default Pseudo;
