'use client'
import React from 'react';
import styles from "./style.module.scss";
import Link from 'next/link';



const AboutUs: React.FC = () => {
    return (
        <div className={styles.aboutus}>
            <p>
                BIG STUDIO THINKING, SMALL STUDIO PASSION
            </p>
            <Link href="/about">
                More About Us
            </Link>
        </div>
    );
};

export default AboutUs;
