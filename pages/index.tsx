import Header from "../hoc/Header/Header";
import MainSection from "../sections/MainSection";
import { useState, useEffect, useRef } from "react";
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
import axios from "axios";
import { BackUrl } from "../vars";
import useWindowSize from "../hooks/useWindowSize";

interface IPageDaga {
  HideEvents: boolean;
  HideRisk: boolean;
}

const MainPage = () => {
  const [pageData, setPageData] = useState<IPageDaga>({
    HideRisk: false,
    HideEvents: false,
  } as IPageDaga);

  const [isHide, setIsHide] = useState<boolean>(false);

  const [dashboardOffset, setDashboardOffset] = useState<number>(900);
  const [dashboardHeight, setDashboardHeight] = useState<number>(630);
  const [isLightLogo, setIsLightLogo] = useState<boolean>(true);

  const [topPosition1, setTopPosition1] = useState<number>(1500);
  const [topPosition2, setTopPosition2] = useState<number>(4920);
  const [topPosition3, setTopPosition3] = useState<number>(6785);
  const [topPosition4, setTopPosition4] = useState<number>(11276);

  const lastScrollHelper = useRef<number>(0);
  const lastScroll = useRef<number>(0);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(BackUrl + "/api/main-page-fields");
      setPageData(response.data.data.attributes);
    };
    takeData();
  }, []);

  const scrollHandler = () => {
    const position = document.documentElement.scrollTop;
    if (position < topPosition1 && isLightLogo == false) {
      setIsLightLogo(true);
    } else if (
      position >= topPosition1 &&
      position <= topPosition2 &&
      isLightLogo != false
    ) {
      setIsLightLogo(false);
    } else if (
      position > topPosition2 &&
      position < topPosition3 &&
      isLightLogo == false
    ) {
      setIsLightLogo(true);
    } else if (
      position >= topPosition3 &&
      position <= topPosition4 &&
      isLightLogo != false
    ) {
      setIsLightLogo(false);
    } else if (position > topPosition4 && isLightLogo == false) {
      setIsLightLogo(true);
    }

    if (position > lastScroll.current) {
      console.log("down");
      lastScroll.current = position;
      if (position > lastScrollHelper.current + 80) {
        if (!isHide) {
          setIsHide(true);
        }
        lastScrollHelper.current = position;
      }
    } else {
      console.log("up");
      if (isHide) setIsHide(false);
      lastScroll.current = position;
      lastScrollHelper.current = position;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [topPosition1, topPosition2, topPosition3, topPosition4, isHide]);

  return (
    <Header
      dashboardOffset={dashboardOffset}
      dashboardHeight={dashboardHeight}
      isLightLogo={isLightLogo}
      isHide={isHide}
    >
      <MainSection />
      <WrapperSecond setTopPosition={setTopPosition1} />
      <DashboardSection
        setDashboardHeight={setDashboardHeight}
        setDashboardOffset={setDashboardOffset}
      />
      {!pageData.HideRisk && <RiscScenarios setTopPosition={setTopPosition2} />}
      {!pageData.HideEvents && <EventsSection hide={pageData.HideEvents} />}
      <ContactSection setTopPosition={setTopPosition3} />
      <PortfolioSection />
      <TesteMonials />
      <OurTeam />
      <BlogSection setTopPosition={setTopPosition4} />
    </Header>
  );
};

export default MainPage;
