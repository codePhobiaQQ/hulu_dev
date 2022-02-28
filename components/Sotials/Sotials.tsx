import styles from "./Sotials.module.sass";
import Instagram from "../svg/instagram";
import Youtube from "../svg/youtube";
import Facebook from "../svg/facebook";

const Sotials = () => {
  return (
    <ul className={styles.sotialsInner}>
      <li>
        <a href="#" target="_blank">
          <Instagram />
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <Youtube />
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <Facebook />
        </a>
      </li>
    </ul>
  );
};

export default Sotials;
