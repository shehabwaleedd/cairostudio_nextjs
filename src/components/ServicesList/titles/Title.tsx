import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

interface TitleProps {
    data: {
        title: string;
        link: string;
    };

}

const Title: React.FC<TitleProps> = ({ data }) => {
    const { title } = data;


    return (
        <div className={styles.title}>
            <div className={styles.wrapper}>
                <Link href={data.link}>{title}</Link>
            </div>
        </div>
    );
};

export default Title;
