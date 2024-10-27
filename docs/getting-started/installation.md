<div align="center">
<a href="#"><img src="../media/dotfiles-setup.png"></a>
</div>

<div align="center">

<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="90%"/><br>

</div>

> [!WARNING]
> The installation guide is under construction, try it at your own risk!
>
> It is also ment only for Arch based systems. All other distros are not supported and I will not be helping with issues related to them.

> [!TIP]
> Do you want to only install the neovim config? [Check over here!](https://github.com/Matt-FTW/dotfiles/tree/main/.config/nvim#package-neovim-standalone-config)

## 📤 Dependencies Installation

> [!NOTE]
> The names of the packages are from the AUR and Arch Repos; adapt them to your system. Most of the packages are available on other distros official repos (most of the time out-to-date).
>
> To install CLI/TUI specific packages in non-arch based distros, I recommend to use [homebrew](https://brew.sh/).
>
> In the guide, I will be using [Yay](https://github.com/Jguer/yay) as the AUR helper. Be sure to [install it](https://github.com/Matt-FTW/dotfiles/blob/main/.local/bin/installYay) or change the commands to your preferred one.

### 📦 Base Packages

#### System

```bash
yay -Sy hyprland hyprlock hypridle xdg-desktop-portal-hyprland hyprpicker \
        swww waybar waybar-updates rofi-wayland swaync wl-clipboard cliphist \
        swayosd-git brightnessctl udiskie devify polkit-gnome playerctl \
        pyprland grim slurp \
```

#### CLI/TUI

```bash
yay -Sy fastfetch fzf jq eza fd vivid fish starship ripgrep bat yazi
```

#### GUI Apps

```bash
yay -Sy pavucontrol satty nemo zathura zathura-pdf-mupdf qimgv-light mpv
```

### 🪟 Graphics Drivers

> [!WARNING]
> Skip this step if you already have the correct drivers for your graphics card.

Chose one if this commands depending on your graphics card brand.

```bash
# AMD (Open Source)
yay -Sy xf86-video-amdgpu xf86-video-amdgpu vulkan-radeon lib32-vulkan-radeon vulkan-tools \
        opencl-clover-mesa lib32-opencl-clover-mesa libva-mesa-driver lib32-libva-mesa-driver \
        mesa lib32-mesa mesa-vdpau lib32-mesa-vdpau vdpauinfo clinfo

# Nvidia (Propietary)
yay -Sy nvidia nvidia-utils nvidia-settings opencl-nvidia lib32-nvidia-utils \
        lib32-opencl-nvidia cuda vdpauinfo clinfo

# Intel (Open Source)
yay -Sy xf86-video-intel vulkan-intel lib32-vulkan-intel vulkan-tools libva-intel-driver \
        lib32-libva-intel-driver mesa lib32-mesa mesa-vdpau lib32-mesa-vdpau
```

### 🔊 Audio Service

> [!WARNING]
> If you have Pipewire already setup on your system, you dont have to follow this step.

Firstly, install this dependencies:

```bash
yay -Sy pipewire pipewire-alsa pipewire-pulse pipewire-jack wireplumber alsa-utils
```

Now enable pipewire and wireplumber systemd services:

```bash
systemctl --user enable --now pipewire wireplumber
```

And there you have it.

### 🎨 Color Theme

To install the color theme for GTK and QT apps use the following command:

```bash
yay -Sy catppuccin-gtk-theme-macchiato catppuccin-cursors-macchiato \
        qt5ct qt5-wayland qt6-wayland kvantum kvantum-qt5 nwg-look
```

### 📸 Icon Theme

First off, we have to download the icon package from the releases page of their repo. You can do it very easily by using curl.

```bash
curl -LJO https://github.com/ljmill/catppuccin-icons/releases/download/v0.2.0/Catppuccin-SE.tar.bz2
```

Once you have that, its time to extract the compressed package.

```bash
tar -xf Catppuccin-SE.tar.bz2
```

And finally, move them to the ~/.local/share/icons directory.

```bash
mv Catppuccin-SE ~/.local/share/icons/
```

### 🗛 Fonts

Install the following fonts:

```bash
yay -Sy ttf-jetbrains-mono-nerd ttf-nerd-fonts-symbols ttf-nerd-fonts-symbols-mono \
        ttf-nerd-fonts-symbols-common ttf-font-awesome noto-fonts-cjk ttf-ms-win11-auto
```

After that, be sure to refresh the font cache:

```bash
fc-cache -fv
```

## 💾 Dotfiles Installation

> [!CAUTION]
> Here we can take two routes (Yadm or Git). **CHOOSE ONE, NOT BOTH!**

### 🌟 Yadm Method

> [!NOTE]
> This is the recommended method out of the two

[Yadm](https://yadm.io/) is amazing. It lets you manage your dotfiles with git without the hassle of creating a git repo on your home directory as well as gitignoring a lot of files.

It also lets you pull from the repos that you set up on remote to your local repo and then push to your personal remote.

I'd recommend you to look at it if you want a more personal and advanced config.

For now, we are going to install it the simple way without to many complications and just to have an origin to pull and another to push.

Firstly, **be sure to backup your existing config files**. Then, we are going to install yadm. You can do it using pacman with the following command:

```bash
yay -Sy yadm
```

After that, its time to clone the dotfiles repo into your system using yadm.

> [!IMPORTANT]
> If any file in your local machine differs from the one in the remote repository, your local file will remain unmodified. You'll need to manually review and resolve any differences.

```bash
yadm clone https://github.com/Matt-FTW/dotfiles.git
```

Congratulations, at this point your done installing the configuration! :tada:

Logout from your current desktop session and log back into the Hyprland session.

If you want to pull from my remote, commit or add any files you can do it using yadm and then the git command you want to use (pull, commit, add, etc).

Now, if you want to **add your personal remote**, use the following command:

```bash
yadm remote add origin <url>
```

Then, be sure to push your changes to your remote!

Now you can receive new updates from my repo and modify your custom one :sunglasses:

### 🚀 Git Method

Firstly, clone this repository (remember to have git installed).

```bash
git clone https://github.com/Matt-FTW/dotfiles.git
cd dotfiles
```

Now is time to copy the files into their respective directories. **Be sure to backup your existing configuration files** before copying the files.
Once you have that, its time to copy the config files.

```bash
cp -r .config/* ~/.config/
cp -r .local/bin/* ~/.local/bin/
```

Congratulations, at this point your done installing the configuration! :tada:

Logout from your current desktop session and log back into the Hyprland session.

## ➕ Post Installation

Be sure to check out the [Tips Page](./tips.md) as well as the entries for each app in the **App Configs** section of the sidebar.

If you had any issues feel free to [open an issue](https://github.com/Matt-FTW/dotfiles/issues/new/choose).
Do you have some questions about the installation process? You can create a [new discussion post](https://github.com/Matt-FTW/dotfiles/discussions/new/choose) then. Be sure to read the [FAQ](../other/FAQ) first!
