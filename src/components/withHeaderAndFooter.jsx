import { Footer } from "./footer";
import { Header } from "./header";

export function WithHeaderAndFooter(Component, props) {
  return function () {
    return (
      <>
        <Header />
        <Component {...props} />
        <Footer />
      </>
    );
  };
}
