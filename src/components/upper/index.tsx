import React from 'react'
import styles from "./style.module.scss"
import Link from 'next/link'
import { TransitionLink } from '../transitionLink'
const Upper = ({ p1, p2, link, label, h2, span, secondRow }: { p1: string, p2: string, p3?: string, h2?: string, span?: string, secondRow?: boolean, link?:string, label?: string }) => {
    return (
        <div className={styles.upper}>
            <div className={styles.upper_top}>
                <p>{p1}</p>
                <p>[S: {p2}]</p>
            </div>
            {secondRow && <div className={styles.upper_bottom}>
                <div className={styles.upper_bottom_left}>
                    <h2>{h2} </h2>
                    {span && <span> [{span}]</span>}
                </div>
                <TransitionLink href={`${link}`} label={`${label}`} />
            </div>}
        </div>
        )
}

export default Upper