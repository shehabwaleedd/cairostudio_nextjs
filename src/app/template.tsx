'use client'
import { useEffect } from "react";
import { animatePageIn } from "@/animations/animatePageOut"

import styles from "./page.module.scss";


export default function Template({ children } : { children: React.ReactNode }) {

    useEffect(() => {
        animatePageIn();
    }, []);


    return (
        <div>
            <div id="banner-1" className={styles.banner1}>
            </div>
            <div id="banner-2" className={styles.banner2}>
            </div>
            <div id="banner-3" className={styles.banner3}>
            </div>
            <div id="banner-4" className={styles.banner4}>
            </div>
            {children}
        </div>
    );
}
