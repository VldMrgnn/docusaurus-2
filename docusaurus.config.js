// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentație pentru Jurnal Gold',
  tagline: 'Aeastă pagină este în construcție',
  url: 'https://quick.jurnalgold.ro',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vladmarginean@softwiz.ro', // Usually your GitHub org/user name.
  projectName: 'docusaurus-2', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ro',
    locales: ['en','ro'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Început',
        logo: {
          alt: 'Jurnal Gold Logo',
          src: 'img/jurnalgold-icon-64x64.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentație',
          },
          {to: '/blog', label: 'Resurse', position: 'left', enabled:false},
          {
            href: 'https://github.com/SoftwizCreation/Jurnal-Gold',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Pagina de Web',
            items: [
              {
                label: 'Softwiz, contact',
                href: 'https://www.softwiz.ro/contact/',
              }
            ],
          },
          {
            title: 'Altele',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              // {
              //   label: 'Email:',
              //   href: 'mailto:support@softwiz.ro',
              // },{
              //   label: 'Telefon:',
              //   href: 'tel:+40722600000',
              // }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Softiwiz Creation srl`,
      },
      plugins: [
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'my-docs',
            path: 'docs',
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl: 'https://github.com/<org>/<repo>/edit/main/docs/',
            routeBasePath: 'docs',
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
          },
        ],
        [
          '@docusaurus/plugin-content-pages',
          {
            path: 'pages',
          },
        ],
        [
          '@docusaurus/plugin-ideal-image',
          {
            sizes: [320, 640, 960, 1200, 1600, 2000],
            quality: 70,
            max: 2000,
            min: 640,
            steps: 6,
          },
        ],
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'withStaticFiles',
            path: 'withStaticFiles',
            editUrl: 'https://github.com/<org>/<repo>/edit/main/docs/',
            sidebarPath: require.resolve('./sidebars.js'),
            withStaticFiles: true, // Enable the withStaticFiles plugin
          },
        ],
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
