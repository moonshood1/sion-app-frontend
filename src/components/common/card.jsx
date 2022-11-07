import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export function CardComponent({ title, description, link, id, type }) {
  return (
    <motion.div className={`card_wrapper ${type}`} whileHover={{ scale: 1.01 }}>
      <div className="card_img">
        <img
          src={
            link
              ? link
              : "https://res.cloudinary.com/dhc0siki5/image/upload/v1654271181/sion-project/Sans_titre_-_1-41_cr8c0f.jpg"
          }
          alt=""
        />
      </div>
      <div className="card_button-play">
        <FontAwesomeIcon icon={faCirclePlay} size={"3x"} color={"#E91E63"} />
      </div>
      <div className="card_content">
        <h4 className="card_content-title">{title}</h4>
        <p className="card_content-text">{description}</p>
      </div>
    </motion.div>
  );
}
