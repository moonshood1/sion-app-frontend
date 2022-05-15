import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
  return (
    <div className="header__container">
      <img
        src="https://res.cloudinary.com/dhc0siki5/image/upload/v1652614128/sion-project/logo-fit_svqrnm.png"
        alt="sion-logo"
        className="footer__logo"
      />
      <div className="header__links">
        <a href="#" className="header__title left">
          Francais
        </a>
        <a href="#" className="header__title right">
          Visit Sion in English
        </a>
        <div className="header__links-p">
          <FontAwesomeIcon icon={faBars} size={"2x"} />
        </div>
      </div>
    </div>
  );
}
