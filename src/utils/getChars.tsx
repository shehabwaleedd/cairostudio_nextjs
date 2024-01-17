import React from 'react';
import { translate } from "../components/navbar/anim";
import { motion } from "framer-motion"

const getChars = (word: string) => {
    return word.split("").map((char, i) => (
        <motion.h1
            custom={[i * 0.02, (word.length - i) * 0.01]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
            key={char + i}
        >
            {char === " " ? "\u00A0" : char}
        </motion.h1>
    ));
};

export default getChars;