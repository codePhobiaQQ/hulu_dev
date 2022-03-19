import Circles from "../components/Circles";
import mac from "../public/assets/img/mac.png";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

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

  console.log();

  return (
    <section id="DashBoard" ref={sectionRef} className="DashboardSection">
      <div className="triangle"></div>
      <div className="container">
        <div className="leftSide">
          <h2>DASHBOARD</h2>
          <p>
            We have created a compliance officer's dashboard that would help you
            to get access to all of our features. It's easy to use to monitor
            all compliance activities, set up rules, and explore individual
            cases.
          </p>
          <Circles />
        </div>
        <div className="rightSide">
          <Circles />
        </div>
      </div>
      <div className="container">
        <img src={mac.src} alt="mac" />
        <h3 className="ultimate">Unlimited transaction monitoring alerts</h3>
        <h3 className="screening">SCREENING</h3>
        <p className="text1">
          Our system helps to manage individual user profiles and screen for
          potential risks associated with Money Laun- dering, Fraud, Tax
          Evasion, and other financial crime.
        </p>
        <p className="text2">
          All the information is accumulated in a single file that is easy to
          read, process, and share with regulatory authori- ties upon request
        </p>
        <div className="textWrapper">
          <p>
            A risk management system detects and blocks any fraudulent activity
            that your users might attempt with the customer’s online banking
            account or payment card in real-time.
          </p>
          <p>
            Statistics and Analytics tools help you stay up to date with your
            current operations. They are packed in easy to read format and are
            customizable to your needs.
          </p>
        </div>
        <p className="text3">
          All the information is accumulated in a single file that is easy to
          read, process, and share with regulatory authori- ties upon request
        </p>
      </div>
    </section>
  );
};

export default DashboardSection;
