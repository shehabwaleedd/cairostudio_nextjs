import { StaticImageData } from 'next/image';


export interface ProjectDetail {
    isImg: boolean;
    image: string;
}

export interface ProjectsDetailsProps {
    title: string;
    params: {
        title: string;
    };
}
export interface CollectiveItem {
    type: string;
    items: ProjectDetail[];
}

export interface Project {
    title: string;
    homePage: string;
    mainVideo: string;
    categories: string[];
    currentProject: boolean;
    introduction: string;
    date: string;
    collectiveItems: CollectiveItem[];
    index: string;
    loading: boolean;
    poster: string;
    relatedNames: string[];
    relatedWork: string[];
    description: string;
    link: string;
    challenge: string;
    solution: string;
    mainTitleImg: string;
    detailsOpened: boolean;
    selectedProjectIndex: number | null;
    hoveredProjectIndex: number | null;
    id: string;
    cover: string;
    displayed: boolean;
    image: string;
    serviceTitle: string;
    serviceDescription: string;
    projectsDetails: {
        sections: Section[];
        scopeOfWork: ScopeOfWork[];
        navigationLeft?: NavigationType; // Assuming it's optional

    };
    introduction2?: string;
    introduction3?: string;
    navigationLeft?: boolean;
    designSystem?: boolean;
    filteringLeft?: boolean;
    interactionLeft?: boolean;
    interactionVideo?: boolean;
    collective1?: boolean;
    collective2?: boolean;
    filteringRight?: boolean;
    navigationRight?: boolean;
    designSystemText?: boolean;
    filteringImage?: boolean;
    filteringVideo?: boolean;
    filterImage?: boolean;
    filterVideo?: boolean;
    userExpLeft?: boolean;
}

export interface NavigationType {
    name: string;
    options: Option[];
}

export interface Section {
    name: string;
    options: Option[];
    items?: Item[];
}

export interface Item {
    isImg: boolean;
    image: string;
    name?: string;
}


export interface Option {
    text: string;
    name?: string;
}

export interface ScopeOfWork {
    title: string;
    options: Option[];
}


export interface CachedData {
    projects: Project[];
    timestamp: number;
}

export interface ProjectState {
    detailsOpened: boolean;
    selectedProjectIndex: number | null;
    hoveredProjectIndex: number | null;
}

export interface RelatedWorkProps {
    relatedNames: string[];
    heading: string;
}

export interface Metadata {
    title: string;
    description: string;
    metadataBase: any;
    keywords: string[];
    referrer: string;
    canonical: string;
    robots: string;
    googlebot: string;
    openGraph: {
        title: string;
        description: string;
        image: string;
        site_name: string;
        type: string;
        locale: string;
        url: string;
        images: {
            url: string;
            width: number;
            height: number;
            alt: string;
        }[];

    };
    twitter: {
        card: string;
        site: string;
        creator: string;
        title: string;
        description: string;
        image: string;
        url: string;
    };
    icons: {
        favicon: string;
        appleTouchIcon: string;
        msTileImage: string;
        androidChrome: string;
    };
}

export interface Dimension {
    width: number;
    height: number;
}

export interface AnimatedTextProps {
    data: {
        title: string;
        speed: number;
    };
}

export interface ServiceImage {
    src: string;
    alt: string;
    isImg: boolean;
}

export interface ServiceContent {
    title: string;
    options: string[];
}

export interface ServiceProcess {
    description: string;
    content: WorkedWithContent[]; // Assuming WorkedWith component accepts an array of a specific type
}

export interface Service {
    serviceTitle: string;
    underTitle: string[];
    image: {
        isImg: boolean;
        src: StaticImageData;
    };
    upperDescription: string;
    serviceDescription: string[];
    relatedNames: string[];
    services: {
        description: string;
        content: {
            title: string;
            options: string[];
        }[];
    }[];
    process: {
        description: string;
        content: any[]; // replace 'any' with the actual type
    }[];
}

export interface WorkedWith {
    title: string;
    content: WorkedWithContent[];
}




export interface WorkedWithContent {
    // Define the structure for content used in WorkedWith component
}

export interface FetchProjectsResponse {
    projects: Project[];
    loading: boolean;
    error: string | null;
}