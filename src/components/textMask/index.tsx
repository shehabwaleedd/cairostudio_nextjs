import React from 'react';
import mainVideoPlaceholder from "../../../public/assets/mainVideoPlaceholder.webp"
import styles from './style.module.scss';

const TextMask: React.FC = () => {

    return (
        <section className={styles.textMask}>
            <div className={styles.textMask__container}>
                <video loop autoPlay muted playsInline src="/mainVideo2.mp4" poster={mainVideoPlaceholder.src} security='restricted' preload="metadata" />
                <div className={styles.absText}>
                    <h3>
                        CAIRO STUDIO
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default TextMask;
