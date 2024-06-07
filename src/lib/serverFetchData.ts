import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { Project } from '@/common/types';

const serverFetchData = async (): Promise<Project[]> => {
    const querySnapshot = await getDocs(collection(db, 'projects'));
    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Project[];
};

export default serverFetchData;