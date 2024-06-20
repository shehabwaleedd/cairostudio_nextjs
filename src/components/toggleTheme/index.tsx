'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeProvider';
import styles from "./style.module.scss"

const ToggleTheme: React.FC = () => {
    const { toggleTheme } = useTheme();

    return (
        <div className={styles.toggleCircle}>
            <div className={styles.circle} onClick={toggleTheme}></div>
        </div>
    );
};

export default ToggleTheme;