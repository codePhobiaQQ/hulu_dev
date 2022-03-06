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
          <ul className="links">
            {linksMenu.map((el, index) => (
              <li key={uuidv4() + index}>
                <Link href={`#${el.link}`}>
                  <a>{el.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rightCol">
          <h3>CONTACT</h3>
          <span className="address">
            Kronvalda bulvāris 10, Centra rajons, Rīga, Latvia, LV-1010
          </span>
          <a className="email" href="mailto:dmytro@huntli.io">
            dmytro@huntli.io
          </a>
          <a className="tel" href="tel:+371 22 035 144">
            +371 22 035 144
          </a>
          <SocLinks />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
