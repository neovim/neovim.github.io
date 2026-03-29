---
title: ""
redirect_from:
  - /development-wiki/
---

## Features

### Extensible

- API is first-class: [discoverable](/doc/user/api/#api-mapping),
  [versioned](/doc/user/api/#api-contract),
  [documented](/doc/user/api/#api-global).
- [MessagePack](http://msgpack.org/) structured communication enables
  extensions in any language.
- Remote plugins run as co-processes, safely and asynchronously.
- GUIs, IDEs, web browsers can `--embed` Neovim as an editor or script
  host.
- [Lua plugins](/doc/user/lua/) are easy to create just like
  Vimscript plugins. Your config can live in `init.lua`!
- AST-producing [parsing engine](https://tree-sitter.github.io/) enables
  faster, more accurate syntax highlighting, code navigation,
  refactoring, text objects, and motions.

### Usable

- Strong [defaults](/doc/user/vim_diff/#nvim-defaults) including a
  unique, minimalist colorscheme.
- Builtin [LSP client](/doc/user/lsp/) for semantic code inspection
  and refactoring (go-to definition, "find references", format, ...).
- Client-server architecture allows you to
  [:detach](/doc/user/gui/#%3Adetach) the UI and keep the editor
  session running (like tmux). Attach multiple UIs to any Nvim session.
- No "Press ENTER" messages (Nvim 0.12 feature).
- Works the same everywhere: one build-type, one command.
- Modern terminal features such as cursor styling, focus events,
  bracketed paste.
- Builtin [:terminal](https://www.youtube.com/watch?v=xZbMVj9XSUo) set
  the standard for "TTY as a basic component".

### Drop-in Vim

- Fully compatible with Vim's editing model and Vimscript v1.
- Start with [`:help nvim-from-vim`](/doc/user/nvim/#nvim-from-vim)
  if you already use Vim. If not, try `:Tutor`.


{{% scratch "chat" %}}
## Chat

- [Follow \@Neovim on X](https://x.com/Neovim),
  [Mastodon](https://hachyderm.io/@neovim),
  [Bluesky](https://bsky.app/profile/neovim.io)
- Discuss the project in [GitHub
  Discussions](https://github.com/neovim/neovim/discussions), or chat in
  [#neovim:matrix.org](https://matrix.to/#/#neovim:matrix.org) or
  #neovim on `irc.libera.chat`.
- Contribute code, report bugs and request features at
  [GitHub](https://github.com/neovim/neovim).
- Ask usage and configuration questions at [GitHub
  Discussions](https://github.com/neovim/neovim/discussions) or
  [vi.stackexchange.com](https://vi.stackexchange.com).
{{% /scratch %}}

{{% scratch "GUIs" %}}
## GUIs

Neovim UIs are "inverted plugins". Here are some popular ones:
- [Firenvim](https://github.com/glacambre/firenvim) (Nvim in your web
  browser!)
- [vscode-neovim](https://github.com/vscode-neovim/vscode-neovim) (Nvim
  in VSCode!)
- [Neovide](https://neovide.dev/)
- [Goneovim](https://github.com/akiyosi/goneovim)
- [GNvim (GTK4)](https://github.com/vhakulinen/gnvim)
- [FVim](https://github.com/yatli/fvim)
- [Nvy](https://github.com/RMichelsen/Nvy)
- [Neovim Qt (Qt5)](https://github.com/equalsraf/neovim-qt)
- [VimR (macOS)](https://github.com/qvacua/vimr)
- [More...](https://github.com/neovim/neovim/wiki/Related-projects#gui)
{{% /scratch %}}


{{% scratch "impressions" %}}
## Impressions

"Neovim is exactly what it claims to be. It fixes every issue I have
with Vim."
[---Geoff Greer](http://geoff.greer.fm/2015/01/15/why-neovim-is-better-than-vim/)

"Full-screen Neovim looks cool as hell!"
[---DHH](https://x.com/dhh/status/1764465909316583659)

"A nice looking website, that's one thing Neovim did right."
[---Bram Moolenaar](https://www.binpress.com/vim-creator-bram-moolenaar-interview/)
{{% /scratch %}}


{{% scratch "faq" %}}
## FAQ {#faqs}

**What is the project status?**\
The current [stable release](https://github.com/neovim/neovim/releases/latest)
version is `0.12` ([RSS](https://github.com/neovim/neovim/tags.atom)). See the
[roadmap](/roadmap/) for progress and plans.

**Is Neovim trying to turn Vim into an IDE?**\
With 30% less source-code than Vim, the [vision](/charter/) of Neovim is to
enable new applications without compromising Vim's traditional roles.

**Will Neovim deprecate Vimscript?**\
No. Lua is built-in, but Vimscript is supported with the [world's most advanced
Vimscript engine](/doc/user/api/#nvim_parse_expression()).

**Which plugins does Neovim support?**\
Vim 8.x plugins and [much
more](https://github.com/neovim/neovim/wiki/Related-projects).
{{% /scratch %}}
