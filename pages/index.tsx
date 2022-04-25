import Header from "../hoc/Header/Header";
import MainSection from "../sections/MainSection";
import { useState } from "react";
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

const MainPage = () => {
  const { scrollY } = useViewportScroll();

  const [dashboardOffset, setDashboardOffset] = useState<number>(900);
  const [dashboardHeight, setDashboardHeight] = useState<number>(630);
  const [topPosition, setTopPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setTopPosition(position);
  };

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
function useEffect(arg0: () => () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
