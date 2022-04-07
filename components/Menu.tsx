import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import SocLinks from "./UI/SocLinks";
import { SetStateAction, Dispatch } from "react";
import LogoMenu from "./UI/LogoMenu";

interface IMenu {
  setOpen: Dispatch<SetStateAction<boolean>>;
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
  // {
  //   name: "EVENTS",
  //   link: "/#Events",
  // },
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

const Menu = ({ setOpen }: IMenu) => {
  return (
    <div className="menuUI">
      <nav>
        <div className="background-one"></div>
        <div className="background-two"></div>
        <div className="menu">
          <ul className="dust-particles">
            <li></li>
          </ul>
          <div className="left-side">
            <LogoMenu />
            <div className="social-media">
              <SocLinks />
            </div>
          </div>
          <div className="line"></div>
          <ul className="links">
            {linksMenu.map((el, index) => (
              <li key={"menuElem" + index + el.link + el.name}>
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
