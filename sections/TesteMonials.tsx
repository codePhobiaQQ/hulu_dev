import Slider from "react-slick";
import icon from "../public/assets/img/teste/TestIcon.png";
import logo from "../public/assets/img/teste/TesteLogo.png";

interface sliderInterface {
  icon: any;
  company: any;
  name: string;
  who: string;
  description: string;
}

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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="TesteMonialsSection">
      <div className="container">
        <h2>TESTEMONIALS</h2>
        <div className="testemonialsSlider">
          <Slider {...settings}>
            {sliders.map((el, index) => (
              <div key={"testemonialELem" + index}>hello world</div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TesteMonials;
