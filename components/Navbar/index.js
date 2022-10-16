
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'

import styles from './styles.module.css'

export default function Navbar() {

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <Image src={"/images/hapivida-logo.png"} width={153} height={91} />
        <nav>
          <ul className={styles.navList}>
            <li className={styles.listItem}>Quem Somos</li>
            <li className={styles.listItem}>
              <Link href="#duvidas"><a>Dúvidas</a></Link>
            </li>
            <li className={styles.listItem}>Contato</li>
          </ul>
          <div className={styles.navMenu} onClick={() => setToggle(!toggle)}>
            <div className={`${styles.bar1} ${toggle ? styles.changeBar1 : ''}`}></div>
            <div className={`${styles.bar2} ${toggle ? styles.changeBar2 : ''}`}></div>
            <div className={`${styles.bar3} ${toggle ? styles.changeBar3 : ''}`}></div>
          </div>
        </nav>
      </header>
      <ul className={toggle ? styles.navMobileShow : styles.navMobileHidden}>
        <li className={styles.navHiddenItem}>Quem Somos</li>
        <li className={styles.navHiddenItem} onClick={() => setToggle(false)}>
          <Link href="#duvidas"><a>Dúvidas</a></Link>
        </li>
        <li className={styles.navHiddenItem}>Contato</li>
      </ul>
    </>
  )
}