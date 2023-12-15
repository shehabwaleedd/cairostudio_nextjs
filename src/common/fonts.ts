// Import localFont from next/font
import localFont from 'next/font/local';

interface Font {
    src: string;
    weight: string;
    style: string;
    display: string;
}



const Outfit: Font = {
    src: '/fonts/Outfit/Outfit.woff2',
    weight: '400',
    style: 'normal',
    display: 'swap',
};
