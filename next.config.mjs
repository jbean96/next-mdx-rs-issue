import remarkFrontmatter from 'remark-frontmatter';
import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
});

const nextConfig = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // mdxRs doesn't seem to work with remarkFrontmatter
    mdxRs: true
  }
});

export default nextConfig;
