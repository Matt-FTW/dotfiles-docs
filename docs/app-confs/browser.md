<div align="center">
<a href="#"><img src="https://raw.githubusercontent.com/Matt-FTW/dotfiles/main/.config/browser/.github/title.png"></a>
</div>

<div align="center">

<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="90%"/><br>

</div>

## :herb: About

The browser I'm using right now is [Zen](https://zen-browser.app/). It is a fork of Firefox, which adds some functionality I really like such as:

- 🚦 Vertical Tabs
- 👉 Split Views
- 🔒 Strong Privacy Options and Defaults (Using [BetterFox](https://github.com/yokoffing/Betterfox))
- 🔥 Fast as F\*ck
- 🍿 And much more...

The extensions I'm using are:

- [Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/?browser=firefox)
- [Sponsorblock](https://github.com/ajayyy/SponsorBlock) [⚙](https://github.com/Matt-FTW/dotfiles/blob/main/.config/browser/extensions/sponsor-block.json)
- [Stylus](https://github.com/openst) [⚙](https://github.com/Matt-FTW/dotfiles/blob/main/.config/browser/extensions/stylus.json)
- [SurfingKeys](https://github.com/brookhong/Surfingkeys) [⚙](https://github.com/Matt-FTW/surfingkeys-conf)
- [uBlock Origin](https://github.com/gorhill/uBlock#ublock-origin) [⚙](https://github.com/Matt-FTW/dotfiles/blob/main/.config/browser/extensions/ublock.txt)
- [ViolentMonkey](https://github.com/violentmonkey/violentmonkey) [⚙](https://github.com/Matt-FTW/dotfiles/blob/main/.config/browser/extensions/violentmonkey.zip)
  Scripts:
  - [Simple YouTube Age Restriction Bypass](https://greasyfork.org/en/scripts/423851-simple-youtube-age-restriction-bypass)
  - [YouTube - Stay Active and Play Forever](https://greasyfork.org/en/scripts/390352-youtube-stay-active-and-play-forever)
  - [Youtube CPU Tamer](https://greasyfork.org/en/scripts/431573-youtube-cpu-tamer-by-animationframe)
  - [Youtube JS Engine Tamer](https://greasyfork.org/en/scripts/473972-youtube-js-engine-tamer)
  - [Bypass All Shortlinks Debloated](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated)
  - [GreasyFork Bullshit Filter](https://greasyfork.org/en/scripts/12179-greasyfork-bull-filter)
  - [Fandom Redirect](https://greasyfork.org/en/scripts/476527-fandom-redirect)
  - [AOTY Add-ons](https://github.com/ashercs/AOTY-Add-ons/blob/main/AOTY-Addons.user.js)

I'm also using my [custom Startpage](https://github.com/Matt-FTW/startpage) based on [this project](https://github.com/pivoshenko/catppuccin-startpage).

## :wrench: Setup

> [!WARNING]
> Guide is created only for Firefox based browsers.

### :package: Theme Installation

First of all, check your active profile. To do so, type `about:profiles` in your browser toolbar. Open the folder where that profile is located (~/.{browser}/{profileid}/). Now symlink or copy the chrome folder from the configuration to the active profile folder.

**Be sure to change the path to your profile**.

```bash
# Symlink the folder (Recommended, this way changing values on the original path alters the destination)
ln -sf ~/.config/browser/chrome/ ~/.{browser}/{profileid}/chrome

# Copy the folder
cp -r ~/.config/browser/chrome/ ~/.{browser}/{profileid}/chrome
```

Now, to install the colorscheme for your browser make sure to follow [this guide](https://github.com/catppuccin/firefox) and select the **Macchiato** variant and the **Lavender** accent color.

Close all instances of your browser and open it again.

Tada! 🎉 You should now see your theme correctly installed.

### :package: user.js Installation

Just like before, check your active profile. Now symlink or copy the user.js file from the configuration to the active profile folder.

```bash
# Symlink the folder (Recommended, this way changing values on the original path alters the destination)
ln -sf ~/.config/browser/userjs/{browser}-user.js ~/.{browser}/{profileid}/user.js

# Copy the file
cp ~/.config/browser/userjs/{browser}-user.js ~/.{browser}/{profileid}/user.js
```

As before, close all instances of your browser and you should be able to test your new user.js.

### :package: Extensions Installation

To import the configurations, check each extensions docs to see how.

### :package: Startpage Installation

Read the Startpage [usage section](https://github.com/Matt-FTW/startpage?tab=readme-ov-file#usage) in the README.

## :camera: Gallery

| **Startpage**                                                                                                  |
| -------------------------------------------------------------------------------------------------------------- |
| ![overview-1](https://raw.githubusercontent.com/Matt-FTW/dotfiles/main/.config/browser/.github/overview-1.png) |

| **Github Repo**                                                                                                |
| -------------------------------------------------------------------------------------------------------------- |
| ![overview-2](https://raw.githubusercontent.com/Matt-FTW/dotfiles/main/.config/browser/.github/overview-2.png) |
