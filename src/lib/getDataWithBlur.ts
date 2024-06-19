import { getBase64 } from './getLocalBase64';
import data from '@/components/ServicesList/data';

export async function getDataWithBlur() {
    const updatedData = await Promise.all(data.map(async (project) => {
        const blurDataURL = await getBase64(project.img);
        return { ...project, blurDataURL };
    }));
    return updatedData;
}