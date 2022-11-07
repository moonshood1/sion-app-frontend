import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { getTheDirect } from "../../api/getTheDirect";
import { WithHeaderAndFooter } from "../withHeaderAndFooter";

export function Direct() {
  const [notProgrammed, setNotProgrammed] = useState(false);
  const [video, setVideo] = useState({});

  const loadDirect = async () => {
    const resp = await getTheDirect();
    if (resp.success) {
      console.log(resp.direct);
      setVideo(resp.direct);
    } else {
      setNotProgrammed(true);
    }
  };

  useEffect(() => {
    loadDirect();
  }, []);

  const ContactHeaderAndFooter = WithHeaderAndFooter(() => (
    <motion.div
      className="body__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      style={{ marginBottom: "5%" }}
    >
      {notProgrammed ? (
        <div className="direct_pending">
          <div className="direct_pending-message">
            <p>Aucun direct programmé pour le moment </p>
          </div>
        </div>
      ) : (
        <iframe
          className="video-thumbnail"
          src={`https://www.youtube.com/embed/${video.url}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </motion.div>
  ));

  return <ContactHeaderAndFooter />;
}
