import Link from "next/link";
import { ILink } from "../components/Menu";
import { v4 as uuidv4 } from "uuid";
import { motion, MotionValue } from "framer-motion";
import { fadeFromBot, fadeFromBotDelay } from "../motions/AboutSection.motion";
import { useEffect, useState } from "react";

interface IAboutSection {
  opacity: MotionValue<number>;
}

const AboutSection = ({ opacity }: IAboutSection) => {
  const [isProductOpen, setIsProductOpen] = useState<boolean>(false);

  const links: ILink[] = [
    {
      name: "Product",
      link: "#",
    },
    {
      name: "Events",
      link: "/#Events",
    },
    {
      name: "Contact us",
      link: "/#ContactUs",
    },
    {
      name: "Portfolio",
      link: "/#Portfolio",
    },
    {
      name: "Our team",
      link: "/#OurTeam",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  console.log(() => {
    console.log("render");
  });

  // console.log(opacity);

  return (
    <section id="About" className="aboutSection">
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
                <>
                  {index == 0 ? (
                    <>
                      <motion.div
                        variants={fadeFromBot}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        onClick={() => setIsProductOpen(!isProductOpen)}
                        className={`navigationItem product ${
                          isProductOpen ? " active" : ""
                        }`}
                      >
                        <span>{link.name}</span>
                        <span className="plus"></span>
                      </motion.div>
                      <ul
                        className={
                          isProductOpen ? "active menuToggle" : "menuToggle"
                        }
                      >
                        <li>
                          <Link href="#">
                            <a>Dashboard</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a>Screening</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <a>Risk Scenarios</a>
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <Link key={link.name + "about" + index} href={link.link}>
                      <motion.a
                        variants={fadeFromBot}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="navigationItem"
                      >
                        {link.name}
                      </motion.a>
                    </Link>
                  )}
                </>
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
                viewport={{ once: true }}
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
                viewport={{ once: true }}
                className="statInner"
              >
                <h4>OVER</h4>
                <span className="number">200+</span>
                <span className="small">Ready to use scenarios</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
