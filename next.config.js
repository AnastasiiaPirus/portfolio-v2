/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {root: __dirname},
    outputFileTracingRoot: __dirname,
    skipProxyUrlNormalize: true,
    outputFileTracingIncludes: {
        '*': ['./_posts/**/*.md', './public/llms.txt'],
    },
}

module.exports = nextConfig
