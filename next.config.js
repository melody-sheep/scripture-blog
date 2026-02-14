/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['www.meisterdrucke.us', 'dwellingintheword.files.wordpress.com', 'livingwords.in', 'cdn.prod.website-files.com'],
  },
};

module.exports = withMDX(nextConfig);