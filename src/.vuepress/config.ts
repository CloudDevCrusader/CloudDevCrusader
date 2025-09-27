import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  bundler: viteBundler(),

  locales: {
    "/": {
      lang: "en-US",
      title: "CloudDevCrusader",
      description: "Markus Wagner's Digital Portfolio & Tech Hub - Full-Stack Cloud Developer, AWS Solutions Architect, DevOps Engineer",
    },
    "/de/": {
      lang: "de-DE",
      title: "CloudDevCrusader",
      description: "Markus Wagners digitales Portfolio & Tech-Hub - Full-Stack Cloud-Entwickler, AWS-Lösungsarchitekt, DevOps-Ingenieur",
    },
  },

  theme,

  shouldPrefetch: false,
});
