'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import './Navbar.scss';
import Nav from "./nav/index";
import moment from 'moment-timezone';
import { NavLink } from "@/common/types";

const links: NavLink[] = [
    { title: "Services", href: "/services" },
    { title: "Work", href: "/work" },
    { title: "Case Studies", href: "/case-study" },
    { title: "Studio", href: "/about" },
    { title: "Get A Quote", href: "/contact" },
];

const Navbar: React.FC = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<string>(moment().tz('Africa/Cairo').format('HH:mm'));
    const router = useRouter();
    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

    const toggleNavOpen = useCallback(() => {
        setNavOpen(prevNavOpen => !prevNavOpen);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setNavOpen(false);
    }, [router.pathname]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().tz('Africa/Cairo').format('HH:mm'));
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header style={{ position: "relative" }}>
            <nav className='nav'>
                <Link href="/" passHref>
                    <a className="nav__logo">
                        <h1>CAIRO STUDIO</h1>
                    </a>
                </Link>
                <div className="nav__corner">
                    {windowWidth < 1200 && <span>Cairo: {currentTime}</span>}
                    <div className='navLinks'>
                        <ul>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} passHref>
                                        <a>{link.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {windowWidth < 1200 && (
                        <button onClick={toggleNavOpen} className='menuNav'>
                            Menu
                        </button>
                    )}
                </div>
                <AnimatePresence mode='wait'>
                    {navOpen && <Nav setNavOpen={setNavOpen} />}
                </AnimatePresence>
            </nav>
        </header>
    )
};

export default Navbar;
