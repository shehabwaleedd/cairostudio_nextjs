import React from 'react'
import './style.module.css'
import { motion } from "framer-motion"

const Founders = ({ title, setModal, index, desc}) => {
    return (
        <div onMouseEnter={() => { setModal({ active: true, index }) }} onMouseLeave={() => { setModal({ active: false, index }) }} className="project">
            <motion.h2  initial={{ opacity: 0, y: -50, skewY: 10,  transition: { duration: 0.4, type: "spring", damping: 12, staggerChildren: 2.5, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} whileInView={{ opacity: 1, y: 0, skewY: 0,  transition: { duration: 0.4, type: "spring", staggerChildren: 2.5, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} viewport={{ once: true }}>{title}</motion.h2>
            <motion.p  initial={{ opacity: 0, y: -50, skewY: 10,  transition: { duration: 0.4, type: "spring", damping: 12, staggerChildren: 2.5, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} whileInView={{ opacity: 1, y: 0, skewY: 0,  transition: { duration: 0.4, type: "spring", staggerChildren: 2.5, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} viewport={{ once: true }}>{desc}</motion.p>
        </div>
    )
}

export default Founders