<div align="center">
<a href="#"><img src="../media/dotfiles-about.png"></a>
</div>

<div align="center">

<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="90%"/><br>

</div>

## 📝 Description

Hey there! 👋

This is my personal dotfiles repository.

I created this repo to help me backup my config files and to easily **deploy** them in a new machine with the help of [Ansible](https://www.ansible.com/) and [yadm](https://yadm.io). It has some files exclusive to my personal use (programming, gaming, etc) so it's not just a rice.

At first I didn't think about ricing but more and more, my focus has got into creating a good and aesthetic rice, with a lot of customization, as well as maintaining the easy deploy and use for my multiple machines.

I've been working on this for a long time so I hope you like it!

## ✨ Features

- 🕶 Dark Mode for the Whole System
- 💤 Neovim powered by LazyVim with Custom Extras Added (More than 200!)
- 👆 Screenshot, Keybindings, Games, Clipboard, Color and Wallpaper Picker
- 🪟 Animations for nearly all the System
- 🔧 Modular Configuration
- 🖥AwesomeWM Workspace Behavior
- 📂 Following XDG Base Directory Standard
- 🚃 Automatic Mounting of USB Devices with Notification
- 📜 Scratchpads
- 💫 Beautiful [Wallpapers](https://github.com/Matt-FTW/dotfiles/tree/main/.config/hypr/theme/walls)
- 🤓 Shell Prompt with Nerd Icons
- ➕ Extra Hyprland Plugins
- 🌍 Custom Userchrome and Extension Configurations
- 🚀 Minimal VSCodium with Native Integration of your Neovim Setup
- 🦀 Rust Alternatives
- 🔔 Notification Center
- 🔊 Volume and Brightness OSD
- 🎨 Color Scripts for the Terminal
- 🔐 Idle and Lock apps
- ⚡ Performance Mode
- ⚙ Various other Tweaks

---

## 🌸 Core System Info

The rice codename is **Athenea**, named after the Greek God of War 🛡.

- **OS**: [Arch Linux](https://archlinux.org/) 💥
- **WM**: [hyprland](https://hyprland.org/) 🪟
- **Shell**: [fish](https://fishshell.com/) 🐚
- **Terminal Emulator**: [kitty](https://sw.kovidgoyal.net/kitty/) 😺
- **Panel**: [waybar](https://github.com/Alexays/Waybar) 🍧
- **Text Editor**: [neovim](https://neovim.io/) ⌨
- **App Launcher**: [rofi](https://davatorium.github.io/rofi/) 🚀
- **File Manager**: [yazi](https://yazi-rs.github.io/) / [nemo](https://community.linuxmint.com/software/view/nemo) 📂
- **Browser**: [Zen-Browser](https://zen-browser.app) 🌐
- **Notification Manager**: [swaync](https://github.com/ErikReider/SwayNotificationCenter) 🔕
- **Colorscheme**: [Catppuccin](https://github.com/catppuccin/catppuccin) 🎨

---

## 🐧 Whole System Info

Here is all the information about my setup:

> [!NOTE]
> Some of this apps have the config files included in the repo, which are marked with ⚙️.
> Also, my favorite are programs and tools are marked with 💖.

<details>
  <summary><b>🐧 System</b></summary>

| 📚 Entry                       | ✨ App                                                                                                                                       |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **OS**                         | 💖 [Arch Linux](https://archlinux.org/)                                                                                                      |
| **Package Manager**            | [pacman](https://wiki.archlinux.org/title/Pacman) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/pacman)                        |
| **AUR Helper**                 | 💖 [yay](https://github.com/Jguer/yay) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/yay)                                      |
| **Display Manager**            | [greetd](https://sr.ht/~kennylevinsen/greetd/) (with [tuigreet](https://github.com/apognu/tuigreet))                                         |
| **Window Manager**             | 💖 [hyprland](https://hyprland.org/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/hypr)                                       |
| **Notification Daemon/Center** | [swaync](https://github.com/ErikReider/SwayNotificationCenter) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/swaync)           |
| **OSD Popup**                  | [swayosd](https://github.com/ErikReider/SwayOSD)                                                                                             |
| **Bar**                        | 💖 [waybar](https://github.com/Alexays/Waybar) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/waybar)                           |
| **Audio Daemon**               | [pipewire](https://pipewire.org/)                                                                                                            |
| **Application Launcher**       | 💖 [rofi](https://github.com/lbonn/rofi) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/rofi)                                   |
| **Firewall**                   | [ufw](https://wiki.archlinux.org/title/ufw)                                                                                                  |
| **Clipboard Manager**          | [wl-clipboard](https://github.com/bugaevc/wl-clipboard) (with [cliphist](https://github.com/sentriz/cliphist))                               |
| **Wallpaper Switcher**         | [hyprpaper](https://github.com/hyprwm/hyprpaper)                                                                                             |
| **Lock Screen**                | [hyprlock](https://github.com/hyprwm/hyprlock) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/hypr/hyprlock.conf)               |
| **Idle Timeout**               | [hypridle](https://github.com/hyprwm/hypridle) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/hypr/hypridle.conf)               |
| **Color Picker**               | [hyprpicker](https://github.com/hyprwm/hyprpicker)                                                                                           |
| **Screenshot Tool**            | [hyprshot](https://github.com/Gustash/Hyprshot) (Using [grim](https://sr.ht/~emersion/grim/) and [slurp](https://github.com/emersion/slurp)) |
| **Image Annotation**           | [satty](https://github.com/gabm/Satty) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/satty)                                    |

</details>

<details>
  <summary><b>🖥️ CLI/TUI Apps</b></summary>

| 📚 Entry                    | ✨ App                                                                                                                                  |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Shell**                   | 💖 [fish](https://fishshell.com/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/fish)                                     |
| **Terminal Emulator**       | 💖 [kitty](https://sw.kovidgoyal.net/kitty/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/kitty)                         |
| **Terminal Multiplexer**    | [tmux](https://github.com/tmux/tmux) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/tmux)                                  |
| **Shell Prompt**            | [starship](https://starship.rs/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/starship)                                  |
| **Text Editor**             | 💖 [neovim](https://neovim.io/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/nvim)                                       |
| **Shell History**           | [atuin](https://github.com/atuinsh/atuin) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/atuin)                            |
| **CD Replacement**          | 💖 [zoxide](https://github.com/ajeetdsouza/zoxide)                                                                                      |
| **LS Replacement**          | [eza](https://github.com/eza-community/eza)                                                                                             |
| **Cat Replacement**         | [bat](https://github.com/sharkdp/bat) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/bat)                                  |
| **Find Replacement**        | [fd](https://github.com/sharkdp/fd) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/fd)                                     |
| **File Manager**            | 💖 [yazi](https://yazi-rs.github.io/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/yazi)                                 |
| **Help Pages**              | [navi](https://github.com/denisidoro/navi) / [TLDR](https://tldr.sh/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/navi) |
| **Fuzzy File Finder**       | 💖 [fzf](https://github.com/junegunn/fzf)                                                                                               |
| **Fuzzy Word Finder**       | [ripgrep](https://github.com/BurntSushi/ripgrep) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/rg)                        |
| **Git TUI**                 | 💖 [lazygit](https://github.com/jesseduffield/lazygit) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/lazygit)             |
| **Npm Manager TUI**         | [lazynpm](https://github.com/jesseduffield/lazynpm)                                                                                     |
| **Docker TUI**              | [lazydocker](https://github.com/jesseduffield/lazydocker)                                                                               |
| **Arch Package Search TUI** | [pacseek](https://github.com/moson-mo/pacseek) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/packseek)                    |
| **Trash CLI**               | [gtrash](https://github.com/umlx5h/gtrash)                                                                                              |
| **Update Tool**             | [topgrade](https://github.com/topgrade-rs/topgrade) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/topgrade)               |
| **Audio Visualizer**        | [cava](https://github.com/karlstav/cava) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/cava)                              |
| **System Monitor**          | [btop](https://github.com/aristocratos/btop) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/btop)                          |
| **GPU Monitor**             | [nvtop](https://github.com/Syllo/nvtop)                                                                                                 |
| **System Fetch**            | [fastfetch](https://github.com/fastfetch-cli/fastfetch) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/fastfetch)          |
| **Git Fetch**               | [onefetch](https://github.com/o2sh/onefetch)                                                                                            |
| **Keybindings TUI**         | [keyb](https://github.com/kencx/keyb) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/keyb)                                 |

</details>

<details>
  <summary><b>🖱️ GUI Apps</b></summary>

| 📚 Entry                 | ✨ App                                                                                                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Music Player**         | [Spotify](https://open.spotify.com/) (patched with [Spicetify](https://spicetify.app/)) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/spicetify) |
| **Fallback Text Editor** | [VSCodium](https://vscodium.com/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/VSCodium/User)                                                   |
| **Web Browser**          | 💖 [Zen-Browser](https://zen-browser.app) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/browser)                                                 |
| **Messaging App**        | [Vesktop](https://github.com/Vencord/Vesktop) (Custom Discord Client) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/vesktop)                     |
| **Email Client**         | [Thunderbird](https://www.thunderbird.net/)                                                                                                                    |
| **PDF Viewer**           | [Zathura](https://pwmt.org/projects/zathura/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/zathura)                                             |
| **Note Taking App**      | 💖 [Obsidian](https://obsidian.md/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/obsidian)                                                      |
| **Video Player**         | [MPV](https://mpv.io/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/mpv)                                                                        |
| **Image Viewer**         | [qimgv](https://github.com/easymodo/qimgv) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/qimgv)                                                  |
| **File Manager**         | [Nemo](https://community.linuxmint.com/software/view/nemo)                                                                                                     |
| **Audio Effects**        | [Easyeffects](https://github.com/wwmm/easyeffects) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/easyeffects)                                    |
| **Image Editor**         | [Krita](https://krita.org/)                                                                                                                                    |
| **VM Manager**           | [Virt-Manager](https://virt-manager.org/) ([QEMU](https://www.qemu.org/))                                                                                      |
| **Recording Program**    | [OBS](https://obsproject.com/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/obs-studio)                                                         |
| **Office Apps**          | [LibreOffice](https://www.libreoffice.org/)                                                                                                                    |

</details>

<details>
  <summary><b>🔍 Other</b></summary>

| 📚 Entry                        | ✨ App                                                                                                      |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Colorscheme**                 | 💖 [Catppuccin Macchiato](https://github.com/catppuccin/catppuccin)                                         |
| **Font**                        | [JetBrainsMono Nerd Font](https://www.jetbrains.com/es-es/lp/mono/)                                         |
| **Icon Theme**                  | [Catppuccin-SE](https://github.com/ljmill/catppuccin-icons)                                                 |
| **Dotfiles Manager**            | 💖 [yadm](https://yadm.io/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/yadm)               |
| **Automatic System Deployment** | 💖 [Ansible](https://www.ansible.com/) [⚙](https://github.com/Matt-FTW/dotfiles/tree/main/.config/ansible) |

</details>
