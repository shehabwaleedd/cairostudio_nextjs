import React from 'react';
import styles from "./style.module.scss";
import Link from 'next/link';



const AboutUs: React.FC = () => {
    return (
        <div className={styles.aboutus}>
            <p>
                Big studio thinking, small studio passion
            </p>
            <Link href="/studio">
                More About Us
            </Link>
        </div>
    );
};

export default AboutUs;
