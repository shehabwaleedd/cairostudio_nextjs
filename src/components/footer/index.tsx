/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import styles from "./style.module.scss"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import getChars from '@/animations/animatedHeaders/getChars';
import AniamtedH3 from '@/animations/animatedH3';
import AnimatedH3 from '@/animations/animatedH3';

const Footer: React.FC = () => {

    const router = useRouter(); // Called unconditionally at the top level


    const NextPageLink: React.FC = () => {
        if (!router) return null;

        let nextPage = "/work"; // Default next page
        let nextPageName = "Work";

        // Logic to determine the next page based on the current location
        switch (location.pathname) {
            case '/':
                nextPage = "/work";
                nextPageName = "Work";
                break;
            case '/work':
                nextPage = "/case-studies";
                nextPageName = "Case Studies";
                break;
            case '/case-studies':
                nextPage = "/contact";
                nextPageName = "Contact";
                break;

            case '/services':
                nextPage = "/about";
                nextPageName = "About";
                break;
            case '/about':
                nextPage = "/terms";
                nextPageName = "Terms";
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
                return null; // Return null to not render the component on unspecified routes
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
                            <NextPageLink />
                        </div>
                        <div className={styles.footer__container}>
                            <div className={styles.footer__address}>
                                <h2>Cairo</h2>
                                <address>
                                    <p>Ahmed Heshmat, Zamalek <br /> Cairo, Egypt</p>
                                </address>
                            </div>
                            <div className={styles.footer__address}>
                                <h2>Business Inquires</h2>
                                <ul className={styles.focon__content}>
                                    <li>
                                        <address>
                                            <a href="mailto:hello@cairo-studio.com" target='_blank' rel="noreferrer">
                                                hello@cairo-studio.com
                                            </a>
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer__top}>
                        {/* <h3>CAIRO STUDIO <span>©</span></h3> */}
                        {/* {getChars('CAIRO STUDIO ©')} */}
                        <AnimatedH3 word='CAIRO STUDIO ©' />
                    </div>
                </div>
            </footer>
            <div className={styles.footer__footer}>
                <div className={styles.footer__footer_container}>
                    <div className={styles.footer__logo}>
                        <h2>Cairo Studio © 2023 all rights reserved</h2>
                    </div>
                    <div className={styles.footer__rest}>
                        <ul className={styles.foso__content}>
                            <li>
                                <a href="https://www.instagram.com/cairostudioo/" target='_blank' rel="noreferrer">
                                    Instagram
                                    <span>
                                        Instagram
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/cairostudio/" target='_blank' rel="noreferrer">
                                    Linkedin
                                    <span>
                                        Linkedin
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer