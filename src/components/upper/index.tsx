import React from 'react'
import styles from "./style.module.scss"
const Upper = ({ p1, p2, p3, h2, span, secondRow }: { p1: string, p2: string, p3?: string, h2?: string, span?: string, secondRow?: boolean }) => {
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
                <p>{p3}</p>
            </div>}
        </div>
        )
}

export default Upper