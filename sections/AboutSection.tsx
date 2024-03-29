import Link from "next/link";
import { ILink } from "../components/Menu";
import { motion } from "framer-motion";
import { fadeFromBot } from "../motions/AboutSection.motion";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import StatisticElem from "../components/AboutSection/StatisticElem";
import axios from "axios";
import { BackUrl } from "../vars";

interface AboutInterface {
  setTopPosition: Dispatch<SetStateAction<number>>;
  whyHeight: number;
}

interface AboutSectionDataI {
  title: string;
  text: string;
}

// @ts-ignore
const AboutSection = React.memo(
  ({ setTopPosition, whyHeight }: AboutInterface) => {
    const [isProductOpen, setIsProductOpen] = useState<boolean>(false);
    const [sectionData, setSectionData] = useState<AboutSectionDataI>({
      title: "ABOUT US",
      text: "Huntli is an all-in-one solution that helps you fight financial fraud and keep you in check with day-to-day compliance. Our one-fits-all system is easy to set up and integrate with your core banking. Our support is available 24/7 to assist you with that.",
    } as AboutSectionDataI);

    const aboutSection = useRef<HTMLElement>(null);

    useEffect(() => {
      aboutSection.current
        ? setTopPosition(aboutSection.current.offsetTop + whyHeight - 100)
        : null;
    }, [aboutSection]);

    const links: ILink[] = [
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

    useEffect(() => {
      const takeData = async () => {
        const response = await axios.get(
          BackUrl + "/api/main-page-fields?populate=AboutSection"
        );
        setSectionData(response.data.data.attributes.AboutSection);
      };
      takeData();
    }, []);

    return (
      <section ref={aboutSection} id="About" className="aboutSection">
        <div className="container">
          <h2>{sectionData.title}</h2>
          <div className="content">
            <div className="leftSide">
              <div className="navigation">
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
                  <span>Products</span>
                  <span className="plus"></span>
                </motion.div>
                <ul
                  className={isProductOpen ? "active menuToggle" : "menuToggle"}
                >
                  <li>
                    <Link href="/#Dashboard">
                      <a onClick={() => setIsProductOpen(false)}>
                        Compliance dashboard
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#Screening">
                      <a onClick={() => setIsProductOpen(false)}>
                        AML name screening
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#Transaction">
                      <a onClick={() => setIsProductOpen(false)}>
                        Live transaction monitoring
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#Scenarious">
                      <a onClick={() => setIsProductOpen(false)}>
                        Virtual scenarious builder
                      </a>
                    </Link>
                  </li>
                </ul>
                {links.map((link, index) => (
                  <Link
                    key={link.name + "aboutSection" + index}
                    href={link.link}
                  >
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
                ))}
              </div>
            </div>
            <div className="rightSide">
              <div className="text">{sectionData.text}</div>
              <div className="statistic">
                <StatisticElem
                  title="UP TO"
                  to={60}
                  text={"%"}
                  spaning={"Less time on AML cases"}
                />
                <StatisticElem
                  title="OVER"
                  to={200}
                  text={"+"}
                  spaning={"Ready to use scenarios"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default AboutSection;
