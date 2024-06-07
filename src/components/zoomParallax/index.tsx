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

    const scale4 = useTransform(scrollYProgress, [0, 1], [2, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: "https://res.cloudinary.com/ds20vy7zo/video/upload/v1717735525/folio_lxledq.mp4",
            scale: scale4,
            isImg: false
        },

    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({ src, scale, isImg }, index) => {
                        return <motion.div key={index} style={{ scale }} className={styles.el}>
                            <div className={styles.imageContainer}>
                                {isImg ? <Image src={src} alt="" fill /> : <video src={src} autoPlay loop muted playsInline></video>}
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
