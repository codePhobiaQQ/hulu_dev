import styles from "./BtnSubscribe.module.sass";
import telegram from "../../public/assets/svg/sotials/Telegram.svg";

interface IBtnSubscribe {
  type?: boolean;
  customClass?: string;
}

const BtnSubscribe = ({ type, customClass }: IBtnSubscribe) => {
  return (
    <div className={customClass ? customClass : ""}>
      <button type={type ? "submit" : undefined} className={styles.subscribe}>
        <div className={styles.subBtn}>
          <img src={telegram.src} alt="telegram" />
          <span>Subscribe</span>
        </div>
      </button>
    </div>
  );
};

export default BtnSubscribe;
