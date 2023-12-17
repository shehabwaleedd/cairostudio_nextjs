/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'], // Add domains from which you want to allow image loading
    },
};

module.exports = nextConfig;
