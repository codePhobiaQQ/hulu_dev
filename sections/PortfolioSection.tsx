import Slider from "react-slick";
import uniepaus from "../public/assets/svg/logos/uniepaus.svg";
import { useEffect, useState } from "react";
import PortfolioPopup from "../components/popups/PortfolioPopup";
import axios from "axios";
import { BackUrl } from "../vars";

export interface ILogosFinal {
  id: number;
  Logo: string;
  web: string;
  region: string;
  country: string;
  status: string;
  description: string;
  contactLink: string;
}

const PortfolioSection = () => {
  const [portfolioOpen, setPortfolioOpen] = useState<boolean>(false);
  const [portfolioIndex, setPortfolioIndex] = useState<number>(1);
  const [sectionData, setSectionData] = useState<ILogosFinal[]>([
    {
      id: 1,
      Logo: uniepaus.src,
      web: "uniepays.com",
      region: "Europe",
      country: "Turkey",
      status: "Active",
      description: "Test",
      contactLink: "https://google.com",
    },
    {
      id: 2,
      Logo: uniepaus.src,
      web: "uniepays.com",
      region: "Europe",
      country: "Turkey",
      status: "Active",
      description: "Test",
      contactLink: "https://google.com",
    },
    {
      id: 3,
      Logo: uniepaus.src,
      web: "uniepays.com",
      region: "Europe",
      country: "Turkey",
      status: "Active",
      description: "Test",
      contactLink: "https://google.com",
    },
    {
      id: 4,
      Logo: uniepaus.src,
      web: "uniepays.com",
      region: "Europe",
      country: "Turkey",
      status: "Active",
      description: "Test",
      contactLink: "https://google.com",
    },
    {
      id: 5,
      Logo: uniepaus.src,
      web: "uniepays.com",
      region: "Europe",
      country: "Turkey",
      status: "Active",
      description: "Test",
      contactLink: "https://google.com",
    },
  ] as ILogosFinal[]);

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

  const openPortfolio = (index: number) => {
    setPortfolioOpen(true);
    setPortfolioIndex(index);
  };

  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(
        BackUrl + "/api/portfolios?populate=Logo"
      );
      setSectionData([
        ...response.data.data.map((el: any) => {
          return {
            id: el.id,
            ...el.attributes,
            Logo: BackUrl + el.attributes.Logo.data.attributes.url,
          };
        }),
      ]);
    };
    takeData();
  }, []);

  return (
    <>
      <section id="Portfolio" className="PortfolioSection">
        <div className="container">
          <h2>PORTFOLIO</h2>
        </div>
        <div className="carousel">
          <Slider {...settings}>
            {sectionData.map((el, index) => (
              <div
                onClick={() => openPortfolio(el.id)}
                key={"portfolioELem" + index + el.Logo}
              >
                <img src={el.Logo} alt="logo" />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <PortfolioPopup
        portfolioOpen={portfolioOpen}
        setPortfolioOpen={setPortfolioOpen}
        Portfolio={
          sectionData.find((logo) => logo.id == portfolioIndex) ||
          sectionData[0]
        }
      />
    </>
  );
};

export default PortfolioSection;
