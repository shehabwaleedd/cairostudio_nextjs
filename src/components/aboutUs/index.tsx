import React from 'react';
import styles from "./style.module.scss";
import Link from 'next/link';



const AboutUs: React.FC = () => {
    return (
        <section className={styles.aboutus}>
            <p>
                Big studio thinking, small studio passion
            </p>
            <Link href="/studio">
                More About Us
            </Link>
        </section>
    );
};

export default AboutUs;
