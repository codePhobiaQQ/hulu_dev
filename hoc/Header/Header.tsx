import Logo from "../../public/assets/svg/Logo.svg";
import Link from "next/link";
import Menu from "../../components/Menu";
import { useRef, useState } from "react";

interface IHeader {
  children: React.ReactNode;
}

const Header = ({ children }: IHeader) => {
  const [open, setOpen] = useState<boolean>(false);
  const [close, setClose] = useState<boolean>(true);

  const nav = useRef<HTMLElement>(null);
  const backgroundOne = useRef<HTMLElement>(null);
  const backgroundTwo = useRef<HTMLElement>(null);
  const line = useRef<HTMLElement>(null);
  const squares = useRef<HTMLElement>(null);
  const dustParticles = useRef<HTMLElement>(null);
  const social = useRef<HTMLElement>(null);
  const links = useRef<HTMLElement>(null);
  const title = useRef<HTMLElement>(null);

  const menuElems = [
    nav,
    backgroundOne,
    backgroundTwo,
    line,
    squares,
    dustParticles,
    social,
    links,
    title,
  ];

  const openMenu = () => {
    setOpen(true);
    menuElems.map((el) => el.current?.classList.add("active"));
    setTimeout(() => {
      backgroundTwo.current?.classList.add("bg-two-full-width");
      backgroundOne.current?.classList.add("bg-one-full-width");
    }, 500);

    setTimeout(() => {
      line.current?.classList.add("active");
    }, 1500);

    setTimeout(() => {
      links.current?.classList.add("active");
      title.current?.classList.add("active");
    }, 2000);

    setTimeout(() => {
      dustParticles.current?.classList.add("active");
      social.current?.classList.add("active");
    }, 2200);
    setTimeout(() => {
      setClose(false);
    }, 3200);
  };

  function toggleClass() {
    if (!open && close) {
      openMenu();
    } else if (!close && open) {
      closeMenu();
    }
  }

  function closeMenu() {
    setClose(true);
    menuElems.forEach((elem) => elem.current?.classList.remove("active"));

    line.current?.classList.remove("active");

    links.current?.classList.remove("active");
    title.current?.classList.remove("active");

    dustParticles.current?.classList.remove("active");
    social.current?.classList.remove("active");

    squares.current?.classList.remove("active");

    setTimeout(() => {
      backgroundTwo.current?.classList.remove("bg-two-full-width");
      backgroundOne.current?.classList.remove("bg-one-full-width");
    }, 500);

    setTimeout(() => {
      setOpen(false);
    }, 600);
  }

  return (
    <>
      <div className={"header"}>
        <div className={"headerInner"}>
          <Link href="/">
            <a className={open ? "logo menuOpen" : "logo"}>
              <img src={Logo.src} alt="Logo" />
            </a>
          </Link>
          <div onClick={toggleClass} className="hamburger-wrapper">
            <div className="hamburger-container">
              <div className={open ? "hamburger active" : "hamburger"}></div>
            </div>
          </div>
        </div>
      </div>
      <Menu
        nav={nav}
        backgroundOne={backgroundOne}
        backgroundTwo={backgroundTwo}
        dustParticles={dustParticles}
        line={line}
        links={links}
        social={social}
        title={title}
      />
      {children}
    </>
  );
};

export default Header;
