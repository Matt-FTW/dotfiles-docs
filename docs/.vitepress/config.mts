import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dotfiles",
  description: "💄 Yet another Aesthetic Hyprland Config",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/getting-started/about" },
      { text: "Installation", link: "/getting-started/installation" },
    ],

    sidebar: [
      {
        text: "🏠 Getting Started",
        items: [
          { text: "About", link: "/getting-started/about" },
          {
            text: "Installation",
            link: "/getting-started/installation",
          },
        ],
      },
      {
        text: "⚙️  App Configs",
        items: [
          {
            text: "browser",
            link: "/app-confs/browser",
          },
          {
            text: "fish",
            link: "/app-confs/fish",
          },
          {
            text: "hyprland",
            link: "/app-confs/hyprland",
          },
          {
            text: "neovim",
            link: "/app-confs/neovim",
          },
          {
            text: "tmux",
            link: "/app-confs/tmux",
          },
          {
            text: "vscodium",
            link: "/app-confs/vscodium",
          },
          {
            text: "yazi",
            link: "/app-confs/yazi",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Matt-FTW/dotfiles" },
    ],
  },
});
