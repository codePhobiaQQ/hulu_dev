import { Dispatch, SetStateAction } from "react";
import Close from "../UI/Close";
import { ILogosFinal } from "../../sections/PortfolioSection";
import Image from "next/image";
import { BackUrl } from "../../vars";
import ReactMarkdown from "react-markdown";
import { AnimatePresence, motion } from "framer-motion";
import { menuVariant } from "../../motions/Menu.motion";

interface IPortfolioPopup {
  portfolioOpen: boolean;
  setPortfolioOpen: Dispatch<SetStateAction<boolean>>;
  Portfolio: ILogosFinal;
}

const PortfolioPopup = ({
  portfolioOpen,
  setPortfolioOpen,
  Portfolio,
}: IPortfolioPopup) => {
  return (
    <AnimatePresence initial={false}>
      {portfolioOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariant}
          className={"PortfolioPopup active"}
        >
          <div className="close" onClick={() => setPortfolioOpen(false)}>
            <Close />
          </div>
          <div className="container">
            <div className="contentSideInnerWrapper">
              <div className="logoSide">
                <Image
                  width={270}
                  height={90}
                  objectFit={"contain"}
                  src={Portfolio.Logo}
                ></Image>
              </div>
              <div className="contentSide">
                <div className="infoLineWrapper">
                  <Image
                    width={154}
                    height={50}
                    objectFit={"contain"}
                    src={Portfolio.Logo}
                  ></Image>
                  <ul className="infoLine">
                    <li className="infoElem">
                      <span className="what">web</span>
                      <a className="value" href="#" target="_blank">
                        {Portfolio.web}
                      </a>
                    </li>
                    <li className="infoElem">
                      <span className="what">region</span>
                      <span className="value">{Portfolio.region}</span>
                    </li>
                    <li className="infoElem">
                      <span className="what">country</span>
                      <span className="value">{Portfolio.country}</span>
                    </li>
                    <li className="infoElem">
                      <span className="what">status</span>
                      <span className="value">{Portfolio.status}</span>
                    </li>
                  </ul>
                </div>

                <div className="textContent">
                  <ReactMarkdown
                    transformImageUri={(uri: any) =>
                      uri.startsWith("http") ? uri : `${BackUrl}${uri}`
                    }
                  >
                    {Portfolio.description}
                  </ReactMarkdown>
                </div>
                <a
                  href={Portfolio.contactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="contactBtn"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioPopup;
