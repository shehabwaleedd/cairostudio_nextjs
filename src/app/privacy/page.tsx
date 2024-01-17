import React from 'react'
import './Privacy.scss'
import Data from './Data'
import Stairs from "../../components/transition/Stairs"
import Head from 'next/head'
import getChars from '@/utils/getChars'
const Privacy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy | Cairo Studio</title>
                <meta name="description" content="Cairo Studio Privacy Policy" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://cairo-studio.com" />
                <meta property="twitter:title" content="Privacy Policy" />
                <meta property="twitter:description" content="Cairo Studio Privacy Policy" />
                <meta property="twitter:image" content="https://cairo-studio.com/images/privacy.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://cairo-studio.com" />
                <meta property="og:title" content="Privacy Policy" />
                <meta property="og:description" content="Cairo Studio Privacy Policy" />
                <meta property="og:image" content="https://cairo-studio.com/images/privacy.jpg" />
            </Head>
            <Stairs>
                <section className='privacy'>
                    <div className="privacy__title">
                        {getChars("Privacy Policy")}
                    </div>
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
            </Stairs>
        </>
    )
}

export default Privacy