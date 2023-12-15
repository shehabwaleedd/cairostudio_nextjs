import React from 'react'
import '../sass/AboutFounders.scss'
import { useState } from 'react'
import projects from './Data'
import Founders from './founders/Founders'
import Modal from './modal/Modal'
import { motion } from 'framer-motion'

const AboutFounders = () => {
    const [modal, setModal] = useState({ active: false, index: 0 })
    return (
        <div className='aboutFounders'>
            <motion.h2 initial={{ opacity: 0, y: -50, skewY: 10,  transition: { duration: 0.4, type: "spring", damping: 12, staggerChildren: 2.5, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} whileInView={{ opacity: 1, y: 0, skewY: 0,  transition: { duration: 0.4, type: "spring", staggerChildren: 2.5, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} viewport={{ once: true }}>The people who wanted a change</motion.h2>
            {
                projects.map((project, index) => {
                    return <Founders index={index} title={project.title} desc={project.desc} setModal={setModal} key={index} />
                })
            }
            <Modal modal={modal} projects={projects} />
        </div>
    )
}

export default AboutFounders