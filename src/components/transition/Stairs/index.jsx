import React from 'react'
import { motion } from 'framer-motion';
import { translate, expand } from './anim';
import './styles.scss'

export default function Layout({ children }) {
    const anim = (variants, custom = null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }
    const nbOfColumns = 5
    return (
        <div className='page stairs'>
            <motion.div {...anim(translate)} className='transition-background' />
            <div className='transition-container'>
                {
                    [...Array(nbOfColumns)].map((_, i) => {
                        return (
                            <motion.div key={i} {...anim(expand, nbOfColumns - i)} />
                        )
                    })
                }
            </div>
            {children}
        </div>
    )
}
