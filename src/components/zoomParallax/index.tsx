import styles from './styles.module.scss';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Index() {


    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: "/assets/images/folio.mp4",
            scale: scale4,
            isImg: false
        },
        {
            src: "/assets/images/mainVideo.mp4",
            scale: scale5,
            isImg: false
        },
        {
            src: "/assets/images/mainVideo22.mp4",
            scale: scale5,
            isImg: false
        },
        
        {
            src: "/assets/images/Artboard 1.webp",
            scale: scale5,
            isImg: false
        },
        {
            src: "/assets/images/element1.mp4",
            scale: scale6,
            isImg: false
        },
        {
            src: "/assets/images/business cardss.png",
            scale: scale8,
            isImg: true
        },
        {
            src: "/assets/images/mainVideo copy.mp4",
            scale: scale9,
            isImg: false
        }
    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({ src, scale, isImg }, index) => {
                        return <motion.div key={index} style={{ scale }} className={styles.el}>
                            <div className={styles.imageContainer}>
                                {isImg ? <Image src={src} alt="" fill/> : <video src={src} autoPlay loop muted playsInline></video>}
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
