import Slider from "react-slick";
import icon from "../public/assets/img/teste/TesteIcon.png";
import logo from "../public/assets/img/teste/TesteLogo.png";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface sliderInterface {
  icon: any;
  company: any;
  name: string;
  who: string;
  description: string;
}

const PrevArrow = (props: any) => {
  return (
    <div className="prevArrow" onClick={() => props.slideAction()}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7013 7.02425L4.1951 0.183799C3.94878 -0.0612664 3.54931 -0.0612664 3.30299 0.183799C3.05668 0.428846 3.05668 0.826462 3.30299 1.07153L10.3566 7.50001L3.30362 13.9285C3.0573 14.1735 3.0573 14.5712 3.30362 14.8162C3.54993 15.0612 3.9494 15.0612 4.1957 14.8162L11.7019 7.97575C11.8332 7.84511 11.8895 7.67192 11.8807 7.50063C11.8889 7.32871 11.8326 7.15554 11.7013 7.02425Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

const NextArrow = (props: any) => {
  return (
    <div className="nextArrow" onClick={() => props.slideAction()}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7013 7.02425L4.1951 0.183799C3.94878 -0.0612664 3.54931 -0.0612664 3.30299 0.183799C3.05668 0.428846 3.05668 0.826462 3.30299 1.07153L10.3566 7.50001L3.30362 13.9285C3.0573 14.1735 3.0573 14.5712 3.30362 14.8162C3.54993 15.0612 3.9494 15.0612 4.1957 14.8162L11.7019 7.97575C11.8332 7.84511 11.8895 7.67192 11.8807 7.50063C11.8889 7.32871 11.8326 7.15554 11.7013 7.02425Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

const TesteMonials = () => {
  const sliders: sliderInterface[] = [
    {
      icon: icon.src,
      company: logo.src,
      name: "Daria Dubinina",
      who: "CEO at CrassulaCo-founder & CEO",
      description:
        "We enjoy working with Huntli as a partner. They are able to provide a solid system for transaction monitoring and fraud prevention that we happily recommend to our clients. Huntli's team is always responsive and can adapt to our client's needs. They have a unique and personalized approach to each case, that we didn’t see anywhere else on the market. Mainly our clients rely on their AML screening and transaction monitoring modules.",
    },
    {
      icon: icon.src,
      company: logo.src,
      name: "Daria Dubinina",
      who: "CEO at CrassulaCo-founder & CEO",
      description:
        "We enjoy working with Huntli as a partner. They are able to provide a solid system for transaction monitoring and fraud prevention that we happily recommend to our clients. Huntli's team is always responsive and can adapt to our client's needs. They have a unique and personalized approach to each case, that we didn’t see anywhere else on the market. Mainly our clients rely on their AML screening and transaction monitoring modules.",
    },
    {
      icon: icon.src,
      company: logo.src,
      name: "Daria Dubinina",
      who: "CEO at CrassulaCo-founder & CEO",
      description:
        "We enjoy working with Huntli as a partner. They are able to provide a solid system for transaction monitoring and fraud prevention that we happily recommend to our clients. Huntli's team is always responsive and can adapt to our client's needs. They have a unique and personalized approach to each case, that we didn’t see anywhere else on the market. Mainly our clients rely on their AML screening and transaction monitoring modules.",
    },
  ];

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    margin: 20,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef<any>(null);

  useEffect(() => {
    console.log(sliderRef.current);
  }, []);

  return (
    <section className="TesteMonialsSection">
      <div className="container">
        <h2>TESTEMONIALS</h2>
        <div className="testemonialsSlider">
          <Slider ref={sliderRef} {...settings}>
            {sliders.map((el, index) => (
              <div className={"slide-inner"} key={"testemonialELem" + index}>
                <div className="logo">
                  <Image
                    width={200}
                    height={43}
                    src={el.company}
                    objectFit={"contain"}
                  />
                </div>
                <div className="icon">
                  <Image
                    width={84}
                    height={84}
                    src={el.icon}
                    objectFit={"contain"}
                  />
                </div>
                <h3>{el.name}</h3>
                <span>{el.who}</span>
                <p>{el.description}</p>
              </div>
            ))}
          </Slider>
          <div className="arrows">
            <PrevArrow slideAction={sliderRef.current?.slickPrev} />
            <NextArrow slideAction={sliderRef.current?.slickNext} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TesteMonials;
