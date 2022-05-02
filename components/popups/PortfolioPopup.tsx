import { Dispatch, SetStateAction } from "react";
import Close from "../UI/Close";
import { ILogos } from "../../sections/PortfolioSection";
import Image from "next/image";
import Link from "next/link";

interface IPortfolioPopup {
  portfolioOpen: boolean;
  setPortfolioOpen: Dispatch<SetStateAction<boolean>>;
  Portfolio: ILogos;
}

const PortfolioPopup = ({
  portfolioOpen,
  setPortfolioOpen,
  Portfolio,
}: IPortfolioPopup) => {
  return (
    <div className={`PortfolioPopup ${portfolioOpen ? "active" : ""}`}>
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
              src={Portfolio?.beforeHover}
            ></Image>
          </div>
          <div className="contentSide">
            <div className="infoLineWrapper">
              <Image
                width={154}
                height={50}
                objectFit={"contain"}
                src={Portfolio?.beforeHover}
              ></Image>
              <ul className="infoLine">
                <li className="infoElem">
                  <span className="what">web</span>
                  <a className="value" href="#" target="_blank">
                    uniepays.com
                  </a>
                </li>
                <li className="infoElem">
                  <span className="what">region</span>
                  <span className="value">Europe</span>
                </li>
                <li className="infoElem">
                  <span className="what">country</span>
                  <span className="value">Turkey</span>
                </li>
                <li className="infoElem">
                  <span className="what">status</span>
                  <span className="value">Active</span>
                </li>
              </ul>
            </div>

            <div className="textContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ipsum a arcu cursus vitae. Elit eget gravida cum sociis natoque
                penatibus. In cursus turpis massa tincidunt. Aliquam eleifend mi
                in nulla posuere sollicitudin aliquam ultrices sagittis.
                Consequat interdum varius sit amet mattis. Scelerisque purus
                semper eget duis at tellus. Amet luctus venenatis lectus magna
                fringilla urna porttitor. Purus sit amet volutpat consequat
                mauris. Rhoncus dolor purus non enim praesent elementum
                facilisis. Lobortis feugiat
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ipsum a arcu cursus vitae. Elit eget gravida cum sociis natoque
                penatibus. In cursus turpis massa tincidunt. Aliquam eleifend mi
                in nulla posuere sollicitudin aliquam ultrices sagittis.
                Consequat interdum varius sit amet mattis. Scelerisque purus
                semper eget duis at tellus. Amet luctus venenatis lectus magna
                fringilla urna porttitor. Purus sit amet volutpat consequat
                mauris. Rhoncus dolor
              </p>
            </div>
            <a href="#" target="_blank" className="contactBtn">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPopup;
