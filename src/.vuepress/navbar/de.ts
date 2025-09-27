import { navbar } from "vuepress-theme-hope";

export const deNavbar = navbar([
  "/de/",
  { text: "Demo", icon: "discover", link: "/de/demo/" },
  {
    text: "Artikel",
    icon: "edit",
    prefix: "/de/posts/",
    children: [
      {
        text: "Technologie",
        icon: "edit",
        prefix: "tech/",
        children: [
          { text: "AWS Cloud", icon: "edit", link: "1" },
          { text: "DevOps", icon: "edit", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "Entwicklung",
        icon: "edit",
        prefix: "dev/",
        children: [
          {
            text: "Frontend",
            icon: "edit",
            link: "1",
          },
          {
            text: "Backend",
            icon: "edit",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "Portfolio", icon: "edit", link: "portfolio" },
      { text: "Projekte", icon: "edit", link: "projects" },
      "about",
      "contact",
    ],
  },
  {
    text: "Blog",
    icon: "note",
    link: "/de/posts/",
  },
]);
