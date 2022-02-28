import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "👀👀👀👀",
  description: "Vite & Vue powered static site generator.",
  lastUpdated: true,
  base: '/books',

  themeConfig: {
    repo: "vuejs/vitepress",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
    nav: [{ text: "Awesome", link: "/", activeMatch: "^/$|^/guide/" }],

    sidebar: {
      "/": getGuideSidebar(),
    },
  },
});

function getGuideSidebar() {
  return [
    {
      text: "🌈",
      children: [
        { text: "What is VitePress?", link: "/" },
        { text: "基础配置", link: "/useful-shortcuts" },
        {
          text: "知乎提问：IntelliJ IDEA 有哪些优势？",
          link: "/zhihu-29076145",
        },
      ],
    },
  ];
}
