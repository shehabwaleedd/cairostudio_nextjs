import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../firebase.config';

const fetchData = async ({ setLoading, setError, setProjects }) => {
    setLoading(true);
    try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        sessionStorage.setItem('projects', JSON.stringify(projectsData));
        setProjects(projectsData);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};

export default fetchData;
