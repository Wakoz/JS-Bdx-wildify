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
        <section className="card">
          <article className="profile">
            <img
              src="../src/assets/photo-cards/Julien-photo.jpeg"
              alt="Profile"
              className="profilePicture"
            />
            <p className="name">Cartron</p>
            <p className="firstname">Julien</p>
          </article>
          <article>
            <h2 className="h2card">Bio</h2>
            <p className="biocard">X</p>
            <p className="biocard">X</p>
            <p className="biocard">X</p>
            <h2 className="h2card">Coup de coeur</h2>
            <ul className="ulcard">
              <li>X</li>
              <li>X</li>
              <li className="music">
                <a
                  href="https://open.spotify.com/intl-fr/track/7iD5t0YgWvIIrvZtw6IIxQ?si=4c3ff9e1b27845e6"
                  rel="noreferrer"
                  target="_blank"
                >
                  🎶🎶
                </a>
              </li>
            </ul>
          </article>
        </section>
        <section className="card">
          <article className="profile">
            <img
              src="../src/assets/photo-cards/Thomas-photo.jpg"
              alt="Profile"
              className="profilePicture"
            />
            <p className="name">Humbert</p>
            <p className="firstname">Thomas</p>
          </article>
          <article>
            <h2 className="h2card">Bio</h2>
            <p className="biocard">X</p>
            <p className="biocard">X</p>
            <p className="biocard">X</p>
            <h2 className="h2card">Coup de coeur</h2>
            <ul className="ulcard">
              <li>Tame Impala</li>
              <li>Rock Indé</li>
              <li className="music">
                <a
                  href="https://open.spotify.com/intl-fr/track/4t6vrJg7GcUELCAxHX1z5W?si=e1b03e29e5154b7b"
                  rel="noreferrer"
                  target="_blank"
                >
                  🎶Half full glass of wine🎶
                </a>
              </li>
            </ul>
          </article>
        </section>
        <section className="card">
          <article className="profile">
            <img
              src="../src/assets/photo-cards/Cecile-photo.jpeg"
              alt="Profile"
              className="profilePicture"
            />
            <p className="name">Puyol</p>
            <p className="firstname">Cecile</p>
          </article>
          <article>
            <h2 className="h2card">Bio</h2>
            <p className="biocard">Y’a pas que le code dans la vie 😉</p>
            <p className="biocard">
              Bercée par la chanson française, j’ai découvert plus tard la pop
              anglo-saxonne avec auparavant un passage adolescent par les boys
              band !
            </p>
            <p className="biocard">
              Aujourd’hui mes playlists sont variées du pop-rock à l’électro
              avec un brin de hip hop ou encore de la chanson. Mon coup de coeur
              est plutôt folk aujourd’hui avec le groupe Herman Düne. Vu en
              concert de nombreuses fois c’est du bonbon pour les oreilles et le
              coeur !
            </p>
            <h2 className="h2card">Coup de coeur</h2>
            <ul className="ulcard">
              <li>Herman Düne</li>
              <li>folk</li>
              <li className="music">
                <a
                  href="https://open.spotify.com/intl-fr/track/3OAYeGzhHTbLZTnpcSM1yN?si=7ab4e42fb4984ee9"
                  rel="noreferrer"
                  target="_blank"
                >
                  🎶My home is nowhere without you🎶
                </a>
              </li>
            </ul>
          </article>
        </section>
        <section className="card">
          <article className="profile">
            <img
              src="../src/assets/photo-cards/Raph-photo.jpg"
              alt="Profile"
              className="profilePicture"
            />
            <p className="name">Streiff</p>
            <p className="firstname">Raphaël</p>
          </article>
          <article>
            <h2 className="h2card">Bio</h2>
            <p className="biocard">
              Hello ! Moi c'est Raph', Je suis un épicurien :
            </p>
            <p className="biocard">
              j'aime les bon produits, les bon films, la musique electro et bien
              sur l'informatique.
            </p>
            <p className="biocard">
              J'adore bidouiller ce que je peux sur un ordinateur le tout avec
              une bonne playlist dans les oreilles !
            </p>
            <h2 className="h2card">Coup de coeur</h2>
            <ul className="ulcard">
              <li>NTO</li>
              <li>techno</li>
              <li className="music">
                <a
                  href="https://open.spotify.com/intl-fr/track/12LOYGBr0T0IqyuhEILYFh?si=f5f909ca193941fa"
                  rel="noreferrer"
                  target="_blank"
                >
                  🎶La clé des champs🎶
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
