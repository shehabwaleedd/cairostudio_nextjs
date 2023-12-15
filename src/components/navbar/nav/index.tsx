import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';

// Define a type for the link structure
type Link = {
    title: string;
    href: string;
};

// Define the links array with the Link type
const links: Link[] = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Work", href: "/work" },
    { title: "Case Studies", href: "/case-study" },
    { title: "Studio", href: "/about" },
    { title: "Contact", href: "/contact" },
];

// Define a type for the selected link state
type SelectedLink = {
    isActive: boolean;
    index: number;
};

const Index: React.FC = () => {
    const [selectedLink, setSelectedLink] = useState<SelectedLink>({ isActive: false, index: 0 });

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={height}
            className={styles.nav}>

            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                    <Footer />
                </div>
            </div>
        </motion.div>
    );
};

export default Index;
