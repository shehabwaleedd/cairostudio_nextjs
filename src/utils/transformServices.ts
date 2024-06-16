// utils.ts
import { Project, Service } from '@/types/interface';

export const transformServicesToProjects = (services: Service[]): Project[] => {
    return services.map((service) => ({
        id: service.id,
        title: service.title,
        elements: service.elements.map((element) => ({ text: element.text })),
    }));
};
