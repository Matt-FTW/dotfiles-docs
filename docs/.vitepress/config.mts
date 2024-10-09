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
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Matt-FTW/dotfiles" },
    ],
  },
});
