/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import './Footer.scss'
import Link from 'next/link'; // Using Next.js Link
import { useRouter } from 'next/navigation';




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
            <div className="nextPage">
                <h2>Next Page</h2>
                <Link href={nextPage} className="next-page-link">
                    {nextPageName}
                </Link>
            </div>
        );
    };

    return (
        <footer className='footer'>
            <div className="footer__con">
                <div className="footer__upper">
                    <NextPageLink />
                    <h2>We would love to hear from you. <br /> let's work — together.</h2>
                    <Link href="/contact">
                        <p> Get In Touch</p>
                    </Link>
                </div>
                <div className="footer__container">
                    <div className="footer__address">
                        <h2>Address</h2>
                        <address>
                            <p>Bahgat Ali, Zamalek <br /> Cairo, Egypt</p>
                        </address>
                    </div>
                    <div className="footer__contact">
                        <h2>Business Inquires</h2>
                        <ul className="focon__content">
                            <li>
                                <address>
                                    <Link href="mailto:hello@cairo-studio.com" target='_blank' rel="noreferrer">
                                        hello@cairo-studio.com
                                    </Link>
                                </address>
                            </li>
                            <li>
                                <address>
                                    <Link href="tel:+201023288200" target='_blank' rel="noreferrer">
                                        +201023288200
                                    </Link>
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__footer">
                <div className="footer__footer_container">
                    <div className="footer__logo">
                        <h2>Cairo Studio © 2023 all rights reserved</h2>
                    </div>
                    <div className="footer__rest">
                        <ul className="foso__content">
                            <li>
                                <Link href="https://www.instagram.com/cairostudioo/" target='_blank' rel="noreferrer">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/company/cairostudio/" target='_blank' rel="noreferrer">
                                    Linkedin
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer