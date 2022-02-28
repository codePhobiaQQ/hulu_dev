import styles from "./ArrowDown.module.sass";
import arrow from "./../../public/assets/svg/Arrow.svg";
import circle from "./../../public/assets/svg/Circle.svg";
// @ts-ignore
import * as Scroll from "react-scroll";
const Link = Scroll.Link;

const ArrowDown = () => {
  return (
    <Link
      className={styles.arrowWrapper}
      to={"BiographySection"}
      smooth={true}
      duration={700}
    >
      <img className={styles.circle} src={circle.src} alt="circle" />
      <img className={styles.arrow} src={arrow.src} alt="arrow" />
    </Link>
  );
};

export default ArrowDown;
