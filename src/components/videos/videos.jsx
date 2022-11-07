import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { getVideosAll } from "../../api/getAllVideos";
import { getCategories } from "../../api/getCategories";
import { getVideosByCategories } from "../../api/getVideosByCategories";
import { WithHeaderAndFooter } from "../withHeaderAndFooter";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { CardComponent } from "../common/card";

export function Videos() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEmptyVideo, setIsEmpyVideo] = useState(false);

  const gotToVideo = (id) => {
    window.location.href = `/#/video/${id}`;
  };

  const loadVideos = async () => {
    const resp = await getVideosAll();
    if (resp.success) {
      setVideos(resp.videos);
    }
  };

  const loadCategories = async () => {
    const resp = await getCategories();
    if (resp.success) {
      setCategories(resp.categories);
    }
  };

  const filterVideos = async (id) => {
    const resp = await getVideosByCategories(id);
    if (resp.success) {
      setVideos(resp.videos);
    } else {
      setIsEmpyVideo(true);
    }
  };

  useEffect(() => {
    loadCategories();
    loadVideos();
  }, []);

  const VideoWithHeaderAndFooter = WithHeaderAndFooter(() => (
    <div className="body__container">
      <h2
        className="slide__categories title"
        style={{ marginBottom: "3%", marginTop: "3%" }}
        onClick={loadVideos}
      >
        Toutes les videos{" "}
      </h2>

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
            items: 5,
          },
        }}
      >
        {categories &&
          categories.map((category) => (
            <motion.span
              className="slide__categories"
              key={category._id}
              onClick={() => filterVideos(category._id)}
              whileHover={{ y: 2, color: "#D81B60", fontWeight: "bold" }}
            >
              {category.name}
            </motion.span>
            // <span
            //   className="slide__categories"
            //   key={category._id}

            // >
            //   {category.name}
            // </span>
          ))}
      </OwlCarousel>

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
              <div key={video._id} onClick={() => gotToVideo(video._id)}>
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
              Désolé 😔 , il n'existe aucune vidéo dans la categorie
              selectionnée{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  ));

  return <VideoWithHeaderAndFooter />;
}
