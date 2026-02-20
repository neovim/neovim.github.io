---
title: Home
active: Home
redirect_from:
  - /development-wiki/
params:
  impressions:
    - quote: Neovim is exactly what it claims to be. It fixes every issue I have with Vim.
      name: Geoff Greer
      link: http://geoff.greer.fm/2015/01/15/why-neovim-is-better-than-vim/
    - quote: Full-screen Neovim looks cool as hell!
      name: DHH
      link: https://x.com/dhh/status/1764465909316583659
    - quote: A nice looking website, that’s one thing Neovim did right.
      name: Bram Moolenaar
      link: https://www.binpress.com/vim-creator-bram-moolenaar-interview/
  faq:
    - question: What is the project status?
      answer: |
        The current [stable release](https://github.com/neovim/neovim/releases/latest)
        version is `0.11` ([RSS](https://github.com/neovim/neovim/tags.atom)).
        See the [roadmap](/roadmap/) for progress and plans.
    - question: Is Neovim trying to turn Vim into an IDE?
      answer: |
        With 30% less source-code than Vim, the [vision](/charter/)
        of Neovim is to enable new applications without compromising Vim's
        traditional roles.
    - question: Will Neovim deprecate Vimscript?
      answer: |
        No. Lua is built-in, but Vimscript is supported with the
        [world's most advanced Vimscript engine](/doc/user/api.html#nvim_parse_expression()).
    - question: Which plugins does Neovim support?
      answer: |
        Vim 8.x plugins and
        [much more](https://github.com/neovim/neovim/wiki/Related-projects).
---

## Features

### Extensible

- API is first-class: [discoverable](/doc/user/api.html#api-mapping),
  [versioned](/doc/user/api.html#api-contract),
  [documented](/doc/user/api.html#api-global).
- [MessagePack](http://msgpack.org/) structured communication enables
  extensions in any language.
- Remote plugins run as co-processes, safely and asynchronously.
- GUIs, IDEs, web browsers can `--embed` Neovim as an editor or script
  host.
- [Lua plugins](/doc/user/lua.html) are easy to create just like
  Vimscript plugins. Your config can live in `init.lua`!
- AST-producing [parsing engine](https://tree-sitter.github.io/) enables
  faster, more accurate syntax highlighting, code navigation,
  refactoring, text objects, and motions.

### Usable

- Strong [defaults](/doc/user/vim_diff.html#nvim-defaults) including a
  unique, minimalist colorscheme.
- Builtin [LSP client](/doc/user/lsp.html) for semantic code inspection
  and refactoring (go-to definition, "find references", format, ...).
- Client-server architecture allows you to
  [:detach](/doc/user/gui.html#%3Adetach) the UI and keep the editor
  session running (like tmux). Attach multiple UIs to any Nvim session.
- No "Press ENTER" messages (Nvim 0.12 feature).
- Works the same everywhere: one build-type, one command.
- Modern terminal features such as cursor styling, focus events,
  bracketed paste.
- Builtin [:terminal](https://www.youtube.com/watch?v=xZbMVj9XSUo) set
  the standard for "TTY as a basic component".

### Drop-in Vim

- Fully compatible with Vim's editing model and Vimscript v1.
- Start with [`:help nvim-from-vim`](/doc/user/nvim.html#nvim-from-vim)
  if you already use Vim. If not, try `:Tutor`.
