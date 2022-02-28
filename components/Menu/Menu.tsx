import styles from "./Menu.module.sass";

import menuBg from "../../public/assets/img/Menu/menuBg1.jpg";
import menuBgIpad from "../../public/assets/img/Menu/ipadMenuBg.jpg";
import menuBgMob from "../../public/assets/img/Menu/menuBgMob.jpg";
import menuBgPc from "../../public/assets/img/Menu/menuBgPC.jpg";

import Link from "next/link";

// @ts-ignore
import { motion } from "framer-motion";

import SotialIconFooter from "../SotialIconFooter/SotialIconFooter";
import { v4 as uuidv4 } from "uuid";
import { footerMenu, sotials } from "../../hoc/Footer/Footer";
import useWindowWidth from "react-hook-use-window-width";
import { useEffect, useState } from "react";

interface IMenu {
  isMenuOpen: boolean;
  setMenuOpen: any;
}

const Menu = ({ isMenuOpen, setMenuOpen }: IMenu) => {
  const fadeIn = {
    hidden: {
      opacity: 0,
      // pointerEvents: "none",
    },
    visible: {
      opacity: 1,
      // pointerEvents: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const scale = {
    hidden: {
      scale: 1,
    },
    visible: {
      scale: 1.05,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [bgImage, setBgImage] = useState<string>(menuBg.src);

  const width = useWindowWidth();
  useEffect(() => {
    if (width > 1355) {
      setBgImage(menuBg.src);
    } else if (width <= 1366 && width > 1200) {
      setBgImage(menuBgPc.src);
    } else if (width <= 1200 && width > 576) {
      setBgImage(menuBgIpad.src);
    } else if (width <= 576) {
      setBgImage(menuBgMob.src);
    }
  }, [width]);

  const clickMenuHandler = () => {
    setMenuOpen(false);
  };

  return (
    <motion.div
      key={"modal"}
      variants={fadeIn}
      initial={"hidden"}
      animate={isMenuOpen ? "visible" : "hidden"}
      className={styles.Menu}
    >
      <motion.img
        variants={scale}
        className={styles.bgImage}
        src={bgImage}
        alt="menuBg"
      />
      <ul className={styles.menuItems}>
        {footerMenu.map((menuItem, index) => (
          <li
            onClick={clickMenuHandler}
            key={uuidv4() + index}
            className={styles.menuItem}
          >
            <Link href={menuItem.link}>
              <a>{menuItem.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="container">
        <div className={styles.socials}>
          {sotials.map((sotial, index) => (
            <SotialIconFooter
              link={sotial.link}
              key={uuidv4() + index}
              icon={sotial.icon}
              active={sotial.active}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
