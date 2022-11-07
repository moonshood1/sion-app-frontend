import { motion } from "framer-motion";

export function Comments() {
  return (
    <div className="container__row">
      <motion.div className="comment__wrapper">
        <div className="comment__image">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1654382131/sion-project/PngItem_307416_1_n2n1ao.png"
            alt="comment_img"
            className="comment_img"
          />
        </div>
        <div className="comment__text">
          <p>
            “Your videos are really a blessing me, and God uses them to shape my
            theology. I’m full of joy that finally there are French versions of
            the videos. Praise God!”
          </p>
        </div>
      </motion.div>
      <motion.div className="comment__wrapper">
        <div className="comment__image">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1654382131/sion-project/PngItem_307416_1_n2n1ao.png"
            alt="comment_img"
            className="comment_img"
          />
        </div>
        <div className="comment__text">
          <p>
            “Your videos are really a blessing me, and God uses them to shape my
            theology. I’m full of joy that finally there are French versions of
            the videos. Praise God!”
          </p>
        </div>
      </motion.div>
      <motion.div className="comment__wrapper">
        <div className="comment__image">
          <img
            src="https://res.cloudinary.com/dhc0siki5/image/upload/v1654382131/sion-project/PngItem_307416_1_n2n1ao.png"
            alt="comment_img"
            className="comment_img"
          />
        </div>
        <div className="comment__text">
          <p>
            “Your videos are really a blessing me, and God uses them to shape my
            theology. I’m full of joy that finally there are French versions of
            the videos. Praise God!”
          </p>
        </div>
      </motion.div>
    </div>
  );
}
