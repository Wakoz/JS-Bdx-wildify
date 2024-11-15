import ArtistSearch from "./ArtistSearch";
// import "./Artists.css";

export default function Artist() {
  return (
    <>
      <img
        className="Picture"
        src="https://img.freepik.com/photos-gratuite/vue-dessus-du-concept-musique-ecouteurs_23-2148605798.jpg?t=st=1731103734~exp=1731107334~hmac=76719bd0db864b4850071f00a1c8c09d1e82e5128a358de7b045d38f82aa7540&w=1800"
        alt="musique"
      />
      <h1>Voici la selection des artistes :</h1>
      <ArtistSearch />
    </>
  );
}
