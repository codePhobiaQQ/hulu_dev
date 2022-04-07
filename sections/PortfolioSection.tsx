import Slider from "react-slick";
import uniepaus from "../public/assets/svg/logos/uniepaus.svg";
import { uuid } from "uuidv4";
import { useState } from "react";

interface ILogos {
  beforeHover: string;
  afterHover: string;
  index: number;
}

const PortfolioSection = () => {
  const [portfolioOpen, setPortfolioOpen] = useState<boolean>(false);

  const logos: ILogos[] = [
    {
      beforeHover: uniepaus.src,
      afterHover: uniepaus.src,
      index: 1,
    },
    {
      beforeHover: uniepaus.src,
      afterHover: uniepaus.src,
      index: 2,
    },
    {
      beforeHover: uniepaus.src,
      afterHover: uniepaus.src,
      index: 3,
    },
    {
      beforeHover: uniepaus.src,
      afterHover: uniepaus.src,
      index: 4,
    },
    {
      beforeHover: uniepaus.src,
      afterHover: uniepaus.src,
      index: 5,
    },
    {
      beforeHover: uniepaus.src,
      afterHover: uniepaus.src,
      index: 3,
    },
    {
      beforeHover: uniepaus.src,
      afterHover: uniepaus.src,
      index: 4,
    },
    {
      beforeHover: uniepaus.src,
      afterHover: uniepaus.src,
      index: 5,
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    pauseOnHover: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    draggable: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          speed: 2000,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          speed: 2000,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  const openPortfolio = () => {
    setPortfolioOpen(true);
  };

  return (
    <>
      <section id="Portfolio" className="PortfolioSection">
        <div className="container">
          <h2>PORTFOLIO</h2>
        </div>
        <div className="carousel">
          <Slider {...settings}>
            {logos.map((el, index) => (
              <div
                onClick={openPortfolio}
                key={"portfolioELem" + index + el.afterHover}
              >
                <img src={el.beforeHover} alt="logo" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
