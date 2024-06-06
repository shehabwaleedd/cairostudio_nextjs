import React from 'react';
import { motion } from "framer-motion";
import styles from "./page.module.scss";

interface Item {
    isImg: boolean;
    image: string;
}

interface RenderImagesProps {
    items?: Item[];
    translateY: any;  // Replace 'any' with the correct type if possible
}

const RenderImages: React.FC<RenderImagesProps> = ({ items, translateY }) => {
    if (!items) return null;
    return (
        <motion.div className={styles.prdeco__collective1}>
            {items.map((item, index) => (
                <motion.div className={styles.prdeco__collective1__item} key={`item-${index}`}>
                    {item.isImg ? (
                        <motion.img src={item.image} alt={`Image ${index}`} style={{ translateY }} loading="lazy" key={`image-${index}`} />
                    ) : (
                        <motion.video src={item.image} autoPlay loop muted playsInline title={`Video ${index}`} style={{ translateY }} key={`video-${index}`} />
                    )}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default RenderImages;
