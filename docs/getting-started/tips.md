<div align="center">
<a href="#"><img src="../media/dotfiles-tips.png"></a>
</div>

<div align="center">

<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="90%"/><br>

</div>

There are things that you may want to add or change in the dotfiles. Here are some:

## For Everyone

### Default Monitors

Firstly, change the outputs defined in [this file](https://github.com/Matt-FTW/dotfiles/blob/main/.config/hypr/configs/monitors.conf). They are the ones defined for Hyprland to use, so is very important that you change them. If you wanna know what ID does your monitor has, execute `hyprctl monitors`.

You also need to change the workspaces associated with that monitor. For that, check [this file](https://github.com/Matt-FTW/dotfiles/blob/main/.config/hypr/configs/workspaces.conf).

For more information about Hyprland monitors and workspaces, [check the docs](https://wiki.hyprland.org/).

Now, for the Waybar to appear you also need to change the output definition on [this file](https://github.com/Matt-FTW/dotfiles/blob/main/.config/waybar/config.jsonc).

### Default Applications

To change the default applications by filetype, be sure to install [this app](https://github.com/magnus-ISU/selectdefaultapplication).

```bash
yay -Sy selectdefaultapplication-fork-git
```

If you wanna change the default apps used in the Hyprland bindings, change the variables over on [this file](https://github.com/Matt-FTW/dotfiles/blob/main/.config/hypr/configs/default_apps.conf).

### Default Editor

The default editor is Neovim, but you can change it to whatever editor you want. You only need to edit the [fish variables file](https://github.com/Matt-FTW/dotfiles/blob/main/.config/fish/user_variables.fish), and find where the EDITOR variable is defined.

Here's and example on how to change it to use VSCode.

```fish
# set -xg EDITOR nvim
set -xg EDITOR code
```

### Git Changes

If you are going to use git, be sure to change the user definition as well as the credentials over on the [gitconfig file](https://github.com/Matt-FTW/dotfiles/blob/main/.config/git/config).

### Keyring Support

There are some applications that you might need the keyring for. Examples: bitwarden, dbeaver, protonmail-bridge, vlc...

To enable the keyring support, install the following packages:

```bash
yay -Sy gnome-keyring libsecret
```

### Update Everything

Do you want to have a single tool that help you to update a bunch of different packages from multiple package managers? You can do so with the help of [topgrade](https://github.com/topgrade-rs/topgrade).

```bash
yay -Sy topgrade
```

## For Laptop Users

For the laptop users, there are some programs that you may want to install.

### Automatic CPU Frequency (_Recommended_)

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

### Swipe Gestures

You can have swipe gestures with your touchpad with the [libinput-gestures](https://github.com/bulletmark/libinput-gestures) program.

```bash
yay -Sy libinput-gestures
```

Next, start the daemon by placing the next line of code at the end of the [autostart file](https://github.com/Matt-FTW/dotfiles/blob/main/.config/hypr/scripts/autostart/services).

```bash
libinput-gestures &
```

Check their documentation to configure further.

### Bluetooth

Lets start by installing bluez (Bluetooth support) and overskride (GUI):

```bash
yay -Sy bluez overskride
```

After installing the required packages, we have to start the Bluetooth service:

```bash
systemctl --user enable --now bluetooth.service
```

Now launch overskride and there you have it.

### Brightness

Brightness control is integrated with [SwayOSD](https://github.com/ErikReider/SwayOSD) and [brightnessctl](https://github.com/Hummer12007/brightnessctl). Be sure to follow [this steps](https://github.com/ErikReider/>SwayOSD#brightness-control) on the SwayOSD documentation to be able to change the brightness.

If you wanna have automatic screen brightness, install [wluma](https://github.com/maximbaz/wluma).

```bash
yay -Sy wluma
```

Then, enable the systemd unit.

```bash
systemctl --user enable --now wluma.service
```

### Wi-Fi

To manage your Wi-Fi connections, I'd recommend you to install [iwgtk](https://github.com/J-Lentz/iwgtk):

```bash
yay -Sy iwgtk
```

Also, you have to enable the iwd service:

```bash
sudo systemctl enable --now iwd.service
```

To manage all the other network configurations, use something like [nm-connection-editor](https://gitlab.gnome.org/GNOME/network-manager-applet)

## For Non Developers

If you're not a developer, you may not need some of the app configurations that come with the dotfiles. If you want to delete them, here's a quick command to do so:

```bash
rm -rf ~/.config/VSCodium/ ~/.config/lazydocker/ ~/.config/lazygit/ ~/.config/mise/ ~/.config/neovide/ ~/.config/npm/
```

## For Non Gamers

Just like with the Non Developers point, if you're not a gamer, you may not need some of the app configurations that come with the dotfiles. Delete them using this command:

```bash
rm -rf ~/.config/MangoHud ~/.config/ludusavi
```
