'use client';
import React, { useEffect } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AnimatedH3 from '@/animations/animatedH3';

const Footer: React.FC = () => {
    const pathname = usePathname();

    useEffect(() => {
        const workPathRegex = /^\/work(\/.*)?$/;

        if (workPathRegex.test(pathname)) {
            document.documentElement.style.setProperty('--background-color', '#0b0b0b');
            document.documentElement.style.setProperty('--container-color', '#eae4d8');
            document.documentElement.style.setProperty('--title-color', '#eae4d8');
        } else {
            document.documentElement.style.removeProperty('--background-color');
            document.documentElement.style.removeProperty('--container-color');
            document.documentElement.style.removeProperty('--title-color');
        }

        // Cleanup function to remove properties when the component unmounts or pathname changes
        return () => {
            document.documentElement.style.removeProperty('--background-color');
            document.documentElement.style.removeProperty('--container-color');
            document.documentElement.style.removeProperty('--title-color');
        };
    }, [pathname]); // Dependency array to re-run the effect on pathname change


    const getNextPageLink = () => {
        let nextPage = "/work";
        let nextPageName = "Work";

        switch (pathname) {
            case '/':
                nextPage = "/work";
                nextPageName = "Work";
                break;
            case '/work':
                nextPage = "/Contact";
                nextPageName = "Contact";
                break;
            case '/services':
                nextPage = "/about";
                nextPageName = "About";
                break;
            case '/studio':
                nextPage = "/services";
                nextPageName = "Services";
                break;
            case '/terms':
                nextPage = "/privacy";
                nextPageName = "Privacy";
                break;
            case '/privacy':
                nextPage = "/work";
                nextPageName = "Work";
                break;
            default:
                return null;
        }

        return (
            <div className={styles.nextPage}>
                <h2>Next Page</h2>
                <Link href={nextPage}>
                    {nextPageName}
                </Link>
            </div>
        );
    };

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer__bottom}>
                    <div className={styles.footer__con}>
                        <div className={styles.footer__upper}>
                            {getNextPageLink()}
                        </div>
                        <div className={styles.footer__container}>
                            <div className={styles.footer__address}>
                                <h2>Business Inquiries</h2>
                                <ul className={styles.focon__content}>
                                    <li>
                                        <a href="mailto:hello@cairo-studio.com" target='_blank' rel="noopener noreferrer">
                                            hello@cairo-studio.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer__top}>
                        <AnimatedH3 word='CAIRO STUDIO' />
                    </div>
                </div>
            </footer>
            <div className={styles.footer__footer}>
                <div className={styles.footer__footer_container}>
                    <div className={styles.footer__logo}>
                        <h2>Cairo Studio © {new Date().getFullYear()} All Rights Reserved</h2>
                    </div>
                    <div className={styles.footer__rest}>
                        <ul className={styles.foso__content}>
                            <li>
                                <a href="https://www.instagram.com/cairostudioo/" target='_blank' rel="noopener noreferrer">
                                    Instagram
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/cairostudio/" target='_blank' rel="noopener noreferrer">
                                    LinkedIn
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
