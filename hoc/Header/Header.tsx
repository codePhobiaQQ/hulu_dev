import Logo from "../../public/assets/svg/Logo.svg";
import LogoGrey from "../../public/assets/svg/LogoGrey.svg";
import LogoWhite from "../../public/assets/svg/LogoWhite.svg";
import Link from "next/link";
import Menu from "../../components/Menu";
import Head from "next/head";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import FooterSection from "../../sections/FooterSection";
import { useRouter } from "next/router";
import { MotionValue } from "framer-motion";
import ConnectPopup from "../../components/popups/ConnectPopup";
import { route } from "next/dist/server/router";
import Policity from "../../components/popups/Policity";

interface IHeader {
  children: React.ReactNode;
  setHide?: Dispatch<SetStateAction<boolean>>;
  setColorMode?: Dispatch<SetStateAction<string>>;
  colorMode?: string;
  scrolling?: MotionValue<number>;

  dashboardOffset?: number;
  dashboardHeight?: number;
}

const Header = ({
  children,
  setHide,
  setColorMode,
  colorMode,
  dashboardOffset,
  dashboardHeight,
  scrolling,
}: IHeader) => {
  const [open, setOpen] = useState<boolean>(false);
  const [close, setClose] = useState<boolean>(true);

  const [connectOpen, setConnectOpen] = useState<boolean>(false);
  const [policityOpen, setPolicityOpen] = useState<boolean>(false);

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
  const [activeLogo, setActiveLogo] = useState<number>(0);

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
      title.current?.classList.add("stroke");
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
    title.current?.classList.remove("stroke");
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
  }

  const whatLogo = () => {
    // @ts-ignore
    if (activeLogo == 0) {
      return LogoGrey.src;
    } else if (activeLogo == 1) {
      return Logo.src;
    }
  };

  useEffect(() => {
    const show = async () => {
      setTimeout(() => {
        setConnectOpen(true);
      }, 30000);
    };
    show();
  }, []);

  // useEffect(() => {
  //   // @ts-ignore
  //   scrolling?.onChange(() => {
  //     // @ts-ignore
  //     // console.log(scrolling.current);
  //     // console.log(dashboardOffset);
  //
  //     if (
  //       // @ts-ignore
  //       scrolling?.current < dashboardOffset + dashboardHeight &&
  //       // @ts-ignore
  //       scrolling?.current > dashboardOffset
  //     ) {
  //       if (activeLogo != 1) {
  //         console.log("here0");
  //         setActiveLogo(1);
  //       }
  //     } else {
  //       console.log("here1");
  //       if (activeLogo == 1) {
  //         setActiveLogo(0);
  //       }
  //     }
  //   });
  // }, [scrolling, dashboardOffset]);

  return useMemo(
    () => (
      <>
        <Head>
          <title>Huntli</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <div className={"header " + colorMode}>
          <div className={"headerInner"}>
            <Link href="/">
              <a className={open ? "logo menuOpen" : "logo"}>
                <img src={whatLogo()} alt="Logo" />
              </a>
            </Link>
            <div onClick={toggleClass} className="hamburger-wrapper">
              <div className="hamburger-container">
                <div
                  className={open ? "hamburger active" : "hamburger active"}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {children}
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
        <FooterSection setPolicityOpen={setPolicityOpen} />
        <Policity
          setPolicityOpen={setPolicityOpen}
          policityOpen={policityOpen}
        />
        <ConnectPopup
          connectOpen={connectOpen}
          setConnectOpen={setConnectOpen}
        />
      </>
    ),
    [close, open, activeLogo, dashboardOffset, connectOpen, policityOpen]
  );
};

export default Header;
