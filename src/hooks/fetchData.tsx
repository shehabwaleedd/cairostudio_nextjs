import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { Project } from '@/common/types'; // Adjust the import path as needed

const CACHE_KEY = "projects";

const fetchData = async (): Promise<Project[]> => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projectsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Project[];
    const cacheData = { projects: projectsData, timestamp: new Date().getTime() };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    return projectsData;
};

export default fetchData;
