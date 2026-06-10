---
title: Screenshots
layout: mainpage
---

These screenshots demo what's possible. They may use unreleased features,
third-party UIs, plugins, or config changes.

## Features

### 'statuscolumn'

Customize your vertical list of indicators (breakpoints, folds, diagnostics,
line numbers, ...) using 'statuscolumn': 

<img src="/images/showcase/statuscolumn0.12.png" alt="Statuscolumn" >

### 'tabline'

Customize how to list different views of your tabs with 'showtabline',
'tabline', for instance to show the working directory and the running command:

<img src="/images/showcase/tabline-custom.png" alt="Customizable tabline" >


### Language documentation on a whim

With your LSP servers configured, get access to documentation by just pressing
'K'.

<img src="/images/showcase/lsp-help.png" alt="Show the language
    documentation by pressing 'K'" >

### A customizable menu

Add your menu entries under the popup namespace:

<img src="/images/showcase/menu-custom.png" alt="Customize the contextual menu">

### Inspect the syntax tree 

Thanks to treesitter, you can navigate the syntax tree (natively for lua and C)
via `:InspectTree`

<img src="/images/showcase/inspecttree.png" alt="Check you have the necessary treesitter grammars
via checkhealth vim.treesitter" >

### Live color preview

If your LSP server supports the feature, neovim can render colors out of the box:

<img src="/images/showcase/textdocument-color.png" alt="Check your LSP server supports textDocument/color" >

### New interface 'ui2'

Enable 'ui2' to avoid UI messages blocking your workflow or to enable a centered
cmdline (here with [tiny-cmdline.nvim](https://github.com/rachartier/tiny-cmdline.nvim)):

<img src="/images/showcase/ui2-centered-cmdline.png" alt="TUI with telescope (courtesy of @sunjon)" >

### Progress 

Neovim can emit 'progress' events the terminal can show, for instance as a blue progress bar at the top in
ghostty:

<video controls>
  <source src="/images/showcase/packupdate-progress-ghostty.mp4" type="video/mp4">
  Terminal can show 'progress'.
</video>

### Custom [Start Screen](https://github.com/mhinz/vim-startify/) and [a fuzzy finder](https://github.com/nvim-telescope/telescope.nvim)

<img src="/images/showcase/telescope_helptags.png" alt="TUI with telescope (courtesy of @sunjon)" width="640">

## GUI

Graphical interfaces are not packaged with Neovim. GUIs are not limited by terminal capabilities and can choose to override the rendering of certain neovim elements (cursor, tabline, popup menu, etc). This section showcases only a handful of them, see [Neovim's wiki](https://github.com/neovim/neovim/wiki/Related-projects#gui) for a list of many of the available GUIs.

### Treeview and an externalized popup menu in [Neovim Qt](https://github.com/equalsraf/neovim-qt)

<img src="/images/showcase/nvim-qt.png" alt="neovim-qt (courtesy of @equalsraf)" width="640">

### Minimap and externalized window in [Goneovim](https://github.com/akiyosi/goneovim)

<img src="/images/showcase/goneovim.png" alt="goneovim (courtesy of @akyosi)" width="640">

### Animated cursor and smooth scrolling in [Neovide](https://neovide.dev)

<img src="/images/showcase/neovide-animatedCursor.gif" alt="neovide animated cursor" width="300">
&nbsp;
<img src="/images/showcase/neovide-smoothScrolling.gif" alt="neovide smooth scrolling" width="300">

### Externalized command mode in [GNvim](https://github.com/vhakulinen/gnvim)

<img src="/images/showcase/gnvim.png" alt="gnvim (courtesy of @vhakulinen)" width="640">
