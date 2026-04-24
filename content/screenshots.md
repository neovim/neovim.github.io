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

Customize how to list different views of your buffers with 'showtabline',
'tabline':

### Language documentation on a whim

With your LSP servers configured, get access to documentation by just pressing
'K'.

<img src="/images/showcase/lsp-help.png" alt="Show the language
    documentation by pressing 'K'" width="640">

### Inspect the syntax tree 

Thanks to treesitter, you can navigate the syntax tree (natively for lua and C)
via `:InspectTree`

<img src="/images/showcase/inspecttree.png" alt="Check you have the necessary treesitter grammars
via checkhealth vim.treesitter" >

### Custom [Start Screen](https://github.com/mhinz/vim-startify/) and [a fuzzy finder](https://github.com/nvim-telescope/telescope.nvim)

<img src="/images/showcase/telescope_helptags.png" alt="TUI with telescope (courtesy of @sunjon)" width="640">

## GUI

Graphical interfaces are not packaged with Neovim. GUIs are not limited by terminal capabilities and can choose to override the rendering of certain neovim elements (cursor, tabline, popup menu, etc). This section showcases only a handful of them, see [Neovim's wiki](https://github.com/neovim/neovim/wiki/Related-projects#gui) for a list of many of the available GUIs.

### Treeview and an externalized popup menu in [Neovim Qt](https://github.com/equalsraf/neovim-qt)

<img src="/images/showcase/nvim-qt.png" alt="neovim-qt (courtesy of @equalsraf)" width="640">

### Minimap and externalized window in [Goneovim](https://github.com/akiyosi/goneovim)

<img src="/images/showcase/goneovim.png" alt="goneovim (courtesy of @akyosi)" width="640">

### Externalized command mode in [GNvim](https://github.com/vhakulinen/gnvim)

<img src="/images/showcase/gnvim.png" alt="gnvim (courtesy of @vhakulinen)" width="640">
