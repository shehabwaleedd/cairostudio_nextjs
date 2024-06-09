import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUpRight } from "react-icons/fi";

const SocialsData = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/cairostudioo/'
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/cairostudiooo/'
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/cairostudioo'
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/cairostudio/'
    },
]

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                {SocialsData.map((item, index) => (
                    <motion.li
                        key={index}
                        custom={[0.3, 0]}
                        variants={translate} initial="initial"
                        animate="enter"
                        exit="exit">
                        <Link href={item.link}>{item.name}</Link>
                        <FiArrowUpRight />
                    </motion.li>
                ))}

            </ul>
        </div>
    )
}
