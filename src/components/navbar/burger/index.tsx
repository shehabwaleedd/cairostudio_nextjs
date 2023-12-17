import { motion } from 'framer-motion';
import styles from './style.module.scss';
import Link from 'next/link';
import { backgroundVariant, textVariants } from '../anim';

// Define the types for your props
type Props = {
    openMenu: () => void;
    isContactPage: boolean;
    navOpen: boolean;
};

const SubMenu: React.FC<Props> = ({ openMenu, isContactPage, navOpen }) => {
    const isntContactPageAndNavOpen = !isContactPage && !navOpen;
    return (
        <div className={styles.subMenu}>
            <motion.div
                onClick={() => openMenu()}
                className={styles.button}
            >
                <motion.div 
                    variants={backgroundVariant}
                    animate={navOpen ? "open" : "closed"}
                className={styles.background}></motion.div>
                <motion.p
                    variants={textVariants}
                    animate={navOpen ? "open" : "closed"}
                >
                    {navOpen ? "Close" : "Menu"}
                </motion.p>
            </motion.div>
            {isntContactPageAndNavOpen && (
                <Link href="/contact">
                    <p>Start Project</p>
                </Link>
            )}
        </div>
    );
};

export default SubMenu;
