'use client'
import React from 'react';
import styles from "@/app/studio/page.module.scss";
import getChars from '@/animations/animatedHeaders/getChars';

interface HeaderProps {
    header: string[];
}

const Header: React.FC<HeaderProps> = ({ header }) => {
    return (
        <header className={styles.about__title}>
            {header.map((headerText, index) => (
                <div key={index} className={styles.headers}>
                    {getChars(headerText)}
                </div>
            ))}
        </header>
    );
};

export default Header;
