<div align="center">
<a href="#"><img src="https://raw.githubusercontent.com/Matt-FTW/dotfiles/main/.config/yazi/.github/title.png"></a>
</div>

<div align="center">

<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="90%"/><br>

</div>

## :herb: About

[Yazi](https://github.com/sxyazi/yazi) is my preferred file manager for the terminal. There's options like [xplr](https://github.com/sayanarijit/xplr), [lf](https://github.com/gokcehan/lf) or [ranger](https://github.com/ranger/ranger), but I feel like yazi is a next-gen file manager, written in Rust, with a plugin ecosystem written in Lua.
Its fast, easy to use and so customizable.

The plugins I'm using are the following:

- [full-border](https://github.com/yazi-rs/plugins/tree/main/full-border.yazi)
- [searchjump](https://gitee.com/DreamMaoMao/searchjump.yazi)
- [yatline](https://github.com/imsi32/yatline.yazi)
- [yatline-githead](https://github.com/imsi32/yatline-githead.yazi)
- [fg](https://gitee.com/DreamMaoMao/fg.yazi)
- [git](https://github.com/yazi-rs/plugins/tree/main/git.yazi)
- [compress](https://github.com/KKV9/compress.yazi)

The added keymaps are located on [this file](https://github.com/Matt-FTW/dotfiles/blob/main/.config/yazi/keymap.toml).

If you wanna check the theme or add another one, you can do so in the [flavors folder](https://github.com/Matt-FTW/dotfiles/tree/main/.config/yazi/flavors). After that make sure to edit [theme.toml](https://github.com/Matt-FTW/dotfiles/blob/main/.config/yazi/theme.toml) and add that new flavor name.

Any other configurations are inside the [yazi.toml file](https://github.com/Matt-FTW/dotfiles/blob/main/.config/yazi/yazi.toml), like if you wanna add other programs when opening certain type of files or modify the fetchers.

Be sure to read [the docs](https://yazi-rs.github.io/) if you wanna know all the options available.

## :wrench: Setup

### :package: Plugins Installation

Yazi has a plugin manager built in, called `ya`. To manage yazi plugins you can use the next commands:

```bash
# Add a plugin
ya pack -a <plugin-name>

# Install plugins
ya pack -i

# To update all extensions
ya pack -u
```

> [!NOTE]
> Check the docs for every extensions to find the exact commands and the next steps to take, like initializing the plugins in the [init.lua](https://github.com/Matt-FTW/dotfiles/blob/main/.config/yazi/init.lua) file

There are some packages that cannot be managed with `ya`. You can clone them with git like this:

```bash
git clone <repo-link> ~/.config/yazi/plugins/<plugin-name>
```

> [!WARNING]
> If you dont install all the plugins I have, make sure to remove their init calls (basically, the require("plugin-name") call) on [this file](https://github.com/Matt-FTW/dotfiles/blob/main/.config/yazi/init.lua) or yazi will not launch.

## :camera: Gallery

| **Repo**                                                                                                    |
| ----------------------------------------------------------------------------------------------------------- |
| ![overview-1](https://raw.githubusercontent.com/Matt-FTW/dotfiles/main/.config/yazi/.github/overview-1.png) |

| **Rust Code inside a Repo**                                                                                 |
| ----------------------------------------------------------------------------------------------------------- |
| ![overview-2](https://raw.githubusercontent.com/Matt-FTW/dotfiles/main/.config/yazi/.github/overview-2.png) |

| **Image Preview**                                                                                           |
| ----------------------------------------------------------------------------------------------------------- |
| ![overview-3](https://raw.githubusercontent.com/Matt-FTW/dotfiles/main/.config/yazi/.github/overview-3.png) |
