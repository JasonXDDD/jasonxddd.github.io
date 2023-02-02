// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '成神之路',
  tagline: 'JasonXDDD 的技術文章，紀錄點平時學到的東西',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://jasonxddd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JasonXDDD', // Usually your GitHub org/user name.
  projectName: 'jasonxddd.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.svg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#242526',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/logo.svg',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: '#242526',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/logo.svg',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#242526',
          }
        ],
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // 最大缩放图片尺寸。
        min: 640, // 最小缩放图片尺寸。 如果原始值比这还低，会使用原图尺寸。
        steps: 2, // 在 min 和 max 之间最多生成的图片数量（包含两端点）
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-GP6YG0N9QR',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '成神之路',
        logo: {
          alt: 'JasonXDDD Blog Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '技術文件',
          },
          { to: '/blog', label: '碎碎念', position: 'left' },
          {
            href: 'https://github.com/jasonxddd',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.facebook.com/jasonliu1022',
            label: 'Facebook',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '快速導覽 Link',
            items: [
              {
                label: '技術文章',
                to: '/docs/intro',
              },
              {
                label: '碎碎念',
                to: '/blog',
              },
            ],
          },
          {
            title: '與我聯絡 Contact',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/jasonxddd',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/jasonliu1022',
              },
              {
                label: 'jason1022liu@gmail.com',
                href: 'mailto:jason1022liu@gmail.com',
              },
            ],
          },
          {
            title: '從前從前 OnceUponATime',
            items: [
              {
                label: '從前從前',
                href: 'https://once-upon-a-time.jasonxddd.me'
              },
              {
                label: '從前從前 iOS',
                href: 'https://apps.apple.com/tw/app/從前從前/id1479010256'
              },
              {
                label: '從前從前 介紹影片',
                href: 'https://www.facebook.com/watch/?v=446463282608647'
              },
            ],
          },
          {
            title: '貓罐子 BottleNeko',
            items: [
              {
                label: '貓罐子',
                href: 'https://bottleneko.app',
              },
              {
                label: '貓罐子 V2',
                href: 'https://bottleneko-v2.vercel.app',
              },
              {
                label: '貓罐子 粉絲專頁',
                href: 'https://www.facebook.com/BottleNeko',
              },
            ],
          },
        ],
        logo: {
          alt: 'JasonXDDD Blog Logo',
          src: 'img/logo.svg',
          href: 'https://jasonxddd.github.io',
          width: 160,
          height: 51,
        },

        copyright: `Copyright © ${new Date().getFullYear()} 成神之路 JasonXDDD, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
