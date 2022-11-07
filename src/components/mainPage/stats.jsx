import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faGlobeEurope,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export function Stats() {
  const handleSuscribeToTheChammel = async () => {
    window.open(
      "https://youtube.com/channel/UCTCLLQhOhgRMdM8saecJohw/?sub_confirmation=1"
    );
  };
  const buttonVariant = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  const ButtonHover = ({ text, icon, color, handleClick }) => {
    return (
      <motion.div
        className="container__col-3 fixed"
        style={{ textAlign: "center", color: color, cursor: "pointer" }}
        variants={buttonVariant}
        whileHover="hover"
        onClick={handleClick ? handleClick : () => console.log("click")}
      >
        <FontAwesomeIcon
          icon={icon}
          size={"4x"}
          style={{ marginBottom: "2%" }}
        />
        <p>{text}</p>
      </motion.div>
    );
  };
  return (
    <div className="container__row fixed">
      <ButtonHover text={"5 Videos"} color={"#1E88E5"} icon={faImages} />

      <ButtonHover
        text={"S'abonner"}
        color={"#E91E63"}
        icon={faYoutube}
        handleClick={handleSuscribeToTheChammel}
      />

      <ButtonHover text={"2 Langages"} color={"#FF9800"} icon={faGlobeEurope} />
      <ButtonHover text={"20% vues hors CI"} color={"#00C853"} icon={faEye} />
    </div>
  );
}
