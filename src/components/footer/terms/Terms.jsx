import React, { useEffect } from 'react'
import Head from 'next/head'
import './Terms.scss'
import Data from './Data'

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='terms'>
            <Head>
                <title>Terms and Conditions</title>
                <meta name="description" content="Terms and Conditions" />
                <meta name="keywords" content="Terms and Conditions" />
                <meta name="author" content="Cairo Studio" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
            </Head>
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
