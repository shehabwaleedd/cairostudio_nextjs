'use client'
import { useEffect } from "react";
import { animatePageOut } from "@/animations/animatePageOut"
import styles from "./page.module.scss";
import { usePathname } from "next/navigation";
import AnimatedSpans from "@/animations/animatedSpans";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    useEffect(() => {
        animatePageOut();
    }, [pathname]);


    return (
        <div>
            <div id="banner-1" className={styles.banner1}></div>
            <div id="text-animation" className={styles.textAnimation}>
                <div>
                    <AnimatedSpans word="Cairo Studio" />
                </div>
            </div>
            {children}
        </div>
    );
}
