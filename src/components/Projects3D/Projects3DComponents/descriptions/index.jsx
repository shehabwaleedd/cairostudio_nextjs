import React from 'react'
import styles from './style.module.scss';

export default function index({data, selectedProject}) {

    const crop = (string, maxLength) => {
        return string.substring(0, maxLength);
    }
    
    return (
        <div className={styles.descriptions}>
            {
                data.map( (project, i) => {
                    const { descTitle, desc } = project;
                    return (
                    <div 
                        key={i} 
                        className={styles.description}
                        style={{clipPath: selectedProject === i ? "inset(0 0 0)" : "inset(50% 0 50%"}}
                    >
                        <p>{crop(descTitle, 12)}</p>
                        <p>{desc.slice(0,166)}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}
