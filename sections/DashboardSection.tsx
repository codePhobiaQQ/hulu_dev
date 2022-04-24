import Circles from "../components/Circles";
import mac from "../public/assets/img/mac.png";

import review1 from "../public/assets/img/dashboard/Review1.png";
import review2 from "../public/assets/img/dashboard/Review1.png";
import review3 from "../public/assets/img/dashboard/Review1.png";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { fadeFromLeft, wrapperVariant } from "../motions/DashBoard.motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IDashboardSection {
  setDashboardOffset: Dispatch<SetStateAction<number>>;
  setDashboardHeight: Dispatch<SetStateAction<number>>;
}

const DashboardSection = ({
  setDashboardOffset,
  setDashboardHeight,
}: IDashboardSection) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    setDashboardOffset(sectionRef.current?.offsetTop);
    // @ts-ignore
    setDashboardHeight(sectionRef.current?.clientHeight);
  }, []);

  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <section id="Dashboard" ref={sectionRef} className="DashboardSection">
      <div className="triangle"></div>
      <motion.div variants={wrapperVariant} className="container">
        <h2>DASHBOARD</h2>
        <motion.div ref={ref} className="dashboard">
          <motion.p
            variants={fadeFromLeft}
            custom={-70}
            animate={inView ? "visible" : "hidden"}
          >
            <img className="comp" src={mac.src} width={1035} height={674} />
            We have created a compliance officer's dashboard that would help you
            to get access to all of our features. It's easy to use to monitor
            all compliance activities, set up rules, and explore individual
            cases.
          </motion.p>
        </motion.div>
        <div className="screening afterDash">
          <div className="imageWrapper">
            <Image src={review1.src} width={630} height={493} />
          </div>
          <div className="content">
            <h3>SCREENING</h3>
            <p>
              Our system helps to manage individual user-profiles and screen for
              potential risks associated with Money Laundering, Fraud, Tax
              Evasion, and other financial crime. All the information is
              accumulated in a single file that is easy to read, process, and
              share with regulatory authorities upon request
            </p>
          </div>
        </div>
        <div className="transactions afterDash">
          <div className="content">
            <h3>TRANSACTION MONITORING</h3>
            <p>
              A risk management system detects and blocks any fraudulent
              activity that your users might attempt with the customer’s online
              banking account or payment card in real-time. All that information
              is available in easy to read format with quick action buttons to
              influence certain decisions
            </p>
          </div>
          <div className="imageWrapper">
            <Image src={review2.src} width={630} height={493} />
          </div>
        </div>
        <div className="risk afterDash">
          <div className="imageWrapper">
            <Image src={review3.src} width={630} height={493} />
          </div>
          <div className="content">
            <h3>RISK SCENARIOS</h3>
            <p>
              Visual Rule Engine helps our clients to create and manage even the
              most complex scenarios in an understandable way. We provide over
              300 scenarios templates as well as allow our clients to set up
              their own, based on their internal risk matrix
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DashboardSection;
