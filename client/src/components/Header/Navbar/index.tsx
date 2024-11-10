import "./style.css";

interface NavbarProps {
  showLinks: boolean;
  setShowLinks: (value: boolean) => void;
}

function Navbar({ showLinks, setShowLinks }: NavbarProps) {
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <a href="/" className="logo-link">
        <p className="logo-text">WILDIFY</p>
        <img src="../src/assets/logo/logo.svg" alt="logo" />
      </a>
      <nav>
      <ul className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <li>
          <a href="/">Artistes</a>
        </li>
        <li>
          <a href="/">Podcasts</a>
        </li>
        <li>
          <a href="/">Concerts</a>
        </li>
        <li>
          <a href="/">Coups de ❤️</a>
        </li>
      </ul>
      <button type="button" className="navbar-burger" onClick={handleShowLinks}>
        <span className="burger-bar"> </span>
      </button>
    </nav>
    </>
  );
}

export default Navbar;
