// affichera la liste des concerts
import React, { useState, useEffect } from "react";
import Show from "./ShowCard";

const ShowList = () => {
  const [show, setShow] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/shows")
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, []);
};

export default ShowList;
