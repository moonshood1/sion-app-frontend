import { motion } from "framer-motion";
import { WithHeaderAndFooter } from "../withHeaderAndFooter";
import { Comments } from "./comments";
import { Introduction } from "./introduction";
import { Library } from "./library";
import { OnTop } from "./onTop";

export function Magazine() {
  const onTop = <OnTop />;
  const introduction = <Introduction />;
  const comments = <Comments />;
  const library = <Library />;
  const MainPageWithHeaderAndFooter = WithHeaderAndFooter(() => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {/* <div className="body__container">{onTop}</div> */}
      <div className="intro__wrapper">
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1654379755/sion-project/picture-of-positive-friendly-looking-eight-year-old-afro-american-boy-lying-on-floor-at-home_rurson_u7s6p8.jpg"
          alt="introduction"
          style={{ width: "100%" }}
        />
      </div>
      <div className="body__container">
        {/* {comments}  */}
        {introduction}
        {library}
      </div>
    </motion.div>
  ));
  return <MainPageWithHeaderAndFooter />;
}
