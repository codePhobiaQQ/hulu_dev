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
  const sectionRef = useRef<HTMLElement>(null);
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

  return (
    <section ref={sectionRef} id="Dashboard" className="DashboardSection">
      <div ref={firstInView.ref} className="wrapperDashboard">
        <div className="triangle"></div>
        <motion.div variants={wrapperVariant} className="container">
          <h2>DASHBOARD</h2>
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
                src={mac.src}
                width={1035}
                height={674}
              />
              We have created a compliance officer's dashboard that would help
              you to get access to all of our features. It's easy to use to
              monitor all compliance activities, set up rules, and explore
              individual cases.
            </motion.p>
          </motion.div>
          <motion.div
            ref={secondInView.ref}
            variants={wrapperVariant}
            className="screening afterDash"
            animate={secondInView.inView ? "visible" : "hidden"}
          >
            <motion.div
              custom={{ xing: -70, delaying: 0.7 }}
              variants={fadeFromLeft}
              className="imageWrapper"
            >
              <Image src={review1.src} width={630} height={493} />
            </motion.div>
            <motion.div
              variants={fadeFromLeft}
              custom={{ xing: 70 }}
              className="content"
            >
              <h3>SCREENING</h3>
              <p>
                Our system helps to manage individual user-profiles and screen
                for potential risks associated with Money Laundering, Fraud, Tax
                Evasion, and other financial crime. All the information is
                accumulated in a single file that is easy to read, process, and
                share with regulatory authorities upon request
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={wrapperVariant}
            className="transactions afterDash"
            ref={thirdInView.ref}
            animate={thirdInView.inView ? "visible" : "hidden"}
          >
            <motion.div
              custom={{ xing: -70 }}
              variants={fadeFromLeft}
              className="content"
            >
              <h3>TRANSACTION MONITORING</h3>
              <p>
                A risk management system detects and blocks any fraudulent
                activity that your users might attempt with the customer’s
                online banking account or payment card in real-time. All that
                information is available in easy to read format with quick
                action buttons to influence certain decisions
              </p>
            </motion.div>
            <motion.div
              custom={{ xing: 70, delaying: 0.7 }}
              variants={fadeFromLeft}
              className="imageWrapper"
            >
              <Image src={review2.src} width={630} height={493} />
            </motion.div>
          </motion.div>

          <motion.div
            variants={wrapperVariant}
            ref={fourthInView.ref}
            animate={fourthInView.inView ? "visible" : "hidden"}
            className="risk afterDash"
          >
            <motion.div
              custom={{ xing: -70, delaying: 0.7 }}
              variants={fadeFromLeft}
              className="imageWrapper"
            >
              <Image src={review3.src} width={630} height={493} />
            </motion.div>
            <motion.div
              custom={{ xing: 70 }}
              variants={fadeFromLeft}
              className="content"
            >
              <h3>RISK SCENARIOS</h3>
              <p>
                Visual Rule Engine helps our clients to create and manage even
                the most complex scenarios in an understandable way. We provide
                over 300 scenarios templates as well as allow our clients to set
                up their own, based on their internal risk matrix
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
