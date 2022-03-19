import Header from "../hoc/Header/Header";
import MainSection from "../sections/MainSection";
import { useState } from "react";
import { useViewportScroll } from "framer-motion";
import WrapperSecond from "../sections/WrapperSecond";
import DashboardSection from "../sections/DashboardSection";
import EventsSection from "../sections/EventsSection";
import OurTeam from "../sections/OurTeam";
import PortfolioSection from "../sections/PortfolioSection";
import BlogSection from "../sections/BlogSection";
import RiscScenarios from "../sections/RiscScenarios";
import ContactSection from "../sections/ContactSection";

const MainPage = () => {
  const [hideMain, setHide] = useState<boolean>(false);
  const { scrollY } = useViewportScroll();

  return (
    <Header setHide={setHide}>
      <MainSection scrolling={scrollY} hideMain={hideMain} />
      <WrapperSecond scrolling={scrollY} />
      <DashboardSection />
      {/*/!*<RiscScenarios />*!/*/}
      {/*/!*<EventsSection />*!/*/}
      <ContactSection />
      {/*/!*<PortfolioSection />*!/*/}
      {/*<OurTeam />*/}
      {/*<BlogSection />*/}
    </Header>
  );
};

export default MainPage;
