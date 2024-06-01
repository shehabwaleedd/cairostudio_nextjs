import React, { useRef } from 'react';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';
import { AnimatedTextProps } from '@/common/types';

const AnimatedText: React.FC<AnimatedTextProps> = ({ data }) => {
    const { title, speed } = data;
    const container = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${20 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;


    return (
        <div ref={container} className="title">
            {window.innerWidth > 768 ? (
                <div className="wrapper">
                    <motion.p style={{ clipPath: clip }}>
                        {title}
                    </motion.p>
                    <p>
                        {title}
                    </p>
                </div>
            ) : (
                <div className="wrapper">
                    <p>
                        {title}
                    </p>
                </div>
            )}
        </div>
    );
};

export default AnimatedText;