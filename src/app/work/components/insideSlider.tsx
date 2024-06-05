import React from 'react';
import styles from "./insideLayout.module.scss";
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';

interface InsideSliderProps {
    selectedProject: any;
    handleMediaClick: (type: "image" | "video", media: string) => void;
}

const InsideSlider: React.FC<InsideSliderProps> = ({ selectedProject, handleMediaClick }) => {
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

    const handleImageClick = (e: React.MouseEvent, type: "image" | "video", media: string) => {
        e.stopPropagation();  // Prevents the event from bubbling up
        handleMediaClick(type, media);
    };

    return (
        <div ref={sliderRef} className={`keen-slider ${styles.keenSlider}`}>
            {selectedProject.collectiveItems?.find((item: any) => item.type === 'projectImages')?.items.map((detail: any, index: number) => (
                <div
                    className={`keen-slider__slide ${styles.projectsPageCo__details__container__item}`}
                    key={index}
                    onClick={(e) => handleImageClick(e, detail.isImg ? 'image' : 'video', detail.image)}
                >
                    {detail.isImg ? (
                        <div className={styles.projectsPageCo__details__container__item__img}>
                            <Image
                                src={detail.image}
                                alt={`Project Img ${index}`}
                                loading="lazy"
                                layout="fill"
                                objectFit="cover"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleImageClick(e, 'image', detail.image);
                                }}
                            />
                        </div>
                    ) : (
                        <div className={styles.projectsPageCo__details__container__item__video}>
                            <video
                                src={detail.image}
                                loop
                                muted
                                autoPlay
                                playsInline
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleImageClick(e, 'video', detail.image);
                                }}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default InsideSlider;
