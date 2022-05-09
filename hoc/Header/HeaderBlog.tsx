import Logo from "../../public/assets/svg/Logo.svg";
import LogoGrey from "../../public/assets/svg/LogoGrey.svg";
import LogoWhite from "../../public/assets/svg/LogoWhite.svg";
import Link from "next/link";
import Menu from "../../components/Menu";
import Head from "next/head";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import FooterSection from "../../sections/FooterSection";
import { useRouter } from "next/router";
import { MotionValue } from "framer-motion";
import ConnectPopup from "../../components/popups/ConnectPopup";
import Policity from "../../components/popups/Policity";

interface IHeader {
  children: React.ReactNode;
  setHide?: Dispatch<SetStateAction<boolean>>;
  setColorMode?: Dispatch<SetStateAction<string>>;
  colorMode?: string;
  dashboardOffset?: number;
  dashboardHeight?: number;
}

const HeaderBlog = ({ children, setColorMode, colorMode }: IHeader) => {
  const [open, setOpen] = useState<boolean>(false);

  const [connectOpen, setConnectOpen] = useState<boolean>(false);
  const link = useRouter();
  const [activeLogo, setActiveLogo] = useState<number>(0);

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
      // @ts-ignore
      if (activeLogo == 0) {
        return Logo.src;
      } else if (activeLogo == 1) {
        return LogoGrey.src;
      }
    }
  };

  console.log();

  return (
    <>
      <Head>
        <title>Huntli Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={"header headerBlog " + colorMode}>
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
              <div
                className="color"
                onClick={() => settingColor("white")}
              ></div>
            </div>
          )}
          <div
            onClick={() => setOpen(true)}
            className={
              colorMode != "white"
                ? "hamburger-wrapper"
                : "hamburger-wrapper dark"
            }
          >
            <div className="hamburger-container">
              <div
                className={open ? "hamburger active" : "hamburger active"}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <Menu setOpen={setOpen} open={open} />
      <FooterSection />
      <Policity />
      <ConnectPopup connectOpen={connectOpen} setConnectOpen={setConnectOpen} />
    </>
  );
};

export default HeaderBlog;
