import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WithHeaderAndFooter } from "../withHeaderAndFooter";
import { getSingleVideo } from "../../api/getSingleVideo";
import { useParams } from "react-router-dom";
import { getComments } from "../../api/getComments";
import ReactPlayer from "react-player";

export function Video() {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [comments, setComments] = useState([]);
  const [isEmptyVideo, setIsEmpyVideo] = useState(false);
  const [isEmptyComment, setIsEmptyComment] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const loadVideo = async () => {
    const resp = await getSingleVideo(id);
    if (resp.success) {
      setVideo(resp.video);
    } else {
      setIsEmpyVideo(true);
    }
  };

  const loadComments = async () => {
    const resp = await getComments(id);
    if (resp.success) {
      setComments(resp.comments);
    } else {
      setIsEmptyComment(true);
    }
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    console.log({
      username,
      comment,
      video: id,
    });
  };

  useEffect(() => {
    loadVideo();
    loadComments();
    // console.log(id);
  }, []);

  const VideoWithHeaderAndFooter = WithHeaderAndFooter(() => (
    <div className="body__container">
      <h2
        className="video__title"
        style={{ marginBottom: "3%", marginTop: "3%" }}
      >
        {video && video.title}{" "}
      </h2>

      {!isEmptyVideo && video ? (
        <>
          <div className="video__container">
            <motion.div
              className="container__col-3 fixed"
              key={video._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              <iframe
                className="video-thumbnail"
                src={`https://www.youtube.com/embed/${video.url}?rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                // ?autoplay=1
              ></iframe>
            </motion.div>
          </div>
          <div className="comment_section">
            <h2
              className="video__title"
              style={{ marginBottom: "3%", marginTop: "3%" }}
            >
              Section des commentaires
            </h2>
            {!isEmptyComment && comments ? (
              comments.map((comment) => (
                <div className="video__comment-wrapper">
                  <div className="video__comment-image-wrapper">
                    <img
                      src="https://res.cloudinary.com/dhc0siki5/image/upload/v1654382131/sion-project/PngItem_307416_1_n2n1ao.png"
                      alt="comment_img"
                      className="video__comment-image"
                    />
                  </div>
                  <div className="video__comment-text">
                    <p>{comment.comment}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty_comment" style={{ marginBottom: "2%" }}>
                Aucun commentaire pour ce media{" "}
                {/* <div className="video__comment-wrapper">
                  <div className="video__comment-image-wrapper">
                    <img
                      src="https://res.cloudinary.com/dhc0siki5/image/upload/v1654382131/sion-project/PngItem_307416_1_n2n1ao.png"
                      alt="comment_img"
                      className="video__comment-image"
                    />
                  </div>
                  <div className="video__comment-text">
                    <p>{comment.comment}</p>
                  </div>
                </div> */}
              </p>
            )}
            <div className="comment_input">
              <p className="empty_comment">Laissez un commentaire ici </p>
            </div>
            <div className="comment_form">
              <div className="comment_user-container">
                <div>
                  <label htmlFor="username">Votre nom</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="comment_name"
                    id="username"
                    value={username}
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="comment_text-container">
                <div>
                  <label htmlFor="comment" className="comment_text-label">
                    Votre commentaire
                  </label>
                </div>
                <div>
                  <textarea
                    className="comment_text"
                    rows="5"
                    cols="50"
                    id="comment"
                    // value={comment}
                    onChange={(e) => {
                      console.log(e.target.value);
                      // setComment(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
              <div>
                <motion.button
                  className="comment_button"
                  type={"submit"}
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      duration: 0.3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                  onClick={handlePostComment}
                >
                  Commenter
                </motion.button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Aucune Video dans la categorie</p>
      )}
    </div>
  ));

  return <VideoWithHeaderAndFooter />;
}
