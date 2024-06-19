import React from 'react';
import ServicesData from '@/app/studio/Data'
import serverFetchData from '@/lib/serverFetchData';
import { Project } from '@/common/types';
import styles from "./page.module.scss"
import ServicesCards from './components/services';
import Header from './components/Header';
import ServicesSplit from '@/components/servicesSplit';

const services = [
    { title: 'Web Development', slug: 'web-development' },
    { title: 'E-Commerce', slug: 'e-commerce' },
    { title: 'Graphic Design', slug: 'graphic-design' },
    { title: 'Branding', slug: 'branding' },
];



export async function generateMetadata() {
    const services = [
        'web development', 'UI/UX design', 'graphic design', 'branding', 'strategy',
        'Customer Research', 'Market Research', 'Competitor Research', 'Brand Research', 'Usability Research & Testing',
        'Analytics & Insights Reports', 'Social Media Strategy & Management', 'SEO Strategy', 'Growth Strategy',
        'Post-Launch Strategy', 'Product Ideation', 'Product Roadmapping', 'Target Audience Discovery', 'Brand Naming & Strategy',
        'Brand Positioning & Architecture', 'Feature Definition', 'Content Strategy', 'Information Architecture',
        'Art Direction', 'Brand Identity Design', 'Design Systems', 'Graphic Design', 'Wireframing & Prototyping',
        'User Interface Design', 'User Experience Design', 'Interaction Design', 'Mobile App Design', 'Web Design',
        'Responsive Design', 'Digital Product Design', 'Packaging Design', 'Illustration', 'Motion Design', 'Quality Assurance',
        'Techinal Strategy', 'Technical Consulting', 'CMS Implementation', 'React / Next.JS Development', 'WebGL / 3D Development',
        'Shopify Development', 'Wordpress Development', 'Mobile Development', 'Webflow Development', 'E-Commerce Development',
        'Copywriting', 'SEO Copy Analysis & Refinement', 'Thematic Keyword Research', 'Social Media Design', 'Content management'
    ];

    const servicesArabic = [
        'تطوير الويب', 'تصميم واجهة المستخدم', 'تصميم الجرافيك', 'استراتيجية', 'أبحاث العملاء', 'أبحاث السوق', 'أبحاث المنافسين',
        'أبحاث العلامة التجارية', 'اختبار قابلية الاستخدام', 'تقارير التحليلات والرؤى', 'استراتيجية وإدارة وسائل التواصل الاجتماعي',
        'استراتيجية تحسين محركات البحث', 'استراتيجية النمو', 'استراتيجية ما بعد الإطلاق', 'تصور المنتج', 'تخطيط المنتج',
        'اكتشاف الجمهور المستهدف', 'تسمية العلامة التجارية واستراتيجيتها', 'تحديد الميزات', 'استراتيجية المحتوى',
        'العمارة المعلوماتية', 'توجيه الفن', 'تصميم هوية العلامة التجارية', 'أنظمة التصميم', 'التصميم الجرافيكي', 'التخطيطات والنماذج الأولية',
        'تصميم واجهة المستخدم', 'تصميم تجربة المستخدم', 'تصميم التفاعل', 'تصميم تطبيقات الهاتف المحمول', 'تصميم الويب',
        'التصميم المتجاوب', 'تصميم المنتجات الرقمية', 'تصميم العبوات', 'الرسوم التوضيحية', 'تصميم الحركة', 'ضمان الجودة',
        'استراتيجية تقنية', 'استشارات تقنية', 'تنفيذ CMS', 'تطوير React / Next.JS', 'تطوير WebGL / 3D', 'تطوير Shopify',
        'تطوير Wordpress', 'تطوير الهاتف المحمول', 'تطوير Webflow', 'تطوير التجارة الإلكترونية', 'كتابة الإعلانات',
        'تحليل وتنقيح نسخ تحسين محركات البحث', 'أبحاث الكلمات الرئيسية الموضوعية', 'تصميم وسائل التواصل الاجتماعي', 'إدارة المحتوى'
    ];

    return {
        title: 'Our Services - Cairo Studio',
        description: 'Cairo Studio offers a wide range of services, including web development, UI/UX design, graphic design, branding, and strategy. Discover how we can help your business grow.',
        keywords: `Cairo Studio, services, ${services.join(', ')}, ${servicesArabic.join(', ')}`,
        openGraph: {
            title: 'Our Services - Cairo Studio',
            description: 'Cairo Studio offers a wide range of services, including web development, UI/UX design, graphic design, branding, and strategy. Discover how we can help your business grow.',
            url: 'https://cairo-studio.com/services',
            type: 'website',
            images: [
                {
                    url: 'https://res.cloudinary.com/ds20vy7zo/image/upload/v1718564315/og_pgmuwr.webp',
                    width: 1200,
                    height: 630,
                    alt: 'Cairo Studio Services',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Our Services - Cairo Studio',
            description: 'Cairo Studio offers a wide range of services, including web development, UI/UX design, graphic design, branding, and strategy. Discover how we can help your business grow.',
            images: [
                {
                    url: 'https://res.cloudinary.com/ds20vy7zo/image/upload/v1718564315/og_pgmuwr.webp',
                    alt: 'Cairo Studio Services',
                },
            ],
        },
        alternates: {
            canonical: 'https://cairo-studio.com/services'
        }
    };
}


export async function generateStaticParams() {
    return services.map((service) => ({ params: { slug: service.slug } }));
}



const Services: React.FC = async () => {

    let projects: Project[] = [];
    let error: string | null = null;

    try {
        projects = await serverFetchData();
    } catch (err) {
        error = (err as Error).message;
    }


    const order = ['Tag Media', 'Cairo Hosts', 'Lemkus', 'Aldar'];

    const displayedProjects = projects
        .filter((project: Project) => order.includes(project.title))
        .sort((a: Project, b: Project) => order.indexOf(a.title) - order.indexOf(b.title));




    if (error) {
        return <div>{error}</div>;
    }

    return (
        <main className={styles.services}>
            <h1 style={{ display: "none" }}>
                Our Services - Cairo Studio
            </h1>
            <Header />
            <ServicesCards displayedProjects={displayedProjects} />x
            <ServicesSplit data={ServicesData} />

        </main>
    )
}

export default Services