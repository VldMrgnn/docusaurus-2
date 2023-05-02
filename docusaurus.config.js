// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const  analytics = require('@vercel/analytics');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

analytics.inject();
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentație pentru Jurnal Gold',
  tagline: 'Aeastă pagină este în construcție',
  url: 'https://help.jurnalgold.ro',
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
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Jurnal Gold Logo",
          src: "img/jurnalgold-icon-64x64.svg",
        },
        items: [
          {
            to: "https://help.jurnalgold.ro",
            label: "Documentație",
            position: "left",
            target: "_self",
            className: "navbar-item-help",
          },
          {
            to: "https://admin.jurnalgold.ro",
            label: "Administrare",
            position: "left",
            target: "_self",
            className: "navbar-item-admin",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Softwiz Creation © ${new Date().getFullYear()} Jurnal Gold Admin Panel (Documentatie).`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    })
   };

module.exports = config;
