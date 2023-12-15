import React from 'react'
import './Terms.scss'
import Data from './Data'

const Terms = () => {
    return (
        <section className='terms'>
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
