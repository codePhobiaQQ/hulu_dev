import Header from "../hoc/Header/Header";
import MainSection from "../sections/MainSection";
import { useState } from "react";
import { useViewportScroll } from "framer-motion";
import WrapperSecond from "../sections/WrapperSecond";
import DashboardSection from "../sections/DashboardSection";

const MainPage = () => {
  const [hideMain, setHide] = useState<boolean>(false);
  const { scrollY } = useViewportScroll();

  return (
    <Header setHide={setHide}>
      <MainSection scrolling={scrollY} hideMain={hideMain} />
      <WrapperSecond scrolling={scrollY} />
      <DashboardSection />
    </Header>
  );
};

export default MainPage;
