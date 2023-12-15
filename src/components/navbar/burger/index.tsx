import { motion } from 'framer-motion';
import styles from './style.module.scss';
import Link from 'next/link';

// Define your animation variants
const buttonVariants = {
    open: {
        backgroundColor: "var(--accent-color)",
        transition: { duration: 0.2 }
    },
    closed: {
        backgroundColor: "var(--container-color)",
        transition: { duration: 0.2 }
    }
};

const textVariants = {
    open: {
        color: "var(--container-color)",
        transition: { duration: 0.2 }
    },
    closed: {
        color: "var(--background-color)",
        transition: { duration: 0.2 }
    }
};

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
                variants={buttonVariants}
                animate={navOpen ? "open" : "closed"}
            >
                <div className={styles.background}></div>
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
