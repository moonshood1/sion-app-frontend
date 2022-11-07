import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MainPage } from "./mainPage/mainPage";
import { Magazine } from "./magazine/magazine";
import { Direct } from "./pages/direct";
import { Contact } from "./pages/contact";
import { Events } from "./pages/events";
import { Videos } from "./videos/videos";
import { Video } from "./videos/singleVideo";

export function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/mag" element={<Magazine />} />
        <Route path="/direct" element={<Direct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </AnimatePresence>
  );
}
