import "./style.css";

function Cards() {
  return (
    <>
      <section className="photobackground">
        <section className="card">
          <article className="profile">
            <img
              src="../src/assets/photo-cards/mathieuC1.JPG"
              alt="Profile"
              className="profilePicture"
            />
            <p className="name">Cahuzac</p>
            <p className="firstname">Mathieu</p>
          </article>
          <article>
            <h2 className="h2card">Bio</h2>
            <p className="biocard">
              J'ai découvert le monde du Métal à l'age de 11ans en fouillant
              dans les cassettes de mon père.
            </p>
            <p className="biocard">
              21 ans plus tard mon éventail musical s'est bien élargi : du
              classique à l'électro, en passant par le blues et le rap des
              années 90.
            </p>
            <p className="biocard">
              Cependant, je reviens toujours à l'énergie brute du Métal et de
              ses multiples ramifications.
            </p>
            <h2 className="h2card">Coup de coeur</h2>
            <ul className="ulcard">
              <li>Motörhead</li>
              <li>Heavy metal</li>
              <li className="music">
                <a
                  href="https://open.spotify.com/intl-fr/track/7iD5t0YgWvIIrvZtw6IIxQ?si=4c3ff9e1b27845e6"
                  rel="noreferrer"
                  target="_blank"
                >
                  🎶Hellraiser🎶
                </a>
              </li>
            </ul>
          </article>
        </section>
      </section>
    </>
  );
}

export default Cards;
