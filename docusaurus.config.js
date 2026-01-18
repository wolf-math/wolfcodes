import { themes as prismThemes } from 'prism-react-renderer';
import math from 'remark-math';
import katex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wolf Codes',
  tagline: 'Turning Complexity into Clarity.',
  favicon: 'images/wolf-logo_D5.png',
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://aaronwolf.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap'
  ],

  plugins: ['docusaurus-plugin-sass'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wolf-math', // Usually your GitHub org/user name.
  projectName: 'aaronwolfdev', // Usually your repo name.

  onBrokenLinks: 'throw',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: 'https://github.com/wolf-math/aaronwolfdev/tree/main/'
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/wolf-math/aaronwolfdev/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn'
        },
        theme: {
          customCss: ['./src/css/custom.css']
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'images/wolf-logo_D5.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      navbar: {
        title: 'Wolf Codes',
        logo: {
          alt: 'Wolf Logo',
          src: 'images/wolf-logo_D5.png'
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Docs'
          // },
          { to: '/docs/category/python', label: 'Python', position: 'left' },
          { to: '/docs/category/javascript', label: 'JavaScript', position: 'left' },
          { to: '/docs/category/command-line', label: 'Command Line', position: 'left' },
          { to: '/docs/category/github', label: 'GitHub', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/wolf-math',
            label: 'GitHub',
            position: 'right'
          },
          {
            href: 'https://www.linkedin.com/in/wolf-math',
            label: 'LinkedIn',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Python Docs',
                to: 'docs/category/python'
              },
              {
                label: 'JavaScript Docs',
                to: 'docs/category/javascript'
              },
              {
                label: 'Command Line Docs',
                to: '/docs/category/command-line'
              },
              {
                label: 'GitHub Docs',
                to: 'docs/category/github'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contact',
                to: '/contact'
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/wolf-math'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wolf-math'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'All docs',
                to: '/docs/category/coding-docs'
              },
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'About',
                to: '/about'
              },

            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aaron Wolf`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'INR2K2L48F',

        // Public API key: it is safe to commit it
        apiKey: 'cce1a52b1c6f94fa88eb56804ef29f31',

        // Index name - update this after applying for DocSearch and receiving your index name
        indexName: 'WolfCodes',

        // Contextual search ensures results are relevant to current language and version
        contextualSearch: true
      }
    })
};

export default config;
