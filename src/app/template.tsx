'use client'
import { useEffect } from "react";
import { animatePageIn, animatePageOut } from "@/animations/animatePageOut"
import getChars from "@/animations/animatedHeaders/getChars";
import styles from "./page.module.scss";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    useEffect(() => {
        animatePageIn();
    }, [pathname]);


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
            <div id="text-animation" className={styles.textAnimation}>
                <div>
                    {getChars("Cairo Studio")}
                </div>
            </div>
            {children}
        </div>
    );
}
