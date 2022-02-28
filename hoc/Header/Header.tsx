import styles from "./Header.module.sass";
import Languages from "../../components/Languages/Languages";
import Hamburger from "../../components/Hamburger/Hamburger";
import logo from "../../public/assets/svg/Logo.svg";
import Menu from "../../components/Menu/Menu";
import { useState } from "react";
import Sotials from "../../components/Sotials/Sotials";
import Link from "next/link";

interface IHeader {
  children: React.ReactNode;
}

const Header = ({ children }: IHeader) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo} onClick={() => setMenuOpen(false)}>
          <Link href="/">
            <a>
              <img src={logo.src} alt="Logo" />
              <span>
                Ivan <br />
                Skanavi
              </span>
            </a>
          </Link>
        </div>
        <div className={styles.rightElements}>
          <Languages />
          <Hamburger isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
      {children}
      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />}
      <Sotials />
    </>
  );
};

export default Header;
