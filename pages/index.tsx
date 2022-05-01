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

interface PositionInterface {
  main: number;
  about: number;
  // risk: number;
  // contacts: number;
  // blog: number;
}

const MainPage = () => {
  const { scrollY } = useViewportScroll();
  const [lastScroll, setLastScroll] = useState<number>(0);
  const [dashboardOffset, setDashboardOffset] = useState<number>(900);
  const [dashboardHeight, setDashboardHeight] = useState<number>(630);
  // const [topPosition, setTopPosition] = useState<PositionInterface>({
  //   main: 0,
  //   about: 0,
  // });

  const scrollPosition = () => {
    return window.pageYOffset || document.documentElement.scrollTop;
  };

  const scrollHandler = () => {
    console.log(lastScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Header
      scrolling={scrollY}
      dashboardOffset={dashboardOffset}
      dashboardHeight={dashboardHeight}
    >
      <MainSection />
      <WrapperSecond scrolling={scrollY} />
      <DashboardSection
        setDashboardHeight={setDashboardHeight}
        setDashboardOffset={setDashboardOffset}
      />
      <RiscScenarios />
      <EventsSection />
      <ContactSection />
      <PortfolioSection />
      <TesteMonials />
      <OurTeam />
      <BlogSection />
    </Header>
  );
};

export default MainPage;
