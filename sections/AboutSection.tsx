import Link from "next/link";
import { ILink } from "../components/Menu";
import { v4 as uuidv4 } from "uuid";
import { motion, MotionValue } from "framer-motion";
import { fadeFromBot, fadeFromBotDelay } from "../motions/AboutSection.motion";

interface IAboutSection {
  opacity: MotionValue<number>;
}

const AboutSection = ({ opacity }: IAboutSection) => {
  const links: ILink[] = [
    {
      name: "Product",
      link: "#",
    },
    {
      name: "Transaction monitoring",
      link: "#",
    },
    {
      name: "Events",
      link: "#",
    },
    {
      name: "Contact us",
      link: "#",
    },
    {
      name: "Portfolio",
      link: "#",
    },
    {
      name: "Our team",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
  ];
  // console.log(opacity);

  return (
    <section className="aboutSection">
      <motion.div
        style={{ opacity: opacity }}
        className="backgroundWrapper"
      ></motion.div>
      <div className="container">
        <h2>ABOUT US</h2>
        <div className="content">
          <div className="leftSide">
            <div className="navigation">
              {links.map((link, index) => (
                <Link key={uuidv4() + index} href={link.link}>
                  <motion.a
                    variants={fadeFromBot}
                    initial="hidden"
                    whileInView="visible"
                    className="navigationItem"
                  >
                    {link.name}
                  </motion.a>
                </Link>
              ))}
            </div>
          </div>
          <div className="rightSide">
            <div className="text">
              Huntli is an all-in-one solution that helps you fight financial
              fraud and keep you in check with day-to-day compliance. Our
              one-fits-all system is easy to set up and integrate with your core
              banking. Our support is available 24/7 to assist you with that.
            </div>
            <div className="statistic">
              <motion.div
                variants={fadeFromBot}
                initial="hidden"
                whileInView="visible"
                className="statInner"
              >
                <h4>UP TO</h4>
                <span className="number">60%</span>
                <span className="small">Less time on AML cases</span>
              </motion.div>
              <motion.div
                variants={fadeFromBotDelay}
                initial="hidden"
                whileInView="visible"
                className="statInner"
              >
                <h4>UP TO</h4>
                <span className="number">60%</span>
                <span className="small">Less time on AML cases</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
