// noinspection JSDeprecatedSymbols

import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, deNavbar } from "./navbar";
import { enSidebar, deSidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://markuswagner.cloud",

  author: {
    name: "Markus Wagner",
    url: "https://markuswagner.cloud",
    email: "contact@markuswagner.cloud",
  },

  logo: "/logo.svg",

  repo: "CloudDevCrusader/CloudDevCrusader",

  docsDir: "src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      Email: "mailto:contact@markuswagner.cloud",
      GitHub: "https://github.com/CloudDevCrusader",
      Linkedin: "https://linkedin.com/in/markuswagner93",
      Twitter: "https://twitter.com/CloudCrusader_X",
      Discord: "https://discord.gg/your-server",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Made with ❤️ by Markus Wagner | © 2024 CloudDevCrusader",

      displayFooter: true,

      blog: {
        description: "Full-Stack Cloud Developer | AWS Solutions Architect | DevOps Engineer",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * German locale config
     */
    "/de/": {
      // navbar
      navbar: deNavbar,

      // sidebar
      sidebar: deSidebar,

      footer: "Erstellt mit ❤️ von Markus Wagner | © 2024 CloudDevCrusader",

      displayFooter: true,

      blog: {
        description: "Full-Stack Cloud-Entwickler | AWS-Lösungsarchitekt | DevOps-Ingenieur",
        intro: "/de/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "Diese Seite auf GitHub bearbeiten",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/de/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: true,

    icon: {
      assets: "fontawesome-with-brands",
    },

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // Comment system disabled for now
    // comment: {
    //   provider: "Giscus",
    //   repo: "CloudDevCrusader/CloudDevCrusader",
    //   repoId: "your-repo-id",
    //   category: "General",
    //   categoryId: "your-category-id",

    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",
    //
    //   /**
    //    * Using Waline
    //    */
    //   // provider: "Waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    // Disable features you don’t want here
    "mdEnhance": {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //           {
    //             src: "/assets/icon/guide-monochrome.png",
    //             sizes: "192x192",
    //             purpose: "monochrome",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
