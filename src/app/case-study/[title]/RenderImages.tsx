import React from 'react';
import styles from "./page.module.scss";
import Image from 'next/image';

interface Item {
    isImg: boolean;
    image: string;
}

interface RenderImagesProps {
    items?: Item[];
}

const RenderImages: React.FC<RenderImagesProps> = ({ items }) => {
    if (!items) return null;
    return (
        <div className={styles.prdeco__collective1}>
            {items.map((item, index) => (
                <div className={styles.prdeco__collective1__item} key={`item-${index}`}>
                    {item.isImg ? (
                        <Image src={item.image} alt={`Image ${index}`} loading="lazy" key={`image-${index}`} width={600} height={600}/>
                    ) : (
                        <video src={item.image} autoPlay loop muted playsInline title={`Video ${index}`} key={`video-${index}`} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default RenderImages;
