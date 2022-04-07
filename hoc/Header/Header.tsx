import Logo from "../../public/assets/svg/Logo.svg";
import LogoGrey from "../../public/assets/svg/LogoGrey.svg";
import LogoWhite from "../../public/assets/svg/LogoWhite.svg";
import Link from "next/link";
import Menu from "../../components/Menu";
import Head from "next/head";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
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

  const [connectOpen, setConnectOpen] = useState<boolean>(false);
  const [policityOpen, setPolicityOpen] = useState<boolean>(false);

  const link = useRouter();
  const [activeLogo, setActiveLogo] = useState<number>(0);

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
            <div onClick={() => setOpen(true)} className="hamburger-wrapper">
              <div className="hamburger-container">
                <div className={"hamburger active"}></div>
              </div>
            </div>
          </div>
        </div>
        {children}
        <Menu setOpen={setOpen} />
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
    [open, activeLogo, dashboardOffset, connectOpen, policityOpen]
  );
};

export default Header;
