import Slider from "react-slick";
import uniepaus from "../public/assets/svg/logos/uniepaus.svg";
import { uuid } from "uuidv4";

interface ILogos {
  beforeHover: string;
  afterHover: string;
  index: number;
}

const PortfolioSection = () => {
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
    speed: 1800,
    autoplaySpeed: 1800,
    cssEase: "linear",
  };
  return (
    <section className="PortfolioSection">
      <div className="container">
        <h2>PORTFOLIO</h2>
      </div>
      <div className="carousel">
        <Slider {...settings}>
          {logos.map((el, index) => (
            <div key={uuid() + index}>
              <img src={el.beforeHover} alt="logo" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PortfolioSection;
