# Installation

> [!WARNING]
> The installation guide is under construction, try it at your own risk!
>
> It is also ment only for Arch based systems. All other distros are not supported and I will not be helping with issues related to them.

> [!TIP]
> Do you want to only install the neovim config? [Check over here!](https://github.com/Matt-FTW/dotfiles/tree/main/.config/nvim#package-neovim-standalone-config)

## :package: Dependencies Installation

> [!NOTE]
> The names of the packages are from the AUR and Arch Repos; adapt them to your system. Most of the packages are available on other distros official repos (most of the time out-to-date).
>
> To install CLI/TUI specific packages in non-arch based distros, I recommend to use [homebrew](https://brew.sh/).
>
> In the guide, I will be using [Yay](https://github.com/Jguer/yay) as the AUR helper. Be sure to [install it](../.local/bin/installYay) or change the commands to your preferred one.

### Base Packages

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

### Graphics Drivers

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

### Color Theme

To install the color theme for GTK and QT apps use the following command:

```bash
yay -Sy catppuccin-gtk-theme-macchiato catppuccin-cursors-macchiato \
        qt5ct qt5-wayland qt6-wayland kvantum kvantum-qt5 nwg-look
```

### Icon Theme

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

### Fonts

Install the following fonts:

```bash
yay -Sy ttf-jetbrains-mono-nerd ttf-nerd-fonts-symbols ttf-nerd-fonts-symbols-mono \
        ttf-nerd-fonts-symbols-common ttf-font-awesome noto-fonts-cjk ttf-ms-win11-auto
```

After that, be sure to refresh the font cache:

```bash
fc-cache -fv
```

## :floppy_disk: Dotfiles Installation

> [!CAUTION]
> Here we can take two routes (Yadm or Git). **CHOOSE ONE, NOT BOTH!**

### Yadm Method (_Recommended_)

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

### Git Method

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

## :heavy_plus_sign: Post Installation

Here are some things you might consider changing or adding:

- **Change Outputs**

Firstly, change the outputs defined in [this file](../.config/hypr/configs/monitors.conf). They are the ones defined for Hyprland to use, so is very important that you change them. If you wanna know what ID does your monitor has, execute `hyprctl monitors`.

You also need to change the workspaces associated with that monitor. For that, check [this file](../.config/hypr/configs/workspaces.conf).

For more information about Hyprland monitors and workspaces, [check the docs](https://wiki.hyprland.org/).

Now, for the Waybar to appear you also need to change the output definition on [this file](../.config/waybar/config.jsonc).

- **Change Default Applications**

To change the default applications by filetype, be sure to install [this app](https://github.com/magnus-ISU/selectdefaultapplication).

```bash
yay -Sy selectdefaultapplication-fork-git
```

If you wanna change the default apps used in the Hyprland bindings, change the variables over on [this file](../.config/hypr/configs/default_apps.conf).

- **Default Editor**

The default editor is Neovim, but you can change it to whatever editor you want. You only need to edit the [fish variables file](../.config/fish/user_variables.fish), and find where the EDITOR variable is defined.

Here's and example on how to change it to use VSCode.

```fish
# set -xg EDITOR nvim
set -xg EDITOR code
```

- **Git Changes**

If you are going to use git, be sure to change the user definition as well as the credentials over on the [gitconfig file](../.config/git/config).

- **Laptop Additions**

  - **Automatic CPU Frequency** (_Recommended_)

    This one is a must have for all laptops users, even for desktop pc users as well. Firstly, [install auto-cpufreq](https://github.com/AdnanHodzic/auto-cpufreq):

    ```bash
    yay -Sy auto-cpufreq
    ```

    After that, install the daemon by using this command:

    ```bash
    sudo auto-cpufreq --install
    ```

    If that didn't work, enable the systemd unit:

    ```bash
    sudo systemctl enable --now auto-cpufreq.service
    ```

    Now your good to go, check their documentation for more details on how to configure it. I personally use the default profile it comes with and I didn't had any issues.

  - **Bluetooth**

    Lets start by installing bluez (Bluetooth support) and overskride (GUI):

    ```bash
    yay -Sy bluez overskride
    ```

    After installing the required packages, we have to start the Bluetooth service:

    ```bash
    systemctl --user enable --now bluetooth.service
    ```

    Now launch overskride and there you have it.

  - **Brightness**

    Brightness control is integrated with [SwayOSD](https://github.com/ErikReider/SwayOSD) and [brightnessctl](https://github.com/Hummer12007/brightnessctl). Be sure to follow [this steps](https://github.com/ErikReider/>SwayOSD#brightness-control) on the SwayOSD documentation to be able to change the brightness.

    If you wanna have automatic screen brightness, install [wluma](https://github.com/maximbaz/wluma).

    ```bash
    yay -Sy wluma
    ```

    Then, enable the systemd unit.

    ```bash
    systemctl --user enable --now wluma.service
    ```

  - **Wi-Fi**

    To manage your Wi-Fi connections, I'd recommend you to install [iwgtk](https://github.com/J-Lentz/iwgtk):

    ```bash
    yay -Sy iwgtk
    ```

    Also, you have to enable the iwd service:

    ```bash
    sudo systemctl enable --now iwd.service
    ```

    To manage all the other network configurations, use something like [nm-connection-editor](https://gitlab.gnome.org/GNOME/network-manager-applet)

- **Keyring Support**

There are some applications that you might need the keyring for. Examples: bitwarden, dbeaver, protonmail-bridge, vlc...

To enable the keyring support, install the following packages:

```bash
yay -Sy gnome-keyring libsecret
```

- **Update Everything**

Do you want to have a single tool that help you to update a bunch of different packages from multiple package managers? You can do so with the help of [topgrade](https://github.com/topgrade-rs/topgrade).

```bash
yay -Sy topgrade
```

- **Audio Service** (_Optional_)

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

- **Specific Configs/Information** (_Optional_)

Finally, if you want to take a look at some specific app configuration, check the READMEs from each app in their respective config folders.

Some configuration examples are:

- [fish](../.config/fish/)
- [neovim](../.config/nvim/)
- [browser](../.config/browser/)
- [yazi](../.config/yazi/)
- [hyprland](../.config/hypr/)
- [vscodium](../.config/VSCodium/User/)
- [tmux](../.config/tmux/)

If you had any issues feel free to [open an issue](https://github.com/Matt-FTW/dotfiles/issues/new/choose).
Do you have some questions about the installation process? You can create a [new discussion post](https://github.com/Matt-FTW/dotfiles/discussions/new/choose) then. Be sure to read the [FAQ](./FAQ.md) first!
