interface DataType {
    id: number;
    title: string;
    elements: {
        text: string;
    }[]
}


const Data: DataType[] = [
    {
        id: 1,
        title:  "Research",
        elements: [
            {
                text: "Customer Research",
            },
            {
                text: "Market Research",
            },
            {
                text: "Competitor Research",
            },
            {
                text: "Brand Research",
            },
            {
                text: "Usability Research & Testing",
            },
            {
                text: "Analytics & Insights Reports",
            },
            {
                text: "Social Media Strategy & Management",
            },
            {
                text: "SEO Strategy",
            },
            {
                text: "Growth Strategy",
            },
            {
                text: "Post-Launch Strategy",
            }
        ]
    },
    {
        id: 2, 
        title: "Strategy",
        elements: [
            {
                text: "Product Ideation"
            },
            {
                text: "Product Roadmapping"
            },
            {
                text: "Target Audience Discovery"
            },
            {
                text: "Brand Naming & Strategy"
            },
            {
                text: "Brand Positioning & Architecture"
            },
            {
                text: "Feature Definition"
            },
            {
                text: "Content Strategy"
            },
            {
                text: "Social Media Strategy & Management"
            },
            {
                text: "Information Architecture"
            },
            {
                text: "Growth Strategy"
            },
            {
                text: "Post-Launch Strategy"
            }
        ]
    },
    {
        "id": 3,
        "title": "Design",
        "elements": [
            {
                "text": "Art Direction"
            },
            {
                "text": "Brand Identity Design"
            },
            {
                "text": "Design Systems"
            },
            {
                "text": "Graphic Design"
            },
            {
                "text": "Wireframing & Prototyping"
            },
            {
                "text": "User Interface Design"
            },
            {
                "text": "User Experience Design"
            },
            {
                "text": "Interaction Design"
            },
            {
                "text": "Mobile App Design"
            },
            {
                "text": "Web Design"
            },
            {
                "text": "Responsive Design"
            },
            {
                "text": "Digital Product Design"
            },
            {
                "text": "Packaging Design"
            },
            {
                "text": "Illustration"
            },
            {
                "text": "Motion Design"
            },
            {
                "text": "Quality Assurance"
            }
        ]
    },
    
    {
        id: 4,
        title: "Development",
        elements: [
            {
                text: "Techinal Strategy"
            },
            {
                text: "TECHNICAL CONSULTING"
            },
            {
                text: "CMS Implementation"
            },
            {
                text: "React / Next.JS Development"
            },
            {
                text: "WebGL / 3D Development",
            },
            {
                text: "Shopify Development",
            },
            {
                text: "Wordpress Development",
            },
            {
                text: "Mobile Development",
            },
            {
                text: "Webflow Development",
            },
            {
                text: "Shopify Development",
            },
            {
                text: "E-Commerce Development",
            },
            {
                text: "Quality Assurance"
            },
        ]
    },
    {
        id: 5,
        title: "Content",
        elements: [
            {
                text: "Copywriting"
            },
            {
                text: "SEO Copy Analysis & Refinement"
            },
            {
                text: "Thematic Keyword Research"
            },
            {
                text: "Social Media Design"
            },
            {
                text: "Content management"
            }
        ]
    }
]

export default Data