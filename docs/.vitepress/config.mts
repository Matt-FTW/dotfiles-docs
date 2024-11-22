import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: ".dotfiles",
  description: "💄 Yet another Aesthetic Hyprland Config",
  themeConfig: {
    logo: "/media/logo.svg",
    nav: [
      { text: "About", link: "/getting-started/about" },
      { text: "Credits", link: "/other/credits" },
    ],

    outline: [2, 3],

    sidebar: [
      {
        text: "🏠 Getting Started",
        items: [
          {
            text: "About",
            link: "/getting-started/about",
          },
          {
            text: "Installation",
            link: "/getting-started/installation",
          },
          {
            text: "Tips",
            link: "/getting-started/tips",
          },
          {
            text: "Gallery",
            link: "/getting-started/gallery",
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

    search: {
      provider: "local",
    },

    footer: {
      message:
        "Released under the <a href='https://github.com/Matt-FTW/dotfiles-docs/blob/main/LICENSE'>GPLv3</a> License.",
    },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
});
