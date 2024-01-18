import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Case Studies",
    href: "/case-study",
  },
  {
    title: "Studio",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Index({ setNavOpen }) {

  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={height}
      className={styles.nav}>

      <div className={styles.wrapper}>
        <div className={styles.hamburger} onClick={() => setNavOpen(false)}>
          X
        </div>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
          <Footer />
        </div>
      </div>
    </motion.div >
  )
}