export interface Project {
    id: number;
    headline?: HTMLHeadingElement | null;
    title: string;
    elements: { text: string }[];
}

export interface Service {
    id: number;
    title: string;
    elements: { text: string }[];
}
