import React from 'react';
import { motion, Variants } from 'framer-motion';
import { translate, expand } from './anim';
import './styles.scss';

interface LayoutProps {
    children: React.ReactNode;
}

const anim = (variants: Variants, custom: number | null = null) => ({
    initial: "initial",
    animate: "enter",
    exit: "exit",
    custom,
    variants
});
const nbOfColumns = 5; // Consider moving this to a constant file if used in multiple places

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='page stairs'>
            <motion.div {...anim(translate)} className='transition-background' />
            <div className='transition-container'>
                {Array.from({ length: nbOfColumns }, (_, i) => (
                    <motion.div key={i} {...anim(expand, nbOfColumns - i)} />
                ))}
            </div>
            {children}
        </div>
    );
};

export default Layout;
