'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, useAnimation, motion } from 'framer-motion';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { TransitionLink, TransitionLogo } from '../transitionLink';
import styles from './style.module.scss';
import Nav from "./nav/index";
import { NavLink } from "@/common/types";
import useWindowSize from '@/hooks/useWindowWidth';

dayjs.extend(utc);
dayjs.extend(timezone);

const links: NavLink[] = [
    { title: "Services", href: "/services" },
    { title: "Work", href: "/work" },
    { title: "Studio", href: "/studio" },
    { title: "Get A Quote", href: "/contact" },
];

const Navbar: React.FC = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<string>(dayjs().tz('Africa/Cairo').format('HH:mm'));
    const { isDesktop } = useWindowSize();
    const pathname = usePathname();
    const controls = useAnimation();

    const toggleNavOpen = useCallback(() => {
        setNavOpen(prevNavOpen => !prevNavOpen);
        console.log('Nav toggled, new state:', !navOpen);
    }, [navOpen]);

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(dayjs().tz('Africa/Cairo').format('HH:mm')), 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setNavOpen(false); // Close the navbar when the pathname changes
        console.log('Pathname changed, nav closed:', pathname);
    }, [pathname]);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                controls.start({
                    opacity: 0,
                    transition: { ease: [0.33, 1, 0.68, 1], duration: 0.65 }
                });
                console.log('Scrolling down, nav hidden');
            } else {
                controls.start({
                    opacity: 1,
                    transition: { ease: [0.33, 1, 0.68, 1], duration: 0.65 }
                });
                console.log('Scrolling up, nav visible');
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <header>
            <motion.nav className={styles.nav}
                animate={controls}
                initial={{ opacity: 1 }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.65 }}>
                <TransitionLogo href="/" label="Cairo Studio" />
                <div className={styles.nav__corner}>
                    <div className={styles.navLinks}>
                        <ul>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <TransitionLink href={link.href} label={link.title} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.nav>
            <div className={styles.mobile}>
                {!isDesktop && <span>Cairo: {currentTime}</span>}
                <div>
                    <button onClick={toggleNavOpen} className={styles.menuNav}>
                        Menu
                    </button>
                </div>
            </div>
            <AnimatePresence mode='wait'>
                {navOpen && <Nav setNavOpen={setNavOpen} />}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
