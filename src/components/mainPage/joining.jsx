export function Joining() {
  return (
    <div className="container__row">
      <div className="container__col-2" style={{ paddingTop: "5%" }}>
        <h1
          className="container__title"
          // style={{ marginTop: "%" }}
        >
          Rejoindre Impact Sion
        </h1>
        <p className="container__text">
          Nous croyons que l’histoire de Jésus a le pouvoir de transformer des
          individus et des communautés entières. En travaillant avec des équipes
          spécialisées à travers le monde, nous sommes en mesure de continuer à
          réaliser des vidéos sur les livres de la Bible, les thèmes et les
          mots-clés de l’ensemble des Écritures pour notre public croissant.
        </p>
        <button className="join_button">Donner</button>
      </div>
      <div className="container__col-2">
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1652630864/sion-project/Capture_d_e%CC%81cran_2022-05-15_a%CC%80_16.07.35_i3tnvi.jpg"
          alt="join_img"
          className="join_img"
        />
      </div>
    </div>
  );
}
