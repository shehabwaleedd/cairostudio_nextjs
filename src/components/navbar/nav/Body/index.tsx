import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.scss';
import { translate } from '../../anim';
import { usePathname } from 'next/navigation';
import { TransitionP } from '@/components/transitionLink';




interface NavLink {
    title: string;
    href: string;
}

interface BodyProps {
    links: NavLink[];
    setSelectedLink: (link: NavLink) => void;
}



const Body: React.FC<BodyProps> = ({ links, setSelectedLink }) => {
    const pathname = usePathname();
    const getChars = (word: string) => {
        let chars: JSX.Element[] = [];
        word.split("").forEach((char, i) => {
            chars.push(
                <motion.span
                    custom={[i * 0.02, (word.length - i) * 0.01]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit"
                    key={char + i}>
                    {char}
                </motion.span>
            )
        })
        return chars;
    }

    return (
        <div className={styles.body}>
            {links.map((link, index) => {
                const { title, href } = link;
                const isActive = pathname === href;

                return (
                    <h3 key={`l_${index}`} style={{ opacity: isActive ? 0.5 : 1 }}>
                        <TransitionP href={href} label={title}>
                            {getChars(title)}
                        </TransitionP>
                    </h3>
                );
            })}
        </div>
    )
}


export default Body;