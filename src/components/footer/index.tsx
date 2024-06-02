/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import './Footer.scss'
import Link from 'next/link';
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
        <>
            <footer className='footer'>
                <div className="footer__bottom">
                    <div className="footer__con">
                        <div className="footer__upper">
                            <NextPageLink />
                        </div>
                        <div className="footer__container">
                            <div className="footer__address">
                                <h2>Cairo</h2>
                                <address>
                                    <p>Ahmed Heshmat, Zamalek <br /> Cairo, Egypt</p>
                                </address>
                            </div>
                            <div className="footer__address">
                                <h2>Business Inquires</h2>
                                <ul className="focon__content">
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
                    <div className="footer__top">
                        <h3>CAIRO STUDIO <span>©</span></h3>
                    </div>
                </div>
            </footer>
            <div className="footer__footer">
                <div className="footer__footer_container">
                    <div className="footer__logo">
                        <h2>Cairo Studio © 2023 all rights reserved</h2>
                    </div>
                    <div className="footer__rest">
                        <ul className="foso__content">
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