import styles from "./Footer.module.sass";
import LogoFooter from "./../../public/assets/svg/LogoFooter.svg";
import SotialIconFooter, {
  ISotial,
} from "../../components/SotialIconFooter/SotialIconFooter";
import { v4 as uuidv4 } from "uuid";

import spotify from "./../../public/assets/svg/sotials/Spotify.svg";
import spotifyActive from "./../../public/assets/svg/sotials/SpotifyActive.svg";

import sber from "./../../public/assets/svg/sotials/sber.svg";
import sberActive from "./../../public/assets/svg/sotials/sberActive.svg";

import appleMusic from "./../../public/assets/svg/sotials/appleMusic.svg";
import appleMusicActive from "./../../public/assets/svg/sotials/appleMusicActive.svg";

import yandexMusic from "./../../public/assets/svg/sotials/yandexMusic.svg";
import yandexMusicActive from "./../../public/assets/svg/sotials/yandexMusicActive.svg";

import vkMusic from "./../../public/assets/svg/sotials/vkMusic.svg";
import vkMusicActive from "./../../public/assets/svg/sotials/vkMusicActive.svg";

import insp from "./../../public/assets/svg/insp.svg";
import Link from "next/link";
import BtnSubscribe from "../../components/BtnSubscribe/BtnSubscribe";
import { useRouter } from "next/router";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

interface IFooter {
  children?: React.ReactNode;
}

interface IMenu {
  title: string;
  link: string;
}

export const sotials: ISotial[] = [
  {
    icon: spotify.src,
    active: spotifyActive.src,
    link: "#",
  },
  {
    icon: vkMusic.src,
    active: vkMusicActive.src,
    link: "#",
  },
  {
    icon: yandexMusic.src,
    active: yandexMusicActive.src,
    link: "#",
  },
  {
    icon: appleMusic.src,
    active: appleMusicActive.src,
    link: "#",
  },
  {
    icon: sber.src,
    active: sberActive.src,
    link: "#",
  },
];

export const footerMenu: IMenu[] = [
  {
    title: "Biography",
    link: "/#BiographySection",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
  {
    title: "Videos",
    link: "/videos",
  },
  {
    title: "Concerts",
    link: "/concerts",
  },
  {
    title: "News",
    link: "/news",
  },
  {
    title: "Contacts",
    link: "/#Contacts",
  },
];

const Footer = ({ children }: IFooter) => {
  const router = useRouter();
  const currentLink = router.asPath;

  return (
    <>
      {children}
      <div className="container" id={"Contacts"}>
        <div className={styles.Footer}>
          <div className={styles.leftSide}>
            <Link href="/">
              <a>
                <img src={LogoFooter.src} alt="LogoFooter" />
              </a>
            </Link>
            <span>Защита персональных данных</span>
            <span>Политика конфиденциальности</span>
          </div>
          <div className={styles.centerSide}>
            <ul>
              {footerMenu.map((link, index) => (
                <li key={uuidv4() + index}>
                  <Link href={link.link}>
                    <a
                      className={currentLink == link.link ? styles.active : ""}
                    >
                      {link.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              <li>
                <VideoPlayer
                  styling={{
                    position: "relative",
                    right: "inherit",
                    bottom: "inherit",
                    top: "inherit",
                  }}
                  label={"S. Rachmaninov - Sonata for cello and piano.."}
                />
              </li>
              <li>
                <a href="#" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.sotials}>
              {sotials.map((sotial, index) => (
                <SotialIconFooter
                  link={sotial.link}
                  key={uuidv4() + index}
                  icon={sotial.icon}
                  active={sotial.active}
                />
              ))}
            </div>
            <div className={styles.mobSocials}>
              <li>
                <a href="#" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Youtube
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Facebook
                </a>
              </li>
            </div>
            {/* <div className={styles.contact}>*/}
            {/*  <span className={styles.name}>Phone:</span>*/}
            {/*  <a href="#" className={styles.value}>*/}
            {/*    8-800-123-45-67*/}
            {/*  </a>*/}
            {/* </div>*/}
            <div className={styles.contact}>
              <span className={styles.name}>Email:</span>
              <a href="#" className={styles.value}>
                info@ivanskanavi.com
              </a>
            </div>
            <div className={styles.subscribeWrapper}>
              <input type="email" />
              <BtnSubscribe customClass={"footerSubscribe"} />
            </div>
            <div className={styles.whoMake}>
              <span>Website development</span>
              <a href="#">
                <img src={insp.src} alt="insspiration" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
