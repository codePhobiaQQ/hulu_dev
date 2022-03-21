import logo from "../public/assets/svg/Logo.svg";
import { ILink, linksMenu } from "../components/Menu";
import Link from "next/link";
import SocLinks from "../components/UI/SocLinks";
import { Dispatch, SetStateAction } from "react";

interface ILinksInt {
  index: number;
  el: ILink;
}

interface IFooter {
  setPolicityOpen: Dispatch<SetStateAction<boolean>>;
}

const FirstFootLink = ({ index, el }: ILinksInt) => {
  if (index <= 4) {
    return (
      <li>
        <Link href={`${el.link}`}>
          <a>{el.name}</a>
        </Link>
      </li>
    );
  }
  return null;
};

const SecondFootLink = ({ index, el }: ILinksInt) => {
  if (index > 4) {
    return (
      <li key={"footer" + el.name + el.link + "second"}>
        <Link href={`${el.link}`}>
          <a>{el.name}</a>
        </Link>
      </li>
    );
  }
  return null;
};

const FooterSection = ({ setPolicityOpen }: IFooter) => {
  return (
    <footer className="footerSection">
      <div className="container">
        <div className="leftCol">
          <img src={logo.src} alt="Logo" />
          <span onClick={() => setPolicityOpen(true)}>Privacy and policy</span>
        </div>
        <div className="centerCol">
          <h3>Navigate</h3>
          <div className="linksLists">
            <ul className="links left">
              {linksMenu.map((el, index) => (
                <FirstFootLink
                  key={"footer" + el.name + el.link + "first"}
                  index={index}
                  el={el}
                />
              ))}
            </ul>
            <ul className="links right">
              {linksMenu.map((el, index) => (
                <SecondFootLink
                  key={"footer" + el.name + el.link + "second"}
                  index={index}
                  el={el}
                />
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
