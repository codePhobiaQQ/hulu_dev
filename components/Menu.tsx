import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import SocLinks from "./UI/SocLinks";
import { SetStateAction, Dispatch } from "react";
import LogoMenu from "./UI/LogoMenu";

interface IMenu {
  nav: any;
  backgroundOne: any;
  backgroundTwo: any;
  line: any;
  dustParticles: any;
  social: any;
  links: any;
  title: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  toggleClass: () => void;
}

export interface ILink {
  name: string;
  link: string;
}

export const linksMenu: ILink[] = [
  {
    name: "WHY HUNTLI?",
    link: "/#WhyHuntli",
  },
  {
    name: "ABOUT US",
    link: "/#About",
  },
  {
    name: "DASHBOARD",
    link: "/#Dashboard",
  },
  {
    name: "SCREENING",
    link: "/#Screening",
  },
  {
    name: "RISK SCENARIOS",
    link: "/#Risk",
  },
  {
    name: "EVENTS",
    link: "/#Events",
  },
  {
    name: "CONTACTS US",
    link: "/#ContactUs",
  },
  {
    name: "PORTFOLIO",
    link: "/#Portfolio",
  },
  {
    name: "OUR TEAM",
    link: "/#OurTeam",
  },
  {
    name: "BLOG",
    link: "/blog",
  },
];

const Menu = ({
  nav,
  backgroundOne,
  backgroundTwo,
  line,
  dustParticles,
  links,
  social,
  title,
  setOpen,
  toggleClass,
}: IMenu) => {
  const clickLinkHandler = () => {
    // setOpen(false);
    toggleClass();
  };

  return (
    <div className="menuUI">
      <nav ref={nav}>
        <div ref={backgroundOne} className="background-one"></div>
        <div ref={backgroundTwo} className="background-two"></div>
        <div className="menu">
          <ul ref={dustParticles} className="dust-particles">
            <li></li>
          </ul>
          <div className="left-side">
            <LogoMenu refing={title} />
            <div className="social-media">
              <SocLinks social={social} />
            </div>
          </div>
          <div ref={line} className="line"></div>
          <ul ref={links} className="links">
            {linksMenu.map((el, index) => (
              <li
                onClick={clickLinkHandler}
                key={"menuElem" + index + el.link + el.name}
              >
                <Link href={`${el.link}`}>
                  <a>{el.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
