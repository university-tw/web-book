// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Web小學堂',
    tagline: '沈迷學習Web',
    url: 'https://web.about.university.tw',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'university-tw', // Usually your GitHub org/user name.
    projectName: 'web-book', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hant',
        locales: ['zh-Hant'],
    },
    themes: ['@docusaurus/theme-mermaid'],
    markdown: {
        mermaid: true
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
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Web 小學堂',
                logo: {
                    alt: 'Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: '教材',
                    },
                    {to: '/blog', label: '紀錄', position: 'left'},
                    {
                        href: 'https://github.com/university-tw/web-book',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: '教材',
                        items: [
                            {
                                label: '教材內容',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: '其他',
                        items: [
                            {
                                label: '紀錄',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/university-tw/web-book',
                            },
                        ],
                    },
                ],
                copyright: `© ${new Date().getFullYear()} Web小學堂，教材模板使用 Docusaurus`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),

};

module.exports = config;
