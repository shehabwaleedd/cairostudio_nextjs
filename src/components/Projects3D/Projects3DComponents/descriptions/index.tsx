import React from 'react'
import styles from './style.module.scss';
import { ProjectData } from '../titles';
export default function index({ data, selectedProject } : {
    data: ProjectData[],
    selectedProject: number | null
}) {

    const crop = (string: string, maxLength: number) => {
        return string.substring(0, maxLength);
    }

    return (
        <div className={styles.descriptions}>
            {
                data.map((project, i) => {
                    const { descTitle, desc } = project;
                    return (
                        <div
                            key={i}
                            className={styles.description}
                            style={{ clipPath: selectedProject === i ? "inset(0 0 0)" : "inset(50% 0 50%" }}
                        >
                            <p>{descTitle && crop(descTitle, 12)}</p>
                            <p>{desc && desc.slice(0, 166)}</p> 
                        </div>
                    )
                })
            }
        </div>
    )
}
