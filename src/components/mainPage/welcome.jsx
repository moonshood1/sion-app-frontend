import { useEffect } from "react";
import { useState } from "react";
import { getWelcomeVid } from "../../api/getWelcomeVideo";
import messages from "../../helpers/welcomeMessages.json";

export function Welcome() {
  const [title, setTitle] = useState("");
  const [welcomeVideo, setWelcomeVideo] = useState({});

  const getWelcomeVideo = async () => {
    const resp = await getWelcomeVid();
    if (resp.success) {
      setWelcomeVideo(resp.video);
    }
  };

  useEffect(() => {
    getWelcomeVideo();
  }, []);

  return (
    <>
      <div className="card__container">
        <div className="container__col-2" style={{ textAlign: "center" }}>
          <h1 className="container__title styled">
            {title === "" ? "Akwaba" : title}
          </h1>
          <p className="container__text">
            {/* Réduire l’influence des médias mondains dans l’éducation des enfants
            et amorcer un réveil spirituel au sein de la cellule familiale. */}
            {/* Restez proches de vos enfants 🙏🏽 */}
            Nos enfants connectés à Christ 🙏🏽
          </p>
        </div>

        <div className="container__col-2">
          {welcomeVideo && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${welcomeVideo.url}?controls=0&showinfo=0`}
              // &autoplay=1&loop=1&playlist=iqPSrJ3wMms
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="welcome__video"
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
}
