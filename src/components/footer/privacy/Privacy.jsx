import React, { useEffect } from 'react'
import './Privacy.scss'
import Data from './Data'
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className='privacy'>
            <Helmet>
                <title>Cairo Studio - Privacy Policy</title>
                <meta
                    name="description"
                    content="Learn about Cairo Studio's Privacy Policy and how we handle your personal information."
                />
                <meta name="keywords" content="Cairo Studio, Privacy Policy, Privacy, Policy" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Cairo Studio" />
                <meta name="url" content="https://cairo-studio.com/privacy" />
                <meta name="og:title" content="Cairo Studio - Privacy Policy" />
                <meta name="og:description" content="Learn about Cairo Studio's Privacy Policy and how we handle your personal information." />
                <meta name="og:image" content="https://cairo-studio.com/images/cairo.jpg" />
                <meta name="og:url" content="https://cairo-studio.com/privacy" />
                <meta name="og:site_name" content="Cairo Studio" />
                <meta name="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@cairostudio1" />
                <meta name="twitter:creator" content="@cairostudio1" />
                <meta name="twitter:title" content="Cairo Studio - Privacy Policy" />
                <meta name="twitter:description" content="Learn about Cairo Studio's Privacy Policy and how we handle your personal information." />
                <meta name="twitter:url" content="https://cairo-studio.com/privacy" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="application-name" content="Cairo Studio" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                
                <link rel="canonical" href="https://cairo-studio.com/privacy" />
            </Helmet>
            <h1>  Privacy Policy </h1>
            <div className="privacy__container">
                {Data.map((item, index) => {
                    return (
                        <div className="privacy__container__item" key={index}>
                            <h2> {item.title} </h2>
                            <p> {item.text} </p>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}

export default Privacy