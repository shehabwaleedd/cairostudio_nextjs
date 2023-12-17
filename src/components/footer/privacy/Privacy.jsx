import React, { useEffect } from 'react'
import './Privacy.scss'
import Data from './Data'
import Head from 'next/head'

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className='privacy'>
            <Head>
                <title> Privacy Policy </title>
                <meta name="description" content="Privacy Policy" />
                <meta name="keywords" content="Privacy Policy" />
                <meta name="author" content="Cairo Studio" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
            </Head>
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