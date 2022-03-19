import logo from "../public/assets/svg/Logo.svg";
import { linksMenu } from "../components/Menu";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import SocLinks from "../components/UI/SocLinks";

const FooterSection = () => {
  return (
    <footer className="footerSection">
      <div className="container">
        <div className="leftCol">
          <img src={logo.src} alt="Logo" />
          <span>Privacy and policy</span>
        </div>
        <div className="centerCol">
          <h3>Navigate</h3>
          <div className="linksLists">
            <ul className="links left">
              {linksMenu.map((el, index) => (
                <>
                  {index <= 4 && (
                    <li key={uuidv4() + index}>
                      <Link href={`#${el.link}`}>
                        <a>{el.name}</a>
                      </Link>
                    </li>
                  )}
                </>
              ))}
            </ul>
            <ul className="links right">
              {linksMenu.map((el, index) => (
                <>
                  {index > 4 && (
                    <li key={uuidv4() + index}>
                      <Link href={`${el.link}`}>
                        <a>{el.name}</a>
                      </Link>
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className="rightCol">
          <div className="rightColInner">
            <h3>CONTACT</h3>
            <span className="address">
              Kronvalda bulvāris 10, Centra rajons, Rīga, Latvia, LV-1010
            </span>
            <a className="email" href="mailto:dmytro@huntli.io">
              dmytro@huntli.io
            </a>
            <SocLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
