import Slider from "react-slick";

const WhyHuntlySlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    pauseOnHover: false,
    autoplay: true,
    speed: 3000,
    vertical: true,
    draggable: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <span>monitoring and screening of clients in real-time</span>
      <span>analytics</span>
      <span>scoring (for clients and transactions)</span>
      <span>visual interface for rules creation</span>
      <span>monitoring and screening of clients in real-time</span>
      <span>analytics</span>
      <span>scoring (for clients and transactions)</span>
      <span>visual interface for rules creation</span>
    </Slider>
  );
};

export default WhyHuntlySlider;
