import fetchProjectsWithBlurData, { Project } from '@/lib/fetchDataWithBlur';
import ProjectItem from './ProjectItem';
import Upper from '../upper';
import styles from './style.module.scss';

const MainProjects = async () => {
    const projects: Project[] = await fetchProjectsWithBlurData();

    const order = ['Pyramids', 'Lemkus', 'Cairo Hosts', 'Tag Media', 'Aldar'];

    const displayedProjects = projects
        .filter((project: Project) => order.includes(project.title))
        .sort((a: Project, b: Project) => order.indexOf(a.title) - order.indexOf(b.title));

    const numberOfProjects = displayedProjects.length;

    return (
        <section className={styles.mainProjects}>
            <Upper p1="Latest Projects" p2="02" label="All Projects" link='/projects' h2="Latest" secondRow={true} span={`${numberOfProjects}`} />
            <div className={styles.mainProjects__container}>
                {displayedProjects.map((item: Project, index: number) => (
                    <ProjectItem item={item} key={index} index={index} />
                ))}
            </div>
        </section>
    );
};

export default MainProjects;
