import mac from "../public/assets/img/mac.png";
import review1 from "../public/assets/img/dashboard/Review1.png";
import review2 from "../public/assets/img/dashboard/Review1.png";
import review3 from "../public/assets/img/dashboard/Review1.png";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { fadeFromLeft, wrapperVariant } from "../motions/DashBoard.motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScreeningMonitor from "../components/DashboardSection/ScreeningMonitor";
import {
  TransactionMonitor,
  RiskMonitor,
} from "../components/DashboardSection/ScreeningMonitor";
import axios from "axios";
import { BackUrl, ImgI } from "../vars";

interface IDashboardSection {
  setDashboardOffset: Dispatch<SetStateAction<number>>;
  setDashboardHeight: Dispatch<SetStateAction<number>>;
}

interface DashBoardSectionDataI {
  title: string;
  img: string;
  text: string;
}
interface ScreeningSectionDataI {
  title: string;
  text: string;
}

const DashboardSection = ({
  setDashboardOffset,
  setDashboardHeight,
}: IDashboardSection) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionData, setSectionData] = useState<DashBoardSectionDataI>({
    title: "DASHBOARD",
    img: mac.src,
    text: "We have created a compliance officer's dashboard that would help you to get access to all of our features. It's easy to use to monitor all compliance activities, set up rules, and explore individual cases.",
  } as DashBoardSectionDataI);

  const [screeningData, setScreeningData] = useState<ScreeningSectionDataI>({
    title: "SCREENING",
    text: "Our system helps to manage individual user-profiles and screen for potential risks associated with Money Laundering, Fraud, Tax Evasion, and other financial crime. All the information is accumulated in a single file that is easy to read, process, and share with regulatory authorities upon request",
  } as ScreeningSectionDataI);

  const [transactionData, setTransactionData] = useState<ScreeningSectionDataI>(
    {
      title: "TRANSACTION MONITORING",
      text: "A risk management system detects and blocks any fraudulent activity that your users might attempt with the customer’s online banking account or payment card in real-time. All that information is available in easy to read format with quick action buttons to influence certain decisions",
    } as ScreeningSectionDataI
  );

  const [riskData, setRiskData] = useState<ScreeningSectionDataI>({
    title: "RISK SCENARIOS",
    text: "Visual Rule Engine helps our clients to create and manage even the most complex scenarios in an understandable way. We provide over 300 scenarios templates as well as allow our clients to set up their own, based on their internal risk matrix",
  } as ScreeningSectionDataI);

  useEffect(() => {
    sectionRef.current
      ? setDashboardOffset(sectionRef.current.offsetTop)
      : null;
    sectionRef.current
      ? setDashboardHeight(sectionRef.current.clientHeight)
      : null;
  }, []);

  const firstInView = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });
  const secondInView = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const thirdInView = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const fourthInView = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(
        BackUrl +
          "/api/main-page-fields?populate=DashboardSection&populate=DashboardSection.img&populate=ScreeningSection&populate=MonitoringSection"
      );
      setSectionData({
        ...response.data.data.attributes.DashboardSection,
        img:
          BackUrl +
          response.data.data.attributes.DashboardSection.img.data.attributes
            .url,
      });
      setScreeningData(response.data.data.attributes.ScreeningSection);
      setTransactionData(response.data.data.attributes.MonitoringSection);
    };
    takeData();
  }, []);

  useEffect(() => {
    console.log(sectionData);
  }, [sectionData]);

  return (
    <section ref={sectionRef} id="Dashboard" className="DashboardSection">
      <div ref={firstInView.ref} className="wrapperDashboard">
        <div className="triangle"></div>
        <motion.div variants={wrapperVariant} className="container">
          <h2>{sectionData.title}</h2>
          <motion.div className="dashboard">
            <motion.p
              variants={fadeFromLeft}
              custom={{ xing: -70 }}
              animate={firstInView.inView ? "visible" : "hidden"}
            >
              <motion.img
                variants={fadeFromLeft}
                custom={{ xing: 70, delaying: 0.7 }}
                className="comp"
                src={sectionData.img}
                width={1035}
                height={674}
              />
              {sectionData.text}
            </motion.p>
          </motion.div>
          <div id="Screening" className="screening afterDash">
            <motion.div
              className="helpWrapper"
              ref={secondInView.ref}
              variants={wrapperVariant}
              animate={secondInView.inView ? "visible" : "hidden"}
            >
              <motion.div
                custom={{ xing: 0, delaying: 0.7 }}
                variants={fadeFromLeft}
                className="imageWrapper"
              >
                <ScreeningMonitor />
              </motion.div>
              <motion.div
                variants={fadeFromLeft}
                custom={{ xing: 70 }}
                className="content"
                style={{ minHeight: "151px" }}
              >
                <h3>{screeningData.title}</h3>
                <p>{screeningData.text}</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="transactions afterDash" id="Transaction">
            <motion.div
              className="helpWrapper"
              variants={wrapperVariant}
              ref={thirdInView.ref}
              animate={thirdInView.inView ? "visible" : "hidden"}
            >
              <motion.div
                custom={{ xing: -70 }}
                variants={fadeFromLeft}
                className="content"
                style={{ minHeight: "151px" }}
              >
                <h3>{transactionData.title}</h3>
                <p>{transactionData.text}</p>
              </motion.div>

              <motion.div
                custom={{ xing: 0, delaying: 0.7 }}
                variants={fadeFromLeft}
                className="imageWrapper"
              >
                <TransactionMonitor />
              </motion.div>
            </motion.div>

            <div className="risk afterDash" id="Scenarious">
              <motion.div
                className="helpWrapper"
                variants={wrapperVariant}
                ref={fourthInView.ref}
                animate={fourthInView.inView ? "visible" : "hidden"}
              >
                <motion.div
                  custom={{ xing: -70, delaying: 0.7 }}
                  variants={fadeFromLeft}
                  className="imageWrapper"
                >
                  <RiskMonitor />
                </motion.div>
                <motion.div
                  custom={{ xing: 70 }}
                  variants={fadeFromLeft}
                  className="content"
                  style={{ minHeight: "151px" }}
                >
                  <h3>{riskData.title}</h3>
                  <p>{riskData.text}</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
