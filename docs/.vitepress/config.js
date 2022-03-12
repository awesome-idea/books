import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "👀👀👀👀",
  description: "Vite & Vue powered static site generator.",
  lastUpdated: true,
  base: "/books",

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
        {
          text: "知乎提问：IntelliJ IDEA 有哪些优势？",
          link: "/zhihu-29076145",
        },
        { link: "/rebase-idea", text: "rebase-idea" },
        { link: "/install-idea", text: "install-idea" },
        { link: "/edit-tab-idea", text: "edit-tab-idea" },
        {
          link: "/202003-version-update-idea",
          text: "202003-version-update-idea",
        },
        { link: "/vim-mac-idea", text: "vim-mac-idea" },
        { link: "/kerboard", text: "kerboard" },
        { link: "/pre", text: "pre" },
        { link: "/debugger", text: "debugger" },
        { link: "/auto-import-idea", text: "auto-import-idea" },
        { link: "/base", text: "base" },
        { link: "/pre-idea", text: "pre-idea" },
        { link: "/no-crack-idea", text: "no-crack-idea" },
        { link: "/add-push-git-idea", text: "add-push-git-idea" },
        { link: "/log-git-idea", text: "log-git-idea" },
        { link: "/background-setting-idea", text: "background-setting-idea" },
        {
          link: "/can't-remember-passpord-datagrid",
          text: "can't-remember-passpord-datagrid",
        },
        { link: "/search-replace-idea", text: "search-replace-idea" },
        { link: "/show-model-idea", text: "show-model-idea" },
        { link: "/menu-toolbar-idea", text: "menu-toolbar-idea" },
        { link: "/debugger-tool-idea", text: "debugger-tool-idea" },
        { link: "/breakpointer-debugger", text: "breakpointer-debugger" },
        { link: "/merge-idea", text: "merge-idea" },
        { link: "/interface-idea", text: "interface-idea" },
        { link: "/menus-and-tools", text: "menus-and-tools" },
        {
          link: "/revert history commit in\u300cIntelliJ IDEA\u300d",
          text: "revert history commit in\u300cIntelliJ IDEA\u300d",
        },
        { link: "/git-flow-idea", text: "git-flow-idea" },
        { link: "/Setting-Appearances", text: "Setting-Appearances" },
        { link: "/cn-vim-vscode-resolve", text: "cn-vim-vscode-resolve" },
        { link: "/version", text: "version" },
        { link: "/light-edit-idea", text: "light-edit-idea" },
        { link: "/quick-list", text: "quick-list" },
        { link: "/multiple-point-idea", text: "multiple-point-idea" },
        {
          link: "/step-to-step-breakpointer-debugger-idea",
          text: "step-to-step-breakpointer-debugger-idea",
        },
        { link: "/plugins", text: "plugins" },
        { link: "/vim-idea", text: "vim-idea" },
        { link: "/window-debugger-idea", text: "window-debugger-idea" },
        { link: "/color-font-config-idea", text: "color-font-config-idea" },
        { link: "/theme-idea", text: "theme-idea" },
        { link: "/edit-nav-idea", text: "edit-nav-idea" },
        { link: "/commit-git-idea", text: "commit-git-idea" },
        { link: "/git-git-idea", text: "git-git-idea" },
        { link: "/update-theme-idea", text: "update-theme-idea" },
        { link: "/branch-git-idea", text: "branch-git-idea" },
        { link: "/git-idea", text: "git-idea" },
        { link: "/config-interface-idea", text: "config-interface-idea" },
        {
          link: "/windows-mac-keyboard-compare-idea",
          text: "windows-mac-keyboard-compare-idea",
        },
        { link: "/first-java-idea", text: "first-java-idea" },
        { link: "/multiple-pointer-idea-v1", text: "multiple-pointer-idea-v1" },
      ],
    },
  ];
}
