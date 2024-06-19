'use client';
import React from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { TransitionLink } from '../transitionLink';

const Footer: React.FC = () => {
    const pathname = usePathname();
    const workPathRegex = /^\/projects\/.+$/; // Matches /projects/* but not /projects

    const nextPageMap: { [key: string]: { nextPage: string, nextPageName: string } } = {
        '/': { nextPage: "/projects", nextPageName: "Projects" },
        '/projects': { nextPage: "/contact", nextPageName: "Contact" },
        '/services': { nextPage: "/studio", nextPageName: "Studio" },
        '/studio': { nextPage: "/services", nextPageName: "Services" },
        '/privacy': { nextPage: "/projects", nextPageName: "Projects" }
    };

    const getNextPageLink = () => {
        const nextPageData = nextPageMap[pathname];
        if (!nextPageData) return null;
        return (
            <li>
                <TransitionLink href={nextPageData.nextPage} label={nextPageData.nextPageName} />
            </li>
        );
    };


    const socialLinks = [
        { href: "https://www.instagram.com/cairostudioo/", label: "Instagram" },
        { href: "https://www.linkedin.com/company/cairostudio/", label: "LinkedIn" },
        { href: "https://www.facebook.com/cairostudiooo", label: "Facebook" },
        { href: "https://twitter.com/cairostudioo", label: "Twitter" },
        { href: "mailto:hello@cairo-studio.com", label: "Email" }
    ];

    return (
        <footer className={styles.footer} style={{ backgroundColor: (workPathRegex.test(pathname)) ? "#131313" : "var(--background-color)" }}>
            <nav aria-label="Footer navigation">
                <ul className={styles.footer__content}>
                    {getNextPageLink()}
                    {socialLinks.map((link, index) => (
                        <li key={index}>
                            <a style={{ color: (workPathRegex.test(pathname)) ? "#f1dbb2" : "var(--title-color)" }} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${link.label}`}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <h3 style={{ color: (workPathRegex.test(pathname)) ? "#f1dbb2" : "var(--title-color)" }}>Cairo Studio</h3>
        </footer>
    );
};

export default Footer;
