import "./../styles/main.sass";
import "./../styles/header.sass";
import "../styles/menu.scss";
import "./../styles/sections/mainSeciton.sass";
import "./../styles/sections/AboutSection.sass";
import "./../styles/sections/WhyHuntlySection.sass";
import type { AppProps } from "next/app";
import React, { FC } from "react";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../redux/store";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withRedux(makeStore)(MyApp);
