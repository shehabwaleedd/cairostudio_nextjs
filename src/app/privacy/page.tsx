import React from 'react'
import './Privacy.scss'
import Data from './Data'
const Privacy = () => {
    return (
        <section className='privacy'>
            <div className="privacy__title">
                <h1>
                    Privacy Policy
                </h1>
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
    )
}

export default Privacy