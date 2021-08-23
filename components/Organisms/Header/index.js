import { Menu } from "@components/Molecules";
import styles from "./Header.module.scss";

import navigation from "/config/navigation";

export default function Header({ title }) {
  console.log(navigation);
  return (
    <header className={styles.header}>
      <div className={`page_container ${styles.container}`}>
        <div className={styles.logo}>GAD</div>
        <nav className={styles.nav}>
          <Menu navigation={navigation} />
        </nav>
      </div>
    </header>
  );
}
