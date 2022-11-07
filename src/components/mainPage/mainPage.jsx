import { useState } from "react";
import { motion } from "framer-motion";
import { WithHeaderAndFooter } from "../withHeaderAndFooter";
import { BestVideos } from "./bestVideos";
import { Discover } from "./discover";
import { Download } from "./download";
import { Joining } from "./joining";
import { Stats } from "./stats";
import { Welcome } from "./welcome";
import { Events } from "./events";

export function MainPage() {
  const [isActive, setIsActive] = useState(false);
  const welcomeContainer = <Welcome />;
  const bestVideos = <BestVideos />;
  const join = <Joining isActive={isActive} setIsActive={setIsActive} />;
  const stats = <Stats />;
  const download = <Download />;
  const discover = <Discover />;
  const events = <Events />;

  const MainPageWithHeaderAndFooter = WithHeaderAndFooter(() => (
    <>
      <motion.div
        className="body__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
      >
        {welcomeContainer}
        {stats}
        {bestVideos}
      </motion.div>
      {events}
      <motion.div
        className="body__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
      >
        {discover}
        {join}
        {download}
      </motion.div>
    </>
  ));
  return <MainPageWithHeaderAndFooter />;
}
