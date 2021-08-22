
import styles from "./Menu.module.scss";

import Li from '@components/Menu/Li';

export default function Menu({navigation}) {
  console.log(navigation)
  const navArray = navigation.map(nav => <Li key={nav.path} title={nav.title} path={nav.path}/>)
  return (
    <ul className={styles.menu}>
      {navArray}
    </ul>
  );
}
