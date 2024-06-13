import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUpRight } from "react-icons/fi";

const SocialsData = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/cairostudioo/',
        ariaLabel: 'Visit Cairo Studio on Instagram'
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/cairostudiooo/',
        ariaLabel: 'Visit Cairo Studio on Facebook'
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/cairostudioo',
        ariaLabel: 'Visit Cairo Studio on Twitter'
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/cairostudio/',
        ariaLabel: 'Visit Cairo Studio on LinkedIn'
    },
]

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                {SocialsData.map((item, index) => (
                    <motion.li
                        key={index}
                        custom={[0.3, 0]}
                        variants={translate}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                    >
                        <Link href={item.link} target='_blank' aria-label={item.ariaLabel}>
                            <span className="sr-only">{item.name}</span>
                            <FiArrowUpRight aria-hidden="true" />
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </footer>
    )
}
