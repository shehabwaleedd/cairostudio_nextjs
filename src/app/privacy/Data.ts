interface Data {
    id: number;
    title: string;
    text: string[];
}


const Data: Data[] = [
    {
        id: 1,
        title: "Privacy Notice",
        text: [
            "This Privacy Notice for Cairo Studio informs website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decides to use our Service, the Cairo Studio website."
        ]
    },
    {
        id: 2,
        title: "What information do we collect?",
        text: [
            "We do not collect personal data. We use Google Analytics and Umami for analytics purposes to understand how visitors use our website."
        ]
    },
    {
        id: 3,
        title: "How do we use your information?",
        text: [
            "We use the analytics data collected to analyze trends, administer the site, track user movements, and gather demographic information. This data helps us improve our website and services.",
            "We do not sell, trade, or rent your personal data to third parties. We may share anonymized analytics data with our service providers who help us operate our website and provide our services, but only to the extent necessary for them to perform their services for us."
        ]
    },
    {
        id: 4,
        title: "How do we protect your information?",
        text: [
            "We use appropriate technical and organizational measures to protect the analytics data that we collect. The measures we use are designed to provide a level of security appropriate to the risk of processing this data.",
            "Unfortunately, no transmission of information over the Internet can be guaranteed to be completely secure. While we strive to protect the analytics data, we cannot ensure or warrant the security of any information you transmit to us or from our online services, and you do so at your own risk."
        ]
    },
    {
        id: 5,
        title: "Your rights",
        text: [
            "You have the right to request access to the analytics data we hold about you and to receive a copy of it. You also have the right to ask us to correct any inaccurate data, to delete data, or otherwise restrict our processing, or to object to processing or to receive an electronic copy of the data you provided to us. Please note that the above rights are not absolute, and we may be entitled to refuse requests, wholly or partly, where exceptions under the applicable law apply.",
            "If you have any questions about our privacy practices or would like to make a complaint, please contact us at hello@cairo-studio.com"
        ]
    },
    {
        id: 6,
        title: "Changes to this Privacy Notice",
        text: [
            "We may update this Privacy Notice from time to time in response to changing legal, technical, or business developments. When we update our Privacy Notice, we will take appropriate measures to inform you, consistent with the significance of the changes we make. We will obtain your consent to any material Privacy Notice changes if and where this is required by applicable data protection laws.",
            "You can see when this Privacy Notice was last updated by checking the “last updated” date displayed at the top of this Privacy Notice."
        ]
    }
];

export default Data;
