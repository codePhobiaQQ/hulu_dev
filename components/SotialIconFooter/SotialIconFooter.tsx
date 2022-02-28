import styles from "./SotialIconFooter.module.sass";
import { motion } from "framer-motion";

export interface ISotial {
  icon: string;
  active: string;
  link: string;
}

const SotialIconFooter = ({ icon, active, link }: ISotial) => {
  return (
    <div className={styles.sotial}>
      <a href={link} target="_blank">
        <img src={icon} />
        <motion.img
          whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
          src={active}
        />
      </a>
    </div>
  );
};

export default SotialIconFooter;
