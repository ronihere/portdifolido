/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'avatars.githubusercontent.com',
                protocol:'https'
            },
            {
                hostname:"ibb.co",
                protocol:'https'
            }
        ]
    },
    experimental: {
serverActions: true,
},
}

module.exports = nextConfig
