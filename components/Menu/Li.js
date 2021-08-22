import { useState } from 'react';
import styles from './Menu.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Li({path, title}){
  const router = useRouter()
  const [isHover, setIsHover] = useState(false);
  console.log(isHover)
  return (
    <li 
      className={`${styles.item} ${router.pathname === path ? styles.active: ""} ${isHover ? "hover" : ""}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link href={path}>{title}</Link>
    </li>
  )
}