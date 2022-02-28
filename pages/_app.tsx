import "./../styles/main.sass";
import type { AppProps } from "next/app";
import React, { FC } from "react";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../redux/store";
import "video-react/dist/video-react.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withRedux(makeStore)(MyApp);
