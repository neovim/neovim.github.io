---
layout: newsletter
title: "Newsletter #11 - **AWESOME TITLE HERE**
category: newsletter
permalink: /news/2020/09/
---

Newsletter notes

## Something something Covid

## [0.5 Milestones](https://github.com/neovim/neovim/milestone/19)

## LSP & Tree-sitter - Maximizing Vim's potential/The future of text editing

- lightweight
- tight integration

## What is LSP

[Language Server Protocol](https://microsoft.github.io/language-server-protocol/) (LSP) is an open, JSON-RPC-based protocol for use between source code editors or integrated development environments (IDEs) and servers that provide programming language-specific features.
The goal of the protocol is to allow programming language support to be implemented and distributed independently of any given editor or IDE.

[Language specific implementations and feature support](https://langserver.org/)

- (auto)completion
- code actions (automatic formatting, organize imports, ...)
- go to definition
- show method signatures
- show/go to references
- snippets

## What is Tree Sitter

"A really awesome parser"
"Tree sitter offers a way to navigate ASTs"
"tree-sitter queries are the new snippets"?
Error recovery
"power of vim editing == textobjects" and "tree-sitter == smarter textobjects"

A presentation from the author on what Tree-sitter is and how it came to be:
[Tree-sitter - A new parsing system for programming tools - Max Brunsfield](https://www.youtube.com/watch?v=Jes3bD6P0To&feature=youtu.be&t=232)

@norcalli - "every file you edit (which has a treesitter grammar definition available) will have the semantic information of what you're working on available to use for anything you want. It's like a core intelligence was added to neovim which was fundamentally missing before."
@norcalli - "Syntax highlighting is just a consequence of finally being able to understand the program you're working on. There are many, many, many other consequences which are possible, and those text objects are ones for which I'm also super excited."

### Semantic Highlighting

Performance difference between syntax highlighting from a language server and syntax highlighting from TreeSitter

### TreeSitter "replacing plugin functionality"

[context.vim](https://github.com/wellle/context.vim) ->
[vim-expand-region](https://github.com/terryma/vim-expand-region) ->

## Lua! Lua! Lua!



Some excerpts from Justin M Keyes ["We can have nice things"](https://www.youtube.com/watch?v=Bt-vmPC_-Ho) presentation at Vim Conf 2019
```
Worse is better

Vim's missing 50%:
- Imperfect design => bad perf; macros, long lines, syntax
- Vimscript is slow: n AST, ad-hoc impl
- :vimgrep is slow, :syntax is slow
- Legacy arch: 600+ globals, high coupling, TUI assumption
- Inconsistent UI behaviour: win_getid() vs getwininfo()
```

### Lua stdlib

"Lua is designed for embedding"
"Lua is fast, LuaJit is *ridiculously* fast"
"Less is more: Lua language is super small, simple, _complete_(frozen)"

### Extensibility: Nvim is the "stdlib"


```
Standard modules:
- inspect
- treesitter
- loop
- ... trivial to add more(mention luarocks/nvimrocks/plenary)
```

### Core features being implemented in Lua

- [neovim-lspconfig](https://github.com/neovim/nvim-lspconfig) - Collection of common configurations for the Nvim LSP client.
- [completion-nvim](https://github.com/nvim-lua/completion-nvim)  - An auto completion framework that aims to provide a better completion experience with neovim's built-in LSP.
- [diagnostic-nvim](https://github.com/nvim-lua/diagnostic-nvim)  - A wrapper for the default LSP diagnostics aimed to make for a more user friendly setup.
- [lsp-status.nvim](https://github.com/nvim-lua/lsp-status.nvim)  - A Neovim plugin/library for generating statusline components from the built-in LSP client.

### Vimscript vs Lua

```vim
foo.vim
  let s:sum = 0
  for i in range(1, 9999999)  " Parsed 10M times.
    let s:sum = s:sum + i     " Parsed 10M times.
  endfor                      " Parsed 10M times.
  call append('$', s:sum)
```

`ex_docmd.c:do_cmdline():`

- copies command (script line), sends to ex_docmd.c:do_one_cmd()
- ex_docmd.c:do_one_cmd() recursively parses the line
- ...everytime, for all lines in a Vimscript loop (for/while)

mention [Vim9 script](https://vimhelp.org/vim9.txt.html), the issues it addresses and any statements made by Neovim regarding compatibility.

### A Lua based configuration

[vimpeccable](https://github.com/svermeulen/vimpeccable) aims to supplement the Neovim Lua API with commands to easily map keys.

---

### Extensibility: Fennel (Lisp) and MoonScript

- [Fennel(Lisp)](https://fennel-lang.org)
  - try [fennel-nvim](https://github.com/jaawerth/fennel-nvim) to auto-execute `init.fnl`
- [MoonScript](https://github.com/leafo/moonscript)
  - [nvim-moonmaker](https://github.com/svermeulen/nvim-moonmaker) Moonscript to compiled Lua
- [Aniseed](https://github.com/Olical/aniseed) bridges the gap between Fennel and Neovim. Allowing you to easily write plugins or configuration in a Clojure-like Lisp with great runtime performance.

## [Vim Conf](https://www.vimconf.live)

Covid preamble - online conf.

[Vim Conf YouTube channel](https://www.youtube.com/channel/UCPK_UHtbfcWABCi0F0GPG6w)

### Neovim related presentations

| | | |
|---|---|---|
| [Conversational Software Development](https://www.youtube.com/watch?v=RU28xy9JXxs) | Oliver Caldwell |
| [From User to Contributer](https://www.youtube.com/watch?v=EReNOGuMBmo) | Thomas Vigouoroux |
| [Neovim Builtin LSP](https://www.youtube.com/watch?v=C9X5VF9ASac) | TJ DeVries |
| [Neovim 0.5 work](https://www.youtube.com/watch?v=FxDBdbuvcU8) | Björn Linse |
| [What can't you do in Neovim?](https://www.youtube.com/watch?v=78WrSwEKNuM) | Ashkan Kiani |
| [Why is Lua a good fit for Neovim?](https://www.youtube.com/watch?v=IP3J56sKtn0) | TJ DeVries |

## GSoC 2019 - decoupled UI

[TUI (Terminal UI) remote attachment](https://github.com/neovim/neovim/pull/10071)
[Multiprocessing Feature](https://github.com/neovim/neovim/pull/9943)

## GSoC 2020

[Project Proposals](https://github.com/neovim/neovim/wiki/GSoC-2020-Ideas)

[fswatch autoread](https://github.com/neovim/neovim/pull/12593)
[inccommand: plugin support: cmnd_can_preview for user commands](https://github.com/neovim/neovim/pull/11985)
[logging API](https://github.com/neovim/neovim/pull/7062)

## UI's

[FireNvim](https://github.com/glacambre/firenvim)
[FVim](https://github.com/yatli/fvim)
[GNvim](https://github.com/vhakulinen/gnvim)
[Neovide](https://github.com/Kethku/neovide)
[VV](https://github.com/vv-vim/vv)

## Interesting Plugins - an emphasis on the LuaWorld

### NVIM Dev tools - (which are the most useful?)

- [Plenary](https://github.com/nvim-lua/plenary.nvim) Mention luarocks integration
- [Packer](https://github.com/wbthomason/packer.nvim)
- [nlua](https://github.com/tjdevries/nlua.nvim)
- [nvim.lua](norcalli/nvim.lua)
- [nvim-luadev](https://github.com/bfredl/nvim-luadev)

- The nvim-lua family
  - Plenary/ popup.nvim, things that might become part of core
- TreeSitter: Rethinking regex : Expand region comparison and ideas for future plugins
  - speak about what could be replaced, word-motion? fancy markdown stuff, vim-exchange
- Architext
- Snippets.nvim / Vsnip
- Packer - an ambitious new package manager
- Colorizer
- Formatter

## Python2 deprecation?

## Changes related to UI
 - mouse focus on window
 - ext_popupmenu: completion menu
 - ext_tabline: tab line
 - ext_cmndline: command line
 - ext_hlstate: highlight state
 - ext_messages: messages
 - ext_multigrid: windows, grids
 - remote TUI (GSoC 2019)

## Notable commits/merges
libuv / libvrwem ? 
### Highlight yanked region
### LuaHL
## LibGit2

nvim__screenshot?

## PR's to watch

buf_set_text ? what will it enable?
### #12249 https://github.com/neovim/neovim/pull/12249 nvim_buf_set_text

### #12870 https://github.com/neovim/neovim/pull/12870 Color themes per window/line
### #12823 https://github.com/neovim/neovim/pull/12823 Doc ; Lua concepts
### #12593 https://github.com/neovim/neovim/pull/12593 fswatrch autoread

### missing functionality for Lua developers

### #12378 https://github.com/neovim/neovim/pull/12378 [WIP] lua: Add autocmd with Lua callback natively #12378

## Merrged (needs more thorough review of PR's from 0.4 -> 0.5)

### New Decorations API #12816 - `nvim_buf_get_extmark` / `nvim_buf_set_extmark`
### https://github.com/neovim/neovim/pull/12549 Lua: highlight.on_yank #12549
### https://github.com/neovim/neovim/pull/12536/files Execute lua callback on keystroke #12536


### Community efforts - notable blogposts and twitch/youtube content

[##](posts/##.md) Github Sponsors - [12959](https://github.com/neovim/neovim/pull/12249)

- [GitHub will match all contributions (up to $5k)](https://github.blog/2019-05-23-announcing-github-sponsors-a-new-way-to-contribute-to-open-source/) within a developers first year.
- [BountySource charges fees](https://www.bountysource.com/fees), [GitHub only charges for payment processing](https://github.blog/2019-05-23-announcing-github-sponsors-a-new-way-to-contribute-to-open-source/).
- [BountySource began introducing worrying changes to their Terms of Service agreement.](https://diziet.dreamwidth.org/5938.html)

