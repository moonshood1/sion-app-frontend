import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Events() {
  return (
    <>
      <div className="event__container">
        <motion.img
          // src="https://res.cloudinary.com/dhc0siki5/image/upload/v1656329244/sion-project/edward-cisneros-QSa-uv4WJ0k-unsplash_hhfaqu.jpg"
          // src="https://res.cloudinary.com/dhc0siki5/image/upload/v1656943578/sion-project/sion_event_cover_vneaxy.jpg"
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1656951492/sion-project/cover_finale_jruk4n.jpg"
          alt="join_img"
          className="event__img"
        />
        <div className="event__content">
          <h3 className="event__text-title">Evenements de SION</h3>
          <p className="event__text-paragraph">
            La chaîne Sion TV est souvent invitée lors de certains evenements
            pour les animations afin d'égailler les journées déjà riches en
            grâce, en joie et en bénédiction.
            <br />
            Ici , sont retracées toutes les sorties de la chaine ,
          </p>
          <Link to="/events">
            <motion.button
              className="event__text-button"
              whileHover={{ scale: 1.03 }}
            >
              Consulter les evenements
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}
