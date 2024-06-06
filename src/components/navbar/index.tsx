'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { AnimatePresence, useAnimation, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import styles from './style.module.scss';
import Nav from "./nav/index";
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { NavLink } from "@/common/types";
import useWindowSize from '@/hooks/useWindowWidth';
import { TransitionLink, TransitionLogo } from '../transitionLink';

dayjs.extend(utc);
dayjs.extend(timezone);

const links: NavLink[] = [
    { title: "Services", href: "/services" },
    { title: "Work", href: "/work" },
    { title: "Case Studies", href: "/case-study" },
    { title: "Studio", href: "/about" },
    { title: "Get A Quote", href: "/contact" },
];

const Navbar: React.FC = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<string>(dayjs().tz('Africa/Cairo').format('HH:mm'));
    const { isDesktop } = useWindowSize();
    const router = usePathname();

    const controls = useAnimation();

    const toggleNavOpen = useCallback(() => {
        setNavOpen(prevNavOpen => !prevNavOpen);
    }, []);


    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(dayjs().tz('Africa/Cairo').format('HH:mm')), 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setNavOpen(false); // Close the navbar when the pathname changes
    }, [router]);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                controls.start({
                    opacity: '0',
                    transition: { ease: [0.33, 1, 0.68, 1], duration: 0.65 }
                });
            } else {
                controls.start({
                    opacity: '1',
                    transition: { ease: [0.33, 1, 0.68, 1], duration: 0.65 }
                });
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
                initial={{ opacity: '1' }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.65 }}>
                <TransitionLogo href="/" label="Cairo Studio" />
                <div className={styles.nav__corner}>
                    {!isDesktop && <span>Cairo: {currentTime}</span>}
                    <div className={styles.navLinks}>
                        <ul>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <TransitionLink href={link.href} label={link.title} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    {!isDesktop && (
                        <button onClick={toggleNavOpen} className={styles.menuNav}>
                            Menu
                        </button>
                    )}
                </div>
            </motion.nav>
            <AnimatePresence mode='wait'>
                {navOpen && <Nav setNavOpen={setNavOpen} />}
            </AnimatePresence>

        </header>
    );
};

export default Navbar;
