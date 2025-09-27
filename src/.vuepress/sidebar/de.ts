import { sidebar } from "vuepress-theme-hope";

export const deSidebar = sidebar({
  "/de/": [
    "",
    {
      text: "Anleitung",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "Artikel",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
