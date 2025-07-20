// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const  analytics = require('@vercel/analytics');
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

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
  organizationName: 'vladmarginean@softwiz.ro', // Usually your GitHub org/user name.
  projectName: 'docusaurus-2', // Usually your repo name.
  i18n: {
    defaultLocale: 'ro',
    locales: ['ro', 'en'],
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
      algolia: {
        // The application ID provided by Algolia
        appId: 'W87288CRBD',
        // Public API key: it is safe to commit it
        apiKey: 'b99b5058451abcd93e15acb574a3ae27',
        indexName: 'help-jurnalgold',
        contextualSearch: true,
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        searchPagePath: 'search',
        placeholder: "caută ",
        language: 'ro',
      },
    })
   };

module.exports = config;
