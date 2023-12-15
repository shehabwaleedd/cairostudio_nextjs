'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Burger from './burger';
import { usePathname } from 'next/navigation';
import './Navbar.scss';
import dynamic from 'next/dynamic';
const Nav = dynamic(() => import('./nav'), { ssr: true });

const Nabvar: React.FC = () => {
    const [navOpen, setNavOpen] = useState < boolean > (false);
    const [currentTime, setCurrentTime] = useState < Date > (new Date());
    const isContactPage: boolean = usePathname() === '/contact';
    const pathname: string = usePathname();

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
            <header>
                <nav className='nav' data-scroll-nav>
                    <div className="nav__container">
                        <Link href="/">
                            <h1>
                                Cairo Studio
                            </h1>
                        </Link>
                        <div className="nav__corner">
                            <time> <h2>Cairo: {formatTime(currentTime)}</h2></time>
                        </div>
                    </div>
                </nav>
            </header>
            <div>
                <Burger openMenu={() => setNavOpen(!navOpen)} isContactPage={isContactPage} navOpen={navOpen} />
                <AnimatePresence mode="wait">
                    {navOpen && <Nav/>}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Nabvar;
