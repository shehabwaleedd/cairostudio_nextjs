import React, { useState } from 'react';
import styles from "./insideLayout.module.scss";
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import { motion, AnimatePresence } from 'framer-motion';

interface InsideSliderProps {
    selectedProject: any;
}

const InsideSlider: React.FC<InsideSliderProps> = ({ selectedProject }) => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: false,
        mode: "snap",
        drag: true,
        rubberband: false,
        breakpoints: {
            "(min-width: 380px)": {
                slides: { perView: 2, spacing: 10 },
            },
            "(min-width: 768px)": {
                slides: { perView: 3, spacing: 20 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 4, spacing: 30 },
            },
        },
        slides: {
            perView: 1, spacing: 10, origin: "auto",
        },
    });

    const [selectedMedia, setSelectedMedia] = useState<{ type: string | null, src: string } | null>(null);

    const handleMediaClick = (type: string, src: string) => {
        setSelectedMedia({ type, src });
    };

    return (
        <>
            <div ref={sliderRef} className={`keen-slider ${styles.insdeSlider}`}>
                {selectedProject.collectiveItems?.find((item: any) => item.type === 'projectImages')?.items.map((detail: any, index: number) => (
                    <div className={`keen-slider__slide ${styles.projectsPageCo__details__container__item}`} key={index} onClick={() => handleMediaClick(detail.isImg ? 'image' : 'video', detail.image)}>
                        {detail.isImg ? (
                            <div className={styles.projectsPageCo__details__container__item__img}>
                                <Image src={detail.image} alt={`Project Img ${index}`} 
                                    priority={index < 4} 
                                width={500} height={300} />
                            </div>
                        ) : (
                            <div className={styles.projectsPageCo__details__container__item__video}>
                                <video src={detail.image} loop muted autoPlay playsInline />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div className={styles.fullscreen_overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMedia(null)}>
                        {selectedMedia.type === 'image' ? (
                            <Image src={selectedMedia.src} alt="Fullscreen Media" className={styles.fullScreenMedia} 
                                width={600} height={600}
                            />
                        ) : (
                            <video src={selectedMedia.src} controls className={styles.fullScreenMedia}  loop muted autoPlay playsInline/>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default InsideSlider;
