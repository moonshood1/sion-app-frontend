import { useState } from "react";
import { motion } from "framer-motion";
import {
  faBook,
  faHome,
  faPeopleGroup,
  faPhone,
  faPhoneAlt,
  faQuestionCircle,
  faTv,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const linkVariant = {
    hover: {
      scale: 1.1,
      color: "#E91E63",
      y: 3,
    },
  };

  return (
    <>
      <div className="container row">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1652614128/sion-project/logo-fit_svqrnm.png"
            alt="sion-logo"
            className="footer__logo"
          />
        </Link>
        <div className="header__wrapper right">
          <div className="header__links">
            <motion.a
              variants={linkVariant}
              whileHover="hover"
              href="/#/videos"
              className={
                splitLocation[1] === "videos"
                  ? "header__title left is_active"
                  : "header__title left"
              }
            >
              <FontAwesomeIcon icon={faVideo} /> {""}
              Videos
            </motion.a>
            <motion.a
              variants={linkVariant}
              whileHover="hover"
              href="/#/mag"
              className=""
              className={
                splitLocation[1] === "mag"
                  ? "header__title right is_active"
                  : "header__title right"
              }
            >
              <FontAwesomeIcon icon={faBook} /> Magazine
            </motion.a>
            <motion.a
              variants={linkVariant}
              whileHover="hover"
              href="/#/events"
              className={
                splitLocation[1] === "events"
                  ? "header__title right is_active"
                  : "header__title right"
              }
            >
              <FontAwesomeIcon icon={faPeopleGroup} /> Evenements
            </motion.a>
            <motion.a
              variants={linkVariant}
              whileHover="hover"
              href="/#/direct"
              className={
                splitLocation[1] === "direct"
                  ? "header__title right is_active"
                  : "header__title right"
              }
            >
              <FontAwesomeIcon icon={faTv} /> {""}
              Direct
            </motion.a>
            <motion.a
              variants={linkVariant}
              whileHover="hover"
              href="/#/contact"
              className={
                splitLocation[1] === "contact"
                  ? "header__title right is_active"
                  : "header__title right"
              }
            >
              <FontAwesomeIcon icon={faPhone} /> Contact
            </motion.a>
            {/* <motion.a
              whileHover={{ scale: 1.1, y: 3 }}
              href="#"
              className="header__title right"
            >
              Visit Sion in English
            </motion.a> */}
          </div>
        </div>
      </div>
      <div className="container row mobile">
        <div className="container__mobile right">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dhc0siki5/image/upload/v1652614128/sion-project/logo-fit_svqrnm.png"
              alt="sion-logo"
              className="footer__logo mob"
            />
          </Link>
        </div>
        <div className="container__mobile left">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1617098349/payqin/website/Screenshot_316_ljuop5.png"
            alt=""
            style={{ maxHeight: "20px", marginLeft: "-20%" }}
          />
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1617098349/payqin/website/Screenshot_317_gigu9b.png"
            alt=""
            style={{ maxHeight: "20px", marginLeft: "10%" }}
          />
        </div>
      </div>
      <motion.div
        className="tap__bar"
        // initial={{ y: "450vh" }}
        // animate={{ y: "0", transition: { duration: 3 } }}
      >
        <div className="tap__car-tab">
          <Link
            to="/"
            id="no-decoration"
            className={splitLocation[1] === "" ? "is_active" : ""}
          >
            <FontAwesomeIcon icon={faHome} />
            <small style={{ fontSize: "10px" }}>Accueil</small>
          </Link>
        </div>

        <div className="tap__car-tab">
          <Link
            to="/videos"
            id="no-decoration"
            className={splitLocation[1] === "videos" ? "is_active" : ""}
          >
            <FontAwesomeIcon icon={faVideo} />
            <small style={{ fontSize: "10px" }}>Videos</small>
          </Link>
        </div>
        <div className="tap__car-tab">
          <Link
            to="/events"
            id="no-decoration"
            className={splitLocation[1] === "events" ? "is_active" : ""}
          >
            <FontAwesomeIcon icon={faPeopleGroup} />
            <small style={{ fontSize: "10px" }}>Events</small>
          </Link>
        </div>
        <div className="tap__car-tab">
          <Link
            to="/direct"
            id="no-decoration"
            className={splitLocation[1] === "direct" ? "is_active" : ""}
          >
            <FontAwesomeIcon icon={faTv} />
            <small style={{ fontSize: "10px" }}>Direct</small>
          </Link>
        </div>
        <div className="tap__car-tab">
          <Link
            to="/mag"
            id="no-decoration"
            className={splitLocation[1] === "mag" ? "is_active" : ""}
          >
            <FontAwesomeIcon icon={faBook} />
            <small style={{ fontSize: "10px" }}>Livres</small>
          </Link>
        </div>
        <div className="tap__car-tab">
          <Link
            to="/contact"
            id="no-decoration"
            className={splitLocation[1] === "contact" ? "is_active" : ""}
          >
            <FontAwesomeIcon icon={faPhoneAlt} />
            <small style={{ fontSize: "10px" }}>Contact</small>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
