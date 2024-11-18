import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Main2ndPart from "./components/Main2ndPart/Main2ndPart";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <header>
        <h1 className="logo">Wildify</h1>
      </header>
      <main>
        <Main2ndPart />
        <ArtistAlbum />
      </main>
    </>
  );
}

export default App;
