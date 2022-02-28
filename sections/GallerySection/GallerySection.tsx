import styles from "./GallerySection.module.sass";
import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";

import ArrowSlider from "../../components/ArrowSlider/ArrowSlider";

import slide1 from "./../../public/assets/slides/1.jpg";
import slide2 from "./../../public/assets/slides/2.jpg";
import slide3 from "./../../public/assets/slides/3.jpg";
import slide4 from "./../../public/assets/slides/4.jpg";
import slide5 from "./../../public/assets/slides/5.jpg";
import slide6 from "./../../public/assets/slides/6.jpg";
import slide7 from "./../../public/assets/slides/7.jpg";
import slide8 from "./../../public/assets/slides/8.jpg";
import useWindowWidth from "react-hook-use-window-width";

interface ISlide {
  image: string;
}

const GallerySection = () => {
  const [imagesAmount, setImagesAmount] = useState(3);

  const width = useWindowWidth();
  useEffect(() => {
    if (width > 992) {
      setImagesAmount(3);
    } else if (width <= 992 && width > 576) {
      setImagesAmount(1);
    } else if (width <= 576) {
      setImagesAmount(1);
    }
  }, [width]);

  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    centerMode: true,
    slidesToShow: imagesAmount,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderRef = useRef(null);
  console.log(sliderRef.current);

  const slides: ISlide[] = [
    {
      image: slide1.src,
    },
    {
      image: slide2.src,
    },
    {
      image: slide3.src,
    },
    {
      image: slide4.src,
    },
    {
      image: slide5.src,
    },
    {
      image: slide6.src,
    },
    {
      image: slide7.src,
    },
    {
      image: slide8.src,
    },
  ];

  const clickNextArrow = () => {
    // @ts-ignore
    sliderRef.current?.slickNext();
  };

  const clickPrevArrow = () => {
    // @ts-ignore
    sliderRef.current?.slickPrev();
    console.log("clicked");
  };

  return (
    <div className={styles.gallerySection}>
      <div className="container">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={uuidv4() + index}>
              <img src={slide.image} alt={"slide"} />
            </div>
          ))}
        </Slider>
        <div className={styles.arrowsWrapper}>
          <ArrowSlider onClick={clickPrevArrow} left={true} />
          <ArrowSlider onClick={clickNextArrow} />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
