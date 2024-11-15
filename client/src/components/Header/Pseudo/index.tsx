import "./style.css";
import { useEffect, useState } from "react";

interface PseudoProps {
  display_name: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
}

function Pseudo() {
  const [pseudoData, setPseudoData] = useState<PseudoProps | null>(null);
  const getPseudo = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/pseudo`)
      .then((response) => response.json())
      .then((data) => {
        setPseudoData(data.results[0]);
      });
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getPseudo();
  }, []);

  return (
    <aside className="pseudo">
      {pseudoData ? (
        <>
          <img src={pseudoData.images[0].url} alt="profile_picture" />
          <p>{pseudoData.display_name}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </aside>
  );
}

export default Pseudo;
