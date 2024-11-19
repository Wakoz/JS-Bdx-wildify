// affichera les détails d’un concert(titre, date, lieu, artistes)
import React from "react";
import { Show } from "../../types";

const ShowCard = () => {
  return (
    <article>
      <h2>{Show.title}</h2>
      <p>Date: {Show.date}</p>
      <p>Place: {Show.venue}</p>
      <p>Artits: {Show.artists.join(", ")}</p>
    </article>
  );
};

export default ShowCard;
