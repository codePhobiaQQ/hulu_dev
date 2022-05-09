import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SocLinks from "./UI/SocLinks";
import { SetStateAction, Dispatch, useCallback, useEffect } from "react";
import { fadeFromBot, menuVariant } from "../motions/Menu.motion";
import LogoMenu from "./UI/LogoMenu";
import Close from "./UI/Close";

interface IMenu {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
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

const Menu = ({ setOpen, open }: IMenu) => {
  const clickLinkHandler = () => {
    setOpen(false);
  };

  const keyClickHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") clickLinkHandler();
  }, []);

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", keyClickHandler);
      return () => {
        window.removeEventListener("keydown", keyClickHandler);
      };
    }
  }, [open]);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariant}
          className="menuUI"
        >
          <div className="close" onClick={() => setOpen(false)}>
            <Close />
          </div>
          <nav>
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
                  <motion.li
                    variants={fadeFromBot}
                    custom={index}
                    onClick={clickLinkHandler}
                    key={"menuElem" + el.link + el.name}
                  >
                    <Link href={`${el.link}`}>
                      <a>{el.name}</a>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
