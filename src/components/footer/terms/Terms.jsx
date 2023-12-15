import React, { useEffect } from 'react'
import './Terms.scss'
import Data from './Data'
import { Helmet } from 'react-helmet-async';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='terms'>
            <Helmet>
                <title>Cairo Studio - Terms and Conditions</title>
                <meta
                    name="description"
                    content="Learn about Cairo Studio's Terms and Conditions regarding the use of our services and website."
                />
                <meta name="keywords" content="Cairo Studio, Terms and Conditions, Terms, Conditions" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Cairo Studio" />
                <meta name="url" content="https://cairo-studio.com/terms" />
                <meta name="og:title" content="Cairo Studio - Terms and Conditions" />
                <meta name="og:description" content="Learn about Cairo Studio's Terms and Conditions regarding the use of our services and website." />
                <meta name="og:image" content="https://cairo-studio.com/images/cairo.jpg" />
                <meta name="og:url" content="https://cairo-studio.com/terms" />
                <meta name="og:site_name" content="Cairo Studio" />
                <meta name="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@cairostudio1" />
                <meta name="twitter:creator" content="@cairostudio1" />
                <meta name="twitter:title" content="Cairo Studio - Terms and Conditions" />
                <meta name="twitter:description" content="Learn about Cairo Studio's Terms and Conditions regarding the use of our services and website." />
                
                <link rel="canonical" href="https://cairo-studio.com/terms" />
            </Helmet>
            <h1>Terms and Conditions</h1>
            <div className="terms__container">
                {Data.map((item, index) => {
                    return (
                        <div className="terms__item" key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Terms
