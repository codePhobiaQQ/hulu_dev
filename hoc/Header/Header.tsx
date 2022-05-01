import Link from "next/link";
import Menu from "../../components/Menu";
import Head from "next/head";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import FooterSection from "../../sections/FooterSection";
import { MotionValue } from "framer-motion";
import ConnectPopup from "../../components/popups/ConnectPopup";
import Policity from "../../components/popups/Policity";
import Logo from "../../components/UI/Logo";

interface IHeader {
  children: React.ReactNode;
  setColorMode?: Dispatch<SetStateAction<string>>;
  colorMode?: string;
  scrolling?: MotionValue<number>;
  dashboardOffset?: number;
  dashboardHeight?: number;
  isLightLogo: boolean;
  isHide: boolean;
}

const Header = ({
  children,
  colorMode,
  dashboardOffset,
  isLightLogo,
  isHide,
}: IHeader) => {
  const [open, setOpen] = useState<boolean>(false);
  const [connectOpen, setConnectOpen] = useState<boolean>(false);
  const [policityOpen, setPolicityOpen] = useState<boolean>(false);

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
            isHide ? "header hide " + colorMode : "header " + colorMode
          }
        >
          <div className={"headerInner"}>
            <Link href="/">
              <a className={open ? "logo menuOpen" : "logo"}>
                <Logo isLightLogo={isLightLogo} />
              </a>
            </Link>
            <div
              onClick={() => setOpen(true)}
              className={
                isLightLogo ? "hamburger-wrapper" : "hamburger-wrapper dark"
              }
            >
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
    [open, dashboardOffset, connectOpen, policityOpen, isHide, isLightLogo]
  );
};

export default Header;
