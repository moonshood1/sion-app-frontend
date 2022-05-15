export function Welcome() {
  return (
    <div className="card__container blue">
      <div className="container__col-2">
        <h1 className="container__title">
          Bienvenue à Sion (TV, magazine, Atelier)
        </h1>
        <p className="container__text">
          Abonnez-vous à notre newsletter pour les dernières vidéos et mises à
          jour en français.
        </p>
        <div className="container__input-container">
          <input
            type="text"
            className="container__input-input"
            placeholder="Votre email"
          />
          <button className="container__input-button">S'abonner</button>
        </div>
      </div>
      <div className="container__col-2">
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1652626976/sion-project/Capture_d_e%CC%81cran_2022-05-15_a%CC%80_15.01.42_wyjzpb.jpg"
          alt="welcome_thumbnail"
          className="card__img"
        />
      </div>
    </div>
  );
}
