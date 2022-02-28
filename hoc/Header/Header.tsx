import styles from "./Header.module.sass";

interface IHeader {
  children: React.ReactNode;
}

const Header = ({ children }: IHeader) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>logo</div>
        <div className={styles.rightElements}></div>
      </div>
      {children}
    </div>
  );
};

export default Header;
