import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <div className="footer__container">
      <div className="container__col-2">
        <h2 className="container__title">Rester informé</h2>
        <p className="container__text">
          Des vidéos animées et des ressources gratuites pour aider les
          personnes à comprendre que la Bible est une seule et même histoire
          menant à Jésus.
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
      <div className="container__col-3">
        <h2 className="container__title">Bonus</h2>
      </div>
      <div className="container__col-3">
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1652614128/sion-project/logo-fit_svqrnm.png"
          alt="sion-logo"
          className="footer__logo"
        />
        <p className="container__text">
          Aider les personnes à vivre la Bible comme une seule et même histoire
          menant à Jésus
        </p>
        <div className="footer__links">
          <FontAwesomeIcon icon={faFacebookF} size={"lg"} />
          <FontAwesomeIcon icon={faYoutube} size={"lg"} />
          <FontAwesomeIcon icon={faWhatsapp} size={"lg"} />
        </div>
      </div>
    </div>
  );
}
