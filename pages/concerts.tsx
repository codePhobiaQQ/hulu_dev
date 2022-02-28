import React from "react";
import Footer from "../hoc/Footer/Footer";
import Header from "../hoc/Header/Header";
import ConcertsSection from "../sections/ConcertsSection/ConcertsSection";

const Concerts = () => {
  return (
    <Header>
      <ConcertsSection />
      <Footer></Footer>
    </Header>
  );
};

export default Concerts;
