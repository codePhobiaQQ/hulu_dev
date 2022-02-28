import styles from "./BiographySection.module.sass";
import ivan from "../../public/assets/img/ivan.jpg";
import Viol from "../../components/svg/viol";
import ArrowRight from "../../components/ArrowRight/ArrowRight";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { wrapperVariant } from "../../motions/motions";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { imageVariant, textVariant } from "../../motions/bioMotions";

const BiographySection = () => {
  const [imageRef, imageInView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const [imageMobRef, imageMobInView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const [text1Ref, text1InView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const [text2Ref, text2InView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const [text3Ref, text3InView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <section id={"BiographySection"} className={styles.Biography}>
      <div className={styles.accent}>
        <span>Biography</span>
      </div>
      <div className="container">
        <div className={styles.biographyWrapper}>
          <motion.div
            ref={imageRef}
            variants={imageVariant}
            animate={imageInView ? "visible" : "hidden"}
            className={styles.imageWrapper}
          >
            <img src={ivan.src} alt="Ivan" />
          </motion.div>
          <div className={styles.textWrapper}>
            <motion.img
              ref={imageMobRef}
              variants={imageVariant}
              animate={imageMobInView ? "visible" : "hidden"}
              src={ivan.src}
              alt="Ivan"
            />
            <motion.p
              animate={text1InView ? "visible" : "hidden"}
              ref={text1Ref}
              variants={textVariant}
            >
              Иван Сканави родился в 1996 году в Москве в семье музыкантов.
              Заниматься на виолончели начал в ДМШ Академического музыкального
              колледжа при МГК им. П.И. Чайковского (класс заслуженного
              работника культуры РФ Т.Г. Алексеева). Позднее обучался в классе
              профессора Алексея Селезнёва в Академическом Музыкальном Колледже
              при Московской Государственной Консерватории и в Московской
              Консерватории им. П.И. Чайковского.
            </motion.p>
            <motion.p
              animate={text2InView ? "visible" : "hidden"}
              ref={text2Ref}
              variants={textVariant}
            >
              Участник концертов абонемента Московской консерватории
              «Музыкальные династии», фестивалей «Шереметьевские сезоны в
              Останкино», «I Mozartini» (Италия), Международного фестиваля им.
              М.И.Ростроповича (Баку).
            </motion.p>
            <motion.p
              animate={text3InView ? "visible" : "hidden"}
              ref={text3Ref}
              variants={textVariant}
            >
              Концертным симфоническим оркестром Московской Государственной
              Консерватории им. П.И. Чайковского, с Московским Камерным
              оркестром Центра Павла Слободкина, с Симфоническим оркестром
              Академического музыкального училища при МГК им. П.И. Чайковского,
              с Ансамблем солистов «Премьера», с Таллиннским камерным оркестром,
              с оркестром Südwestdeutsches Kammerorchester Pforzheim, с
              Зауральским симфоническим оркестром.
            </motion.p>
            <Viol />
          </div>
        </div>
        <a href={ivan.src} download className={styles.dowloadButton}>
          <span>Скачать биографию</span>
          <ArrowRight />
        </a>
      </div>
    </section>
  );
};

export default BiographySection;
