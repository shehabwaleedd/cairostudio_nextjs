'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Burger from './burger';
import Body from './nav/Body';
import { usePathname } from 'next/navigation';
import './Navbar.scss';
import dynamic from 'next/dynamic';
const Nav = dynamic(() => import('./nav'), { ssr: false });

type Link = {
    title: string;
    href: string;
};

// Define the links array with the Link type
const links: Link[] = [
    { title: "Services", href: "/services" },
    { title: "Work", href: "/work" },
    { title: "Case Studies", href: "/case-study" },
    { title: "Studio", href: "/about" },
    { title: "Get A Qoute", href: "/contact" },
];

type SelectedLink = {
    isActive: boolean;
    index: number;
};



const Nabvar: React.FC = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const isContactPage: boolean = usePathname() === '/contact';
    const pathname: string = usePathname();
    const [selectedLink, setSelectedLink] = useState<SelectedLink>({ isActive: false, index: 0 });

    useEffect(() => {
        setNavOpen(false); // Close the navbar when the location changes
    }, [pathname]);

    const formatTime = (date: Date): string => {
        const hours: string = date.getHours().toString().padStart(2, '0');
        const minutes: string = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    useEffect(() => {
        const interval: NodeJS.Timeout = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000); // Update every minute

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (

        <>
            <header >
                <motion.nav className='nav'>
                    <div className="nav__container">
                        <Link href="/">
                            <motion.h1>
                                Cairo Studio
                            </motion.h1>
                        </Link>
                        <div className="nav__corner">
                            <time> <motion.h2>Cairo: {formatTime(currentTime)}</motion.h2></time>
                            <div className='navLinks'>
                                <ul>
                                    {links.map((link, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={link.href}>
                                                    {link.title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <h2 onClick={() => setNavOpen(!navOpen)} className='menuNav'>
                                Menu
                            </h2>
                        </div>
                    </div>
                </motion.nav>
                <AnimatePresence mode='wait'>
                    {navOpen && <Nav navOpen={navOpen} />}
                </AnimatePresence>
            </header>
        </>

    );
};

export default Nabvar;
