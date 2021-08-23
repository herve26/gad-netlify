import styles from "./Li.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Li({ path, title }) {
  const router = useRouter();
  return (
    <li
      className={`${styles.item} ${
        router.pathname === path ? styles.active : ""
      }`}
    >
      <Link href={path}>{title}</Link>
    </li>
  );
}
