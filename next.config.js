/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'], // Add domains from which you want to allow image loading
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // This will add the mp4 file handling capability to the webpack configuration
            config.module.rules.push({
                test: /\.mp4$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next/static/videos/',
                        outputPath: 'static/videos/',
                        name: '[name].[ext]',
                    },
                },
            });
        }
        return config;
    },
};

module.exports = nextConfig;
