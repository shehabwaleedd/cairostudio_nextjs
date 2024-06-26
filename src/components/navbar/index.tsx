'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { TransitionLink, TransitionLogo } from '../transitionLink';
import styles from './style.module.scss';
import Nav from "./nav/index";
import { NavLink } from "@/common/types";
import ToggleTheme from '../toggleTheme';

const links: NavLink[] = [
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Studio", href: "/studio" },
    { title: "Get A Quote", href: "/contact" },
];

const Navbar: React.FC = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const toggleNavOpen = useCallback(() => {
        setNavOpen(prevNavOpen => !prevNavOpen);
    }, []);


    useEffect(() => {
        setNavOpen(false); // Close the navbar when the pathname changes
    }, [pathname]);

    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = ''; // Reset overflow when component unmounts
        };
    }, [navOpen]);




    return (
        <header>
            <nav className={styles.nav}>
                <TransitionLogo href="/" label="Cairo Studio" />
                <div className={styles.nav__corner}>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <TransitionLink href={link.href} label={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
                <ToggleTheme />
                <div className={styles.mobile}>
                    <button onClick={toggleNavOpen} className={styles.menuNav}
                        aria-label={navOpen ? "close" : "menu"}
                        aria-expanded={navOpen}
                        aria-controls="nav"
                    >
                        {navOpen ? "close" : "menu"}
                    </button>
                </div>
            </nav>
            <AnimatePresence mode='wait'>
                {navOpen && <Nav setNavOpen={setNavOpen} />}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
