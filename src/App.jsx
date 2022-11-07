import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { AnimatedRoutes } from "./components/animatedRoutes";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <>
      {" "}
      <AnimatedRoutes />{" "}
      <ToastContainer
        position={toast.POSITION.BOTTOM_CENTER}
        autoClose={2000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />{" "}
    </>
  );
};

export default App;
