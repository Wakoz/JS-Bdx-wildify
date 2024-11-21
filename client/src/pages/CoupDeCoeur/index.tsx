import { useEffect } from "react";
import "../../App.css";
import ImageBlockTeam from "../../components/imageBlock/imageBlockTeam";

export default function CoupDeCoeur() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ImageBlockTeam />;
}
