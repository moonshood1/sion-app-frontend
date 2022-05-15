import { WithHeaderAndFooter } from "../withHeaderAndFooter";
import { BestVideos } from "./bestVideos";
import { Joining } from "./joining";
import { Welcome } from "./welcome";

export function MainPage() {
  const welcomeContainer = <Welcome />;
  const bestVideos = <BestVideos />;
  const join = <Joining />;

  const MainPageWithHeaderAndFooter = WithHeaderAndFooter(() => (
    <>
      <div className="body__container">
        {welcomeContainer}
        {bestVideos}
        {join}
      </div>
    </>
  ));
  return <MainPageWithHeaderAndFooter />;
}
