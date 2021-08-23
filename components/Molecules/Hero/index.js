import styles from "./Hero.module.scss";

export default function Hero({ src, children }) {
  return (
    <div className={styles.hero}>
      <div className={styles.over}></div>
      <img src={src} alt="" />
      <div className={styles.text_container}>
        <div className={styles.text_block}>{children}</div>
      </div>
    </div>
  );
}
