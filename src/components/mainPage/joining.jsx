import { motion } from "framer-motion";
import { Donation } from "../donation/donation";

export function Joining({ isActive, setIsActive }) {
  return (
    <>
      <div className="container__row" style={{ marginTop: "1%" }}>
        <div className="container__col-2" style={{ paddingTop: "5%" }}>
          <h1 className="container__title">Rejoindre Impact Sion</h1>
          <p className="container__text">
            Nous croyons que la Bible est vraie et qu'elle est la parole de
            Dieu. Nous croyons que la parole de Dieu est le fondement d'une
            bonne éducation pour les enfants. En travaillant avec de dynamiques
            frères et sœurs en Jésus-Christ, nous sommes en mesure de réaliser
            des émissions, des ateliers, des dessins animés sur la Bible ou à
            partir d'une thématique sociale pour l'exhortation et l'édification
            de nos enfants.
          </p>
          <motion.button
            className="join_button"
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsActive(true)}
          >
            Donner
          </motion.button>
        </div>
        <div className="container__col-2">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1652630864/sion-project/Capture_d_e%CC%81cran_2022-05-15_a%CC%80_16.07.35_i3tnvi.jpg"
            alt="join_img"
            className="join_img"
          />
        </div>
        {isActive && <Donation isActive={isActive} setIsActive={setIsActive} />}
      </div>
    </>
  );
}
