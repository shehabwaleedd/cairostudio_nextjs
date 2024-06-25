import React from 'react';
import { translate } from "../../components/navbar/anim";
import { motion } from "framer-motion"
import styles from "./style.module.scss"

const AnimatedSpans = ({ word }: { word: string }) => {
    return word.split("").map((char, i) => (
        <div className={`${styles.animatedSpans}`} key={char + i}>
            <motion.p
                custom={[i * 0.02, (word.length - i) * 0.01]}
                variants={translate}
                initial="initial"
                animate="enter"
                className="letter1"
                exit="exit">
                {char === " " ? "\u00A0" : char}
            </motion.p>
        </div>
    ));
};

export default AnimatedSpans;