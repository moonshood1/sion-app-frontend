import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { getMags } from "../../api/getMagazines";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export function Library() {
  const [mags, setMags] = useState([]);

  const loadMags = async () => {
    const resp = await getMags();
    if (resp.success) {
      console.log(resp.magazines);
      setMags(resp.magazines);
    }
  };
  useEffect(() => {
    loadMags();
  }, []);
  return (
    <div style={{ marginBottom: "2%" }}>
      <h3 className="event_title">Bibliotheque de sion tv</h3>
      <div className="slider__container">
        <OwlCarousel
          className="owl-theme"
          responsive={{
            0: {
              items: 2,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 4,
            },
          }}
        >
          {mags &&
            mags.map((mag) => (
              <div className="" key={mag._id}>
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  src={mag.imageUrl}
                  alt=""
                  className="intro__img library"
                />
              </div>
            ))}
        </OwlCarousel>
      </div>
      {/* <a href="#" className="link__to_books">
        Voir tous les livres
      </a> */}
    </div>
  );
}
