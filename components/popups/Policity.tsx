import { Dispatch, SetStateAction, useEffect } from "react";
import Close from "../UI/Close";
import { menuVariant } from "../../motions/Menu.motion";
import { AnimatePresence, motion } from "framer-motion";

interface IPolicity {
  policityOpen: boolean;
  setPolicityOpen: Dispatch<SetStateAction<boolean>>;
}

const Policity = ({ policityOpen, setPolicityOpen }: IPolicity) => {
  useEffect(() => {}, []);

  return (
    <AnimatePresence initial={false}>
      {policityOpen && (
        <motion.div
          variants={menuVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={"PolicityPopup"}
        >
          <div className="close" onClick={() => setPolicityOpen(false)}>
            <Close />
          </div>
          <div className="container">
            <h3>
              PayPugs and Huntli Partner for Better Automated Risk Management
              System
            </h3>
            <p>
              Today, fintech company PayPugs announced that it has partnered
              with fraud and transaction monitoring company Huntli to enhance
              PayPugs AML screening process and fraud detection system. The
              collaboration improves customer fund security and helps to meet
              regulatory requirements.
            </p>
            <p>
              PayPugs is a popular Banking-as-a-Service platform that allows
              users to obtain trustworthy banking, payment, card and other
              solutions for their global expansion. The company’s focus on
              personalized customer service and solutions has allowed for great
              relationships with clients while also delivering comprehensive and
              international solutions.
            </p>
            <p>
              Huntli risk management systems is the latest development in the
              world of fraud prevention. Their high-tech approach has resulted
              in one of the most market competitive solutions. A risk management
              system that detects and blocks any fraudulent activity that a
              fraudster might attempt with the customer’s online banking account
              or payment card. Huntli system proactively monitors accounts and
              enhances bank’s fraud prevention and detection.
            </p>
            <p>
              The operation transparency and alignment of targets regarding
              compliance procedure effectiveness resulted in synergy between
              both companies since day one. The partnership solves the problem
              of obtaining a trusted and high-tech fraud prevention system that
              doesn't disturb customer experience or does not complicate team
              operations.
            </p>
            <p>
              Allowing a completely remote, yet fully supported onboarding,
              PayPugs compliance team has been working closely with Huntli to
              implement necessary procedures. Right now the system has been
              already implemented and PayPugs fraud monitoring and prevention is
              automated and in real time.{" "}
            </p>
            <p>
              "In a short amount of time, we needed to set up a system for
              transaction monitoring and AML screening. Members of the Huntli
              team assisted us every step of the way. Our issue was resolved in
              less than a month: they installed the system in three weeks and
              put it into service a week later. They set up the system and
              assisted with additional scenario settings. Also, they offered to
              tweak and build other situations for our company. At all phases of
              the project, all team members worked professionally, proposed new
              alternatives, and gave informative assistance. We also appreciated
              the systems and team flexibility in developing PayPugs custom
              processes." comments Alexander Zelinsky, Chairman of the
              Supervisory Board at PayPugs.
            </p>
            <p>
              We are glad to be working with PayPugs and committing together
              towards making financial technologies more accessible, transparent
              and compliant with existing regulation. We hope that our
              fraud-prevention tools will ease their day-to-day compliance
              expenses and focus on what is meaningful to their end-users.”
              comments Lev Bass, Co-Founder/CBDO at Huntli
            </p>
            <p>***</p>
            <p>
              Huntli is an all-in-one transaction monitoring tool that helps to
              fight financial fraud and keeps its users in check with day-to-day
              compliance. This one-fits-all system is very user-friendly and is
              easy to integrate with existing core-banking solutions. Our
              platform allows to highlight any user activity that is deemed too
              risky or might lead to money laundering, tax evasion, fraud, and
              other financial crimes. For more information, please visit
              https://huntli.io/{" "}
            </p>
            <p>
              PayPugs is a licensed financial services provider with a global
              footprint. Different entities work in different regions for risk
              reduction and faster access to payment schemes. Supporting the
              most demanding business sectors, from forex and crypto to gaming
              and financial services, PayPugs focuses on providing banking,
              payment, and other infrastructures through a well-developed
              Banking-as-a-Service solution. PayPugs drives value for clients
              through personalized services, secure and frictionless payments,
              and innovative products. For more information, please visit
              https://paypugs.com/
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Policity;
