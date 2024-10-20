<div align="center">
<a href="#"><img src="https://raw.githubusercontent.com/Matt-FTW/dotfiles/main/.config/tmux/.github/title.png"></a>
</div>

<div align="center">

<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="90%"/><br>

</div>

## :herb: About

My default multiplexer is [tmux](https://github.com/tmux/tmux). In the past I tried [Zellij](https://zellij.dev/) and I really liked it, but when I tried tmux, it was a whole different story. Not only is faster, but more customizable, has a ton of plugins and it has a ton of documentation and help online. I had a zellij config before I switched to tmux so if you wanna see it, [take a look](https://github.com/Matt-FTW/dotfiles/commit/8e63e29833470bebd0d812035ec811149d0c5d7e).

Now, here are the plugins I use alongside tmux:

- [tpm](https://github.com/tmux-plugins/tpm) (Plugin manager)
- [catppuccin](https://github.com/catppuccin/tmux)
- [tmux-sessionx](https://github.com/omerxx/tmux-sessionx)
- [tmux-fzf-url](https://github.com/wfxr/tmux-fzf-url)
- [tmux-sensible](https://github.com/tmux-plugins/tmux-sensible)
- [tmux-floax](https://github.com/omerxx/tmux-floax)

The plugins and their options are declared on [this file](https://github.com/Matt-FTW/dotfiles/blob/main/.config/tmux/conf/plugins.conf).

For tmux base options, you can find them [over here](https://github.com/Matt-FTW/dotfiles/blob/main/.config/tmux/conf/binds.conf).

In the case of the keybindings, [here they are](https://github.com/Matt-FTW/dotfiles/blob/main/.config/tmux/conf/binds.conf).

## :wrench: Setup

### :package: Plugins Installation

First, you need to install [tpm](https://github.com/tmux-plugins/tpm), the tmux plugin manager. Use this command to do so:

```bash
git clone https://github.com/tmux-plugins/tpm ~/.config/tmux/plugins/tpm
```

Once you enter tmux, hit `prefix + I` to install all the plugins. And that's it.

## :camera: Gallery

| **Floating Terminal**                                                                                       |
| ----------------------------------------------------------------------------------------------------------- |
| ![overview-1](https://raw.githubusercontent.com/Matt-FTW/dotfiles/main/.config/tmux/.github/overview-1.png) |

| **Image Preview**                                                                                           |
| ----------------------------------------------------------------------------------------------------------- |
| ![overview-2](https://raw.githubusercontent.com/Matt-FTW/dotfiles/main/.config/tmux/.github/overview-2.png) |

| **Session Manager**                                                                                         |
| ----------------------------------------------------------------------------------------------------------- |
| ![overview-3](https://raw.githubusercontent.com/Matt-FTW/dotfiles/main/.config/tmux/.github/overview-3.png) |
