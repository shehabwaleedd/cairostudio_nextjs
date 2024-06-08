import React from 'react';
import { motion } from "framer-motion";
import styles from "./page.module.scss";

interface Option {
    text: string;
}

interface Section {
    options?: Option[];
}

interface RenderDetailsProps {
    leftSection?: Section;
    rightSection?: Section;
}

const RenderDetails: React.FC<RenderDetailsProps> = ({ leftSection, rightSection }) => {
    if (!leftSection || !rightSection) return null;
    return (
        <motion.div className={styles.prdeco__final}>
            <div className={styles.prdecofi__container}>
                <div className={styles.prdecofico__left}>
                    {leftSection?.options?.map((item, index) => (
                        <h2 key={`left-${index}`}>{item.text}</h2>
                    ))}
                </div>
                <div className={styles.prdecofico__right}>
                    {rightSection?.options?.map((item, index) => (
                        <div className={styles.prdecofico__right__item} key={`right-${index}`}>
                            <p key={`p-right-${index}`}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default RenderDetails;
