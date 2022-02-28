import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import NewsSection from "../sections/NewsSection/NewsSection";

const News = () => {
  return (
    <Header>
      <NewsSection />
      <Footer></Footer>
    </Header>
  );
};

export default News;
