// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cakrawala",
  tagline:
    "Jelajahi keindahan alam dan kultur yang unik di seluruh Nusantara, dilengkapi dengan informasi yang lengkap, serta gambar yang menarik",
  favicon: "img/icon.png",

  // Set the production url of your site here
  url: "https://cakrawala.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          // @ts-ignore
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { property: "og:url", content: "https://cakrawala.vercel.app/" },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Cakrawala | Ayo Kepoin Kebudayaan Dan Daerah Indonesia!",
        },
        {
          property: "og:description",
          content: "Ayo Kepoin Kebudayaan Dan Daerah Indonesia!",
        },
        {
          property: "og:image",
          content: "https://cakrawala.vercel.app/img/banner.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: "ketjeh-nusantara.vercel.app" },
        {
          property: "twitter:url",
          content: "https://cakrawala.vercel.app/",
        },
        {
          name: "twitter:title",
          content: "Cakrawala | Ayo Kepoin Kebudayaan Dan Daerah Indonesia!",
        },
        {
          name: "twitter:description",
          content: "Ayo Kepoin Kebudayaan Dan Daerah Indonesia!",
        },
        {
          name: "twitter:image",
          content: "https://cakrawala.vercel.app/img/banner.png",
        },
      ],

      // Replace with your project's social card
      navbar: {
        title: "Cakrawala",

        logo: {
          alt: "Site Logo",
          src: "img/icon.png",
          width: 32,
          height: 32,
        },

        items: [
          {
            href: "https://wa.me/+6282275338090?text=Hai%20Joann",
            label: "Contact",
            position: "right",
          },
          {
            href: "https://github.com/joanpoerba/ketjeh-nusantara",
            label: "GitHub",
            position: "right",
          },
        ],
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
