'use client'
import React from 'react';
import styles from "./style.module.scss";
import Link from 'next/link';
import Upper from '../upper';



const AboutUs: React.FC = () => {
    return (
        <>
            <Upper p1="ABOUT US" p2="03" p3='' h2="ABOUT US" span="CAIRO STUDIO" secondRow={false} />
            <div className={styles.aboutus}>
                <p>
                    BIG STUDIO THINKING, SMALL STUDIO PASSION
                </p>
                <Link href="/about">
                    More About Us
                </Link>
            </div>
        </>
    );
};

export default AboutUs;
