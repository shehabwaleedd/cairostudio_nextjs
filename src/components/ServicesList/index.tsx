import { GetServerSideProps } from 'next';
import styles from './style.module.scss';
import { getDataWithBlur } from '@/lib/getDataWithBlur';
import Card from './card';
import Upper from '@/components/upper';
import { TransitionCard } from '../transitionLink';

export interface ProjectData {
    title: string;
    link: string;
    img: string;
    descTitle: string;
    tags: string[];
    blurDataURL: string;
}

interface ServicesListProps {
    p2: string;
    projects: ProjectData[];
}

export default async function ServicesList({ p2 }: { p2: string }) {
    const projects = await getDataWithBlur();

    return (
        <section className={styles.work}>
            <Upper p1="Services" p2={p2} />
            <div className={styles.projectsMain}>
                {projects.map((project, i) => (
                    <Card project={project} key={`p_${i}`} i={i} />
                ))}
            </div>
        </section>
    );
}