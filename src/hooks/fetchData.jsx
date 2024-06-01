import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase.config';

const CACHE_KEY = "projects";

const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projectsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    const cacheData = { projects: projectsData, timestamp: new Date().getTime() };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    return projectsData;
};

export default fetchData;
