import "./style.css";

function Searchbar() {
  return (
    <form action="">
      <input
        type="search"
        placeholder="Recherche..."
        value=""
      />
      <button type="submit" className="search-button">Valider</button>
    </form>
  );
}

export default Searchbar;
