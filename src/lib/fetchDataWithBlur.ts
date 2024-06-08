import { getDocs, collection, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { getPlaiceholder } from "plaiceholder";
import axios from "axios";

export interface Project {
    id: string;
    title: string;
    poster: string;
    date: string;
    categories: string[];
    blurDataURL?: string;
}

const fetchProjectsWithBlurData = async (): Promise<Project[]> => {
    const querySnapshot = await getDocs(collection(db, 'projects'));

    const projects: Project[] = await Promise.all(
        querySnapshot.docs.map(async (doc: QueryDocumentSnapshot<DocumentData>) => {
            const data = doc.data() as Project;
            const base64 = await getBase64(data.poster);
            return { ...data, id: doc.id, blurDataURL: base64 };
        })
    );

    return projects;
};

const getBase64 = async (imageUrl: string): Promise<string> => {
    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

        if (response.status !== 200) {
            throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
        }

        const { base64 } = await getPlaiceholder(Buffer.from(response.data, 'binary'));
        return base64;
    } catch (e) {
        if (e instanceof Error) {
            console.error(e.message);
        }
        return ''; // Return an empty string on error
    }
};

export default fetchProjectsWithBlurData;
