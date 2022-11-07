import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { postSubscrire } from "../api/subscribeEmail";
import { toast } from "react-toastify";

export function Footer() {
  const [email, setEmail] = useState("");
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const sendEmailToSubscribe = async () => {
    if (!email.match(mailFormat)) {
      return toast.error("Veuillez saisir une adresse email valide ");
    }
    try {
      const resp = await postSubscrire({ email });
      if (resp.success) {
        toast.success(resp.message);
      } else {
        toast.error(resp.message);
      }
    } catch (error) {
      toast.error(
        "Une erreur s'est produite lors de l'operation , reessayez plus tard"
      );
    }
  };
  return (
    <div className="footer__container">
      <div className="container__col-2">
        <h2 className="container__title">Rester informé</h2>
        <p className="container__text">
          Des dessins animés et émissions gratuites pour aider nos enfants à
          comprendre la volonté de Dieu au travers d'histoires basées sur la
          Bible et les réalités de ce monde.
        </p>
        <div className="container__input-container">
          <input
            type="text"
            className="container__input-input"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <motion.button
            className="container__input-button"
            whileHover={{
              scale: 1.02,
              color: "white",
              backgroundColor: "#00C853",
            }}
            onClick={sendEmailToSubscribe}
          >
            S'abonner
          </motion.button>
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
          Aidons nos enfants à comprendre la parole de Dieu par un style de
          langage et d'imagerie dans un monde de plus en plus sombre.
        </p>
        <div className="footer__links disabled">
          <FontAwesomeIcon icon={faFacebookF} size={"lg"} />
          <FontAwesomeIcon icon={faYoutube} size={"lg"} />
          <FontAwesomeIcon icon={faWhatsapp} size={"lg"} />
        </div>
      </div>
    </div>
  );
}
