import Logo from "../../public/assets/svg/Logo.svg";
import LogoGrey from "../../public/assets/svg/LogoGrey.svg";
import LogoWhite from "../../public/assets/svg/LogoWhite.svg";
import Link from "next/link";
import Menu from "../../components/Menu";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import FooterSection from "../../sections/FooterSection";
import { useRouter } from "next/router";
import { fadeIn } from "../../motions/MainSection.motion";

interface IHeader {
  children: React.ReactNode;
  setHide?: Dispatch<SetStateAction<boolean>>;
  setColorMode?: Dispatch<SetStateAction<string>>;
  colorMode?: string;
}

const Header = ({ children, setHide, setColorMode, colorMode }: IHeader) => {
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

  const link = useRouter();

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
    if (setHide) {
      setHide(true);
    }
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
      setClose(false);
    }, 2200);
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
      if (setHide) {
        setHide(false);
      }
      setOpen(false);
    }, 500);

    // setTimeout(() => {
    //
    // }, 600);
  }

  const settingColor = (color: string): any => {
    if (setColorMode) {
      setColorMode(color);
      if (typeof window !== "undefined") {
        localStorage.setItem("color", color);
      }
    }
  };

  const whatLogo = () => {
    if (link.pathname == "/blog/[id]") {
      if (colorMode == "black") return Logo.src;
      else if (colorMode == "grey") return LogoGrey.src;
      else return LogoWhite.src;
    } else {
      return Logo.src;
    }
  };

  return (
    <>
      <div className={"header " + colorMode}>
        <div className={"headerInner"}>
          <Link href="/">
            <a className={open ? "logo menuOpen" : "logo"}>
              <img src={whatLogo()} alt="Logo" />
            </a>
          </Link>
          {link.pathname == "/blog/[id]" && (
            <div className="colors">
              <div
                onClick={() => settingColor("black")}
                className="color"
              ></div>
              <div className="color" onClick={() => settingColor("grey")}></div>
              <div
                className="color"
                onClick={() => settingColor("white")}
              ></div>
            </div>
          )}
          <div onClick={toggleClass} className="hamburger-wrapper">
            <div className="hamburger-container">
              <div className={open ? "hamburger active" : "hamburger"}></div>
            </div>
          </div>
        </div>
      </div>
      <Menu
        setOpen={setOpen}
        toggleClass={toggleClass}
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
      <FooterSection />
    </>
  );
};

export default Header;
