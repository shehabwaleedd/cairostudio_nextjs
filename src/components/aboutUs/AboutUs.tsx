'use client'
import React, { Suspense } from 'react';
import "./AboutUs.scss";
import dynamic from 'next/dynamic';
const AnimatedText = dynamic(() => import('../animatedText/AnimatedText'), { ssr: false });
import Loading from '../../utils/loading/Loading';


const AboutUs: React.FC = () => {
    return (
        <div className='aboutus'>
            <div className="aboutus__container">
                <span>About Us</span>
                <Suspense fallback={<Loading height={100} />}>
                    <AnimatedText data={{ title: 'We are a creative Studio, designing and developing', speed: 0.8 }} />
                    <AnimatedText data={{ title: 'websites and mobile applications that are', speed: 1 }} />
                    <AnimatedText data={{ title: 'modern, future-proof, and easy to use.', speed: 0.8 }} />
                </Suspense>
                <div className="aboutus__lower">
                    <h3> At Cairo Studio, we redefine the boundaries of digital creation <br /> through a team of highly skilled designers and developers. <br /></h3>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
