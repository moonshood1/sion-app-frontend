import { motion } from "framer-motion";

export function Download() {
  return (
    <div className="container__row center">
      <h1 style={{ textAlign: "center" }} className="download__title">
        Bientot disponible
      </h1>
      <div className="downloads-links">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#"
          style={{ marginRight: "1%" }}
        >
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1654275908/sion-project/Google-CTA_2x_iayzfn_x0u7up_ykchri.png"
            alt="google dl"
            className="button__dl"
          />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} href="#">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1654275905/sion-project/iOS-CTA_2x_felwyr_lqv0dy_vfdqy6.png"
            alt="apple dl"
            className="button__dl"
          />
        </motion.a>
      </div>
    </div>
  );
}
