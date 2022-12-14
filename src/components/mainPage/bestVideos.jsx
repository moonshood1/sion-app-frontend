import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../api/getCategories";
import { getVideosByCategories } from "../../api/getVideosByCategories";
import { CardComponent } from "../common/card";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faPlay } from "@fortawesome/free-solid-svg-icons";

export function BestVideos() {
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [isEmptyVideo, setIsEmpyVideo] = useState(false);

  const gotoTheVideo = (id) => {
    window.location.href = `/#/video/${id}`;
  };
  const getDefaultVideos = async () => {
    const resp = await getVideosByCategories("62b334d36b4fff214fe42e7b");
    if (resp.success) {
      setVideos(resp.videos);
    }
  };

  const getCats = async () => {
    const resp = await getCategories();
    if (resp.success) {
      setCategories(resp.categories);
    }
  };

  const getVideosRelated = async (id) => {
    const resp = await getVideosByCategories(id);
    if (resp.success) {
      setVideos(resp.videos);
    } else {
      setIsEmpyVideo(true);
    }
  };

  useEffect(() => {
    getCats();
    getDefaultVideos();
  }, []);
  return (
    <>
      <h1 className="container__title" style={{ marginTop: "4%" }}>
        La chaine
      </h1>
      <div className="slider__category">
        {categories &&
          categories.map((category) => (
            <motion.span
              className="slide__categories"
              key={category._id}
              onClick={() => getVideosRelated(category._id)}
              whileHover={{ y: 2, color: "#D81B60", fontWeight: "bold" }}
            >
              {category.name}
            </motion.span>
          ))}
      </div>
      <div className="slider__container">
        {!isEmptyVideo && videos ? (
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
            {videos.map((video) => (
              <div onClick={() => gotoTheVideo(video._id)} key={video._id}>
                <CardComponent
                  title={video.title}
                  description={video.description}
                  link={video.thumbnail}
                  id={video._id}
                  type={"event"}
                />
              </div>
            ))}
          </OwlCarousel>
        ) : (
          <div
            className="empty_videos"
            style={{
              marginTop: "3%",
              marginBottom: "4%",
              textAlign: "center",
              width: "100%",
            }}
          >
            <p>
              D??sol?? ???? , il n'existe aucune vid??o dans la categorie
              selectionn??e{" "}
            </p>
          </div>
        )}
      </div>
      <Link to="/videos" className="link__to_all">
        Voir toutes les videos
      </Link>
    </>
  );
}
