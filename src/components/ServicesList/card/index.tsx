'use client'

import React from 'react';
import styles from "../style.module.scss";
import { ProjectData } from '..';
import Link from 'next/link';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowWidth';

const Card = ({
    project,
    i,

}: {
    project: ProjectData,
    i: number,

}) => {


    return (
        <div 
            className={styles.cardContainer} key={i}>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <div className={styles.upper}>
                        <p>{project.descTitle}</p>
                        <Link href={project.link}>{project.title}</Link>
                        <ul>
                            {project.tags.slice(0, 3).map((tag, i) => (
                                <li key={i}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.lower}>
                        <Image
                            src={project ? project.img : ""}
                            alt=""
                            width={1920}
                            height={1260}
                            placeholder='blur'
                            blurDataURL={project.img}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
