import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './insideLayout.module.scss';

interface FullScreenOverlayProps {
    selectedMedia: { type: string | null, src: string };
    setSelectedMedia: (value: { type: string | null , src: string } | null) => void;
}

const FullScreenOverlay: React.FC<FullScreenOverlayProps> = ({ selectedMedia, setSelectedMedia }) => {
    return (
        <motion.div
            className={styles.fullscreen_overlay}
            onClick={() => setSelectedMedia(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {selectedMedia.type === 'image' && (
                <div className={styles.fullscreen_image_wrapper}>
                    <Image
                        src={selectedMedia.src}
                        alt="Full Screen"
                        layout="fill"
                        objectFit="contain"
                        className={styles.fullscreen_image}
                    />
                </div>
            )}
            {selectedMedia.type === 'video' && (
                <video
                    className={styles.fullscreen_video}
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    loop
                />
            )}
        </motion.div>
    );
};

export default FullScreenOverlay;
