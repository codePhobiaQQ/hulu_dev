import Header from "../hoc/Header/Header";
import MainSection from "../sections/MainSection";
import { useState, useEffect } from "react";
import { useViewportScroll } from "framer-motion";
import WrapperSecond from "../sections/WrapperSecond";
import DashboardSection from "../sections/DashboardSection";
import OurTeam from "../sections/OurTeam";
import PortfolioSection from "../sections/PortfolioSection";
import BlogSection from "../sections/BlogSection";
import RiscScenarios from "../sections/RiscScenarios";
import ContactSection from "../sections/ContactSection";
import TesteMonials from "../sections/TesteMonials";
import EventsSection from "../sections/EventsSection";

export interface PositionInterface {
  main: number;
  about: number;
  risk: number;
  contacts: number;
  // blog: number;
}

const MainPage = () => {
  const { scrollY } = useViewportScroll();
  const [lastScroll, setLastScroll] = useState<number>(0);
  const [dashboardOffset, setDashboardOffset] = useState<number>(900);
  const [dashboardHeight, setDashboardHeight] = useState<number>(630);
  const [isLightLogo, setIsLightLogo] = useState<boolean>(true);

  const [topPosition1, setTopPosition1] = useState<number>(1500);
  const [topPosition2, setTopPosition2] = useState<number>(4920);
  const [topPosition3, setTopPosition3] = useState<number>(6785);
  const [topPosition4, setTopPosition4] = useState<number>(11276);

  const scrollPosition = () => {
    return window.pageYOffset || document.documentElement.scrollTop;
  };

  const scrollHandler = () => {
    const position = scrollPosition();
    if (position < topPosition1 && isLightLogo == false) {
      setIsLightLogo(true);
    } else if (
      position >= topPosition1 &&
      position <= topPosition2 &&
      isLightLogo != false
    ) {
      console.log("1");
      setIsLightLogo(false);
    } else if (
      position > topPosition2 &&
      position < topPosition3 &&
      isLightLogo == false
    ) {
      console.log("2");
      setIsLightLogo(true);
    } else if (
      position >= topPosition3 &&
      position <= topPosition4 &&
      isLightLogo != false
    ) {
      console.log("3");
      setIsLightLogo(false);
    } else if (position > topPosition4 && isLightLogo == false) {
      console.log("4");
      setIsLightLogo(true);
    }
  };

  useEffect(() => {
    console.log(topPosition1, topPosition2, topPosition3, topPosition4);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [topPosition1, topPosition2, topPosition3, topPosition4, isLightLogo]);

  return (
    <Header
      scrolling={scrollY}
      dashboardOffset={dashboardOffset}
      dashboardHeight={dashboardHeight}
      isLightLogo={isLightLogo}
    >
      <MainSection />
      <WrapperSecond setTopPosition={setTopPosition1} scrolling={scrollY} />
      <DashboardSection
        setDashboardHeight={setDashboardHeight}
        setDashboardOffset={setDashboardOffset}
      />
      <RiscScenarios setTopPosition={setTopPosition2} />
      <EventsSection />
      <ContactSection setTopPosition={setTopPosition3} />
      <PortfolioSection />
      <TesteMonials />
      <OurTeam />
      <BlogSection setTopPosition={setTopPosition4} />
    </Header>
  );
};

export default MainPage;
