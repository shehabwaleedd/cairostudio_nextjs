import fetchProjectsWithBlurData, { Project } from '@/lib/fetchDataWithBlur';
import ProjectItem from './ProjectItem';
import Upper from '../upper';
import styles from './style.module.scss';

export const metadata = {
    title: 'Projects Page',
    description: 'Latest projects and works',
};

const MainProjects = async () => {
    const projects: Project[] = await fetchProjectsWithBlurData();

    const displayedProjects = projects.filter((project: Project) =>
        ['Lemkus', 'Barkar', 'Innovest', 'Tag Media', 'Pyramids'].includes(project.title)
    );

    const numberOfProjects = displayedProjects.length || 0;

    return (
        <div className={styles.mainProjects}>
            <Upper p1="Latest Work" p2="02" label="All Work" link='/work' h2="Latest" secondRow={true} span={`${numberOfProjects}`} />
            <div className={styles.mainProjects__container}>
                {displayedProjects.map((item: Project, index: number) => (
                    <ProjectItem item={item} key={index} index={index} />
                ))}
            </div>
        </div>
    );
};

export default MainProjects;
