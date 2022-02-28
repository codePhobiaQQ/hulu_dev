import styles from "./MainSection.module.sass";
import bg from "../../public/assets/img/mainSection/bgMain1.jpg";
import mediumPc from "../../public/assets/img/mainSection/mediumPc.jpg";
import bgIpad from "../../public/assets/img/mainSection/mainBgIpad.jpg";
import bgMob from "../../public/assets/img/mainSection/mainBgMob.jpg";

import { wrapperVariant, bgImageVariant } from "../../motions/motions";
import { contentVariant, connectVariant } from "../../motions/mainMotion";

import { motion, useTransform, useViewportScroll } from "framer-motion";

import ArrowDown from "../../components/ArrowDown/ArrowDown";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { useEffect, useState } from "react";
import useWindowWidth from "react-hook-use-window-width";

const MainSection = () => {
  const [bgImage, setBgImage] = useState<string>(bg.src);

  const width = useWindowWidth();
  useEffect(() => {
    if (width > 1355) {
      setBgImage(bg.src);
    } else if (width <= 1366 && width > 992) {
      setBgImage(mediumPc.src);
    } else if (width <= 992 && width > 756) {
      setBgImage(bgIpad.src);
    } else if (width <= 756) {
      setBgImage(bgMob.src);
    }
  }, [width]);

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, -100]);
  const x1 = useTransform(scrollY, [0, 400], [0, -100]);

  const y2 = useTransform(scrollY, [0, 800], [0, 250]);

  const opacity1 = useTransform(scrollY, [0, 400], [1, 0]);

  const mainWrapperVariant = wrapperVariant({ staggerChildren: 0.3 });
  const mainBgImageVariant = bgImageVariant({ delay: 0.5, duration: 1 });
  const mainContentVariant = contentVariant();
  const mainConnectVariant = connectVariant();

  return (
    <motion.section
      variants={mainWrapperVariant}
      initial="hidden"
      animate="visible"
      className={styles.MainSection}
      style={{ backgroundImage: bg.src }}
    >
      <motion.img
        variants={mainBgImageVariant}
        className={styles.backgroundImg}
        src={bgImage}
        style={{ translateY: y2 }}
        alt="bg"
      />

      <motion.div
        variants={mainContentVariant}
        style={{ translateY: y1, opacity: opacity1 }}
        className={styles.content}
      >
        <h1>Cellist Ivan Skanavi</h1>
        <span>Concerts / Performances</span>
      </motion.div>

      <motion.div
        variants={mainConnectVariant}
        style={{ translateX: x1, opacity: opacity1 }}
        className={styles.connect}
      >
        <span>Связаться с менеджером</span>
      </motion.div>

      {width > 756 ? (
        <VideoPlayer label={"S. Rachmaninov - Sonata for cello and piano.."} />
      ) : null}
      {width > 756 ? <ArrowDown /> : null}
    </motion.section>
  );
};

export default MainSection;
