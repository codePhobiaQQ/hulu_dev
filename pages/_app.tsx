import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../styles/main.sass";
import "./../styles/header.sass";
import "../styles/menu.scss";
import "./../styles/sections/mainSeciton.sass";
import "./../styles/sections/WrapperSection.sass";
import "./../styles/sections/AboutSection.sass";
import "./../styles/sections/WhyHuntlySection.sass";
import "./../styles/sections/DashboardSection.sass";
import "./../styles/sections/EventsSection.sass";
import "./../styles/sections/OurTeamSection.sass";
import "./../styles/sections/PortfolioSection.sass";
import "./../styles/sections/TesteMonialSection.sass";
import "./../styles/sections/BlogSection.sass";
import "./../styles/sections/BlogPageSection.sass";
import "./../styles/sections/BlogSingleNews.sass";
import "./../styles/sections/RiscSection.sass";
import "./../styles/sections/ContactSection.sass";
import "./../styles/ConnPopup.sass";
import "../styles/Policity.sass";
import "../styles/PortfolioPopup.sass";
import "./../styles/sections/FooterSection.sass";
import type { AppProps } from "next/app";
import React, { FC } from "react";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../redux/store";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withRedux(makeStore)(MyApp);
