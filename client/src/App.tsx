import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1 className="logo">
          <Link to="/">Wildify</Link>
        </h1>
        <nav>
          <Link to="/artists">Artists</Link>
          <Link to="/podcasts">Podcasts</Link>
          <Link to="/concerts">Concerts</Link>
          <Link to="/coups-de-coeur">Coups de ❤️</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2024 Wildify</p>
        <p>Created by the Wild Code School students</p>
      </footer>
    </>
  );
}

export default App;
