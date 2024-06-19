import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './insideLayout.module.scss';

interface FullScreenOverlayProps {
    selectedMedia: { type: string | null, src: string };
    setSelectedMedia: (value: { type: string | null, src: string } | null) => void;
}

const FullScreenOverlay: React.FC<FullScreenOverlayProps> = ({ selectedMedia, setSelectedMedia }) => {
    const handleOverlayClick = () => {
        setSelectedMedia(null);
    };

    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <motion.div
            className={styles.fullscreen_overlay}
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={styles.fullscreen_image_wrapper} onClick={stopPropagation}>
                {selectedMedia.type !== 'video' && (
                    <Image
                        src={selectedMedia.src}
                        alt="Full Screen"
                        layout="fill"
                        objectFit="contain"
                        className={styles.fullscreen_image}
                        placeholder='blur'
                        blurDataURL={selectedMedia.src}
                    />
                )}
                {selectedMedia.type === 'video' && (
                    <video
                        className={styles.fullscreen_video}
                        src={selectedMedia.src}
                        controls
                        autoPlay
                        loop
                        onClick={stopPropagation}
                    />
                )}
            </div>

        </motion.div>
    );
};

export default FullScreenOverlay;
