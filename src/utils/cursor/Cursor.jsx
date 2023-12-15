import React, { useState, useEffect } from 'react';
import './Cursor.css';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const [scrollY, setScrollY] = useState(0); // Track scroll position
    const [cursorShape, setCursorShape] = useState('normal'); // Cursor shape
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newX = e.clientX;
            const newY = e.clientY;

            setTrail(prevTrail => [...prevTrail, { x: newX, y: newY }]);
            if (trail.length > 6) {
                setTrail(prevTrail => prevTrail.slice(1));
            }

            setCursorX(newX);
            setCursorY(newY);
        };

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrollY(scrollPosition);
            if (scrollPosition <= 13200) {
                setCursorShape('orange-trail');
            } else if (scrollPosition >= 13201) {
                setCursorShape('gray-trail');
            }
            else {
                setCursorShape('trail');
            }
        };

        const trailCleanupTimer = setInterval(() => {
            if (trail.length > 0) {
                setTrail(prevTrail => prevTrail.slice(1));
            }
        }, 50);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            clearInterval(trailCleanupTimer);
        };
    }, [trail]);

    return (
        <div className='cursor'>
            {trail.map((pos, index) => (
                <motion.div
                    key={index}
                    className={cursorShape}
                    style={{ left: pos.x - 18, top: pos.y - 15 }}
                ></motion.div>
            ))}
        </div>
    );
};

export default Cursor;
