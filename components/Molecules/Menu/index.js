import { Li } from "@components/Atoms";

import styles from "./Menu.module.scss";

export default function Menu({ navigation }) {
  const navArray = navigation.map((nav) => (
    <Li key={nav.path} title={nav.title} path={nav.path} />
  ));
  return <ul className={styles.menu}>{navArray}</ul>;
}
