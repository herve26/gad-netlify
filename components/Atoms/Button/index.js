import Link from "next/link";

import styles from "./Button.module.scss";

export default function Button({ children, alt = false }) {
  return (
    <Link href="/" passHref>
      <a className={`${styles.button} ${alt ? styles.alt : ""}`}>{children}</a>
    </Link>
  );
}
