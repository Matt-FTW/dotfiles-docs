import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: ".dotfiles",
  description: "💄 Yet another Aesthetic Hyprland Config",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/getting-started/about" },
      { text: "Credits", link: "/other/credits" },
    ],

    sidebar: [
      {
        text: "🏠 Getting Started",
        items: [
          {
            text: "About",
            link: "/getting-started/about",
          },
          {
            text: "Gallery",
            link: "/getting-started/gallery",
          },
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
      {
        text: "📖 Other",
        items: [
          {
            text: "Credits",
            link: "/other/credits",
          },
          {
            text: "FAQ",
            link: "/other/FAQ",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Matt-FTW/dotfiles" },
    ],
  },
});
