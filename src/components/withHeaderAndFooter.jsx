import { useState } from "react";
import { Sidebar } from "./common/sidebar";
import { Footer } from "./footer";
import { Header } from "./header";

export function WithHeaderAndFooter(Component, props) {
  const [showSidebar, setShowSidebar] = useState(false);
  return function () {
    return (
      <>
        <Header
        // setShowSidebar={setShowSidebar} showSideBar={showSidebar}
        />
        {/* {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />} */}
        <Component {...props} />
        <Footer />
      </>
    );
  };
}
