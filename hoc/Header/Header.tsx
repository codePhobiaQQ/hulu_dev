import Logo from "../../public/assets/svg/Logo.svg";
import Link from "next/link";
import Menu from "../../components/Menu";
import Head from "next/head";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import FooterSection from "../../sections/FooterSection";
import { MotionValue } from "framer-motion";
import ConnectPopup from "../../components/popups/ConnectPopup";
import Policity from "../../components/popups/Policity";

interface IHeader {
  children: React.ReactNode;
  setColorMode?: Dispatch<SetStateAction<string>>;
  colorMode?: string;
  scrolling?: MotionValue<number>;
  dashboardOffset?: number;
  dashboardHeight?: number;
}

const Header = ({ children, colorMode, dashboardOffset }: IHeader) => {
  const [open, setOpen] = useState<boolean>(false);

  const [connectOpen, setConnectOpen] = useState<boolean>(false);
  const [policityOpen, setPolicityOpen] = useState<boolean>(false);
  const [showOnScroll, setShowOnScroll] = useState(true);

  // useScrollPosition(
  //   ({ prevPos, currPos }) => {
  //     const isShow = currPos.y > prevPos.y;
  //     if (isShow !== showOnScroll) setShowOnScroll(isShow);
  //   },
  //   [showOnScroll],
  //   undefined,
  //   false,
  //   300
  // );
  //
  // useEffect(() => {
  //   const show = async () => {
  //     setTimeout(() => {
  //       setConnectOpen(true);
  //     }, 30000);
  //   };
  //   show();
  // }, []);

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

        <div
          className={
            showOnScroll ? "header " + colorMode : "header hide " + colorMode
          }
        >
          <div className={"headerInner"}>
            <Link href="/">
              <a className={open ? "logo menuOpen" : "logo"}>
                <img src={Logo.src} alt="Logo" />
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
        <Menu setOpen={setOpen} open={open} />
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
    [open, dashboardOffset, connectOpen, policityOpen, showOnScroll]
  );
};

export default Header;
