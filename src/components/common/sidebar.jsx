import { AnimatePresence, motion } from "framer-motion";

export function Sidebar({ setShowSidebar }) {
  const overlay_content = {
    hidden: {
      opacity: 0,
      x: "250vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        mass: 0.5,
        damping: 15,
      },
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div className="sidebar__wrapper">
        <motion.div
          className="sidebar__links container__col-2"
          variants={overlay_content}
        >
          <p>
            <motion.a href="/" className="sidebar__link">
              Accueil
            </motion.a>
          </p>
          <p>
            <motion.a href="/videos" className="sidebar__link">
              Videos
            </motion.a>
          </p>
          <p>
            <motion.a href="/mag" className="sidebar__link">
              Magazine
            </motion.a>
          </p>
          <p>
            <motion.a href="/contact" className="sidebar__link">
              Contact
            </motion.a>
          </p>
          <p>
            <motion.a href="/about" className="sidebar__link">
              A propos
            </motion.a>
          </p>
          <p>
            <motion.a href="/english" className="sidebar__link">
              English version
            </motion.a>
          </p>
        </motion.div>
        <motion.div className="sidebar__links container__col-2">
          <button onClick={() => setShowSidebar(false)}>X</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
