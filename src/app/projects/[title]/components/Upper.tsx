import React from 'react'
import styles from "../page.module.scss"
import { Project } from '@/common/types'
import { TransitionLink } from '@/components/transitionLink'
import Link from 'next/link'
const Upper = ({ project }: { project: Project }) => {
    return (
        <section className={styles.details_upper}>
            <div className={styles.upper}>
                <TransitionLink href='/projects' label='Back' />
                <h1>{project.title}</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.container_info}>
                    <h2> Info </h2>
                    <h3>{project.description}</h3>
                </div>
                <div className={styles.container_categories}>
                    <h2> Role </h2>
                    {project.categories.map((category, index) => (
                        <h3 key={`category-${index}`}>
                            {category}
                        </h3>
                    ))}
                </div>
                <h3>{project.date}</h3>
            </div>
            <div className={styles.container}>
                <div className={styles.prdeco__challenge}>
                    <h2>Challenge</h2>
                    <h3>{project.challenge}</h3>
                </div>
                <div className={styles.prdeco__solution}>
                    <h2>Solution</h2>
                    <h3>{project.solution}</h3>
                </div>
            </div>
            {project.link && (
                <div>
                    <Link href={project && project.link} target='_blank' rel="noreferrer">Visit</Link>
                </div>
            )}


        </section>
    )
}

export default Upper