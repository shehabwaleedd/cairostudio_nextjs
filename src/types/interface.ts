export interface Project {
    id: number;
    headline?: HTMLElement | null;
    title: string;
    elements: { text: string }[];
}

export interface Service {
    id: number;
    title: string;
    elements: { text: string }[];
}
