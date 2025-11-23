---
title: Roadmap
active: About
type: page
---

The roadmap is an overview of the project direction. Detailed plans and priorities are tracked in [milestones](https://github.com/neovim/neovim/milestones?direction=desc&sort=due_date&state=open) (these are tentative and may be changed or dropped at any time):

- Version numbers (`0.1`, `0.2`, …) track production releases. The next upcoming version has a (estimated) target date.
- [backlog](https://github.com/neovim/neovim/milestone/6) holds low-priority items.
- [needs-owner](https://github.com/neovim/neovim/milestone/9) holds zero-priority items (no feasible path to completion).

## Next

Concrete high-level feature areas and changes.

### [Future (unknown release)](https://github.com/neovim/neovim/milestone/43)

- [Prepare for 1.0](https://github.com/neovim/neovim/issues/20451)
- Multicursor, super-macros
- Multibuffer [#30463](https://github.com/neovim/neovim/issues/30463)
- packspec / `pkg.json`
- File-change detection
- Externalized UI: window layout events, messages

### [0.13](https://github.com/neovim/neovim/milestone/48): "The year of Batteries Included" (visibility, stdlib features, UI elements)

- UI "block-level elements" so plugins can reason about regions
- UI "affordance" indicator so users know which elements they can interact with
- Unified event interface, `nvim_on()`
- stdlib: image API
- Task abstraction, structured concurrency: `vim.async`
- Redesign `--remote`
- LSP: `vim.lsp.server()`

### [0.12](https://github.com/neovim/neovim/milestone/43): "The year of Nvim OOTB"

- ✅ Plugin manager (`vim.pack`) [#34009](https://github.com/neovim/neovim/pull/34009)
- ✅ No more "Press ENTER" [#27855](https://github.com/neovim/neovim/pull/27855)
- UI `:connect`, `:restart`[#5035](https://github.com/neovim/neovim/issues/5035)
- Lua remote plugin host
- Redesign (simplify) remote plugin concept, eliminate `:UpdateRemotePlugins`

## Completed

Here are the headline features of the previous releases; for details see the release notes.

### [0.11](https://github.com/neovim/neovim/milestone/41?closed=1)

- Async tree-sitter (avoids blocking UI/input)
- LSP "config" concept: `vim.lsp.config` [#31031](https://github.com/neovim/neovim/pull/31031)
- LSP: [auto-completion](https://x.com/Neovim/status/1797629199454499223) ([:help lsp-completion](https://neovim.io/doc/user/lsp.html#lsp-completion))
- LSP: multiclient support
- TUI: URL highlight, theme event
- UI `:detach` [#5035](https://github.com/neovim/neovim/issues/5035)

### [0.10](https://github.com/neovim/neovim/milestone/36?closed=1)

- [Default colorscheme](https://github.com/neovim/neovim/pull/26334)
- LSP inlay hints
- TermRequest, TermResponse
- treesitter: builtin parsers for bash, markdown, python
- `vim.snippet`
- `vim.iter`
- `vim.lpeg`, `vim.re`, `vim.glob`, `vim.base64`

### [0.9](https://github.com/neovim/neovim/milestone/28?closed=1)

- TUI as a remote UI
- LSP semantic token highlighting
- [EditorConfig](https://neovim.io/doc/user/editorconfig.html) support
- ['exrc'](https://neovim.io/doc/user/options.html#'exrc') and related "[:trust](https://neovim.io/doc/user/editing.html#trust) database" features
- ['statuscolumn'](https://neovim.io/doc/user/options.html#'statuscolumn')
- ['diffopt' "linematch" feature](https://neovim.io/doc/user/options.html#'diffopt')
- [:Inspect](https://neovim.io/doc/user/lua.html#%3AInspect), [:InspectTree](https://neovim.io/doc/user/treesitter.html#%3AInspectTree)
- [vim.loader](https://neovim.io/doc/user/lua.html#vim.loader) optimized Lua module loader
- [vim.version](https://neovim.io/doc/user/lua.html#vim.version) semver module
- `$NVIM_APPNAME`
- Lua script runner: `nvim -l`

### [0.8](https://github.com/neovim/neovim/milestone/32?closed=1)

- LSP improvements (v3.16 spec coverage, configuration, `LspAttach`)
- Lua API: `vim.fs`, `vim.cmd{}`, measure require() in `--startuptime`, `:map`/`:command`/`:au` can print Lua source location
- treesitter API: use queries to define spellcheck regions (aka "spellsitter")
- `vim.ui_attach()`
- UI and RPC performance
- user-defined [command preview](https://neovim.io/doc/user/options.html#'inccommand')
- `cmdheight=0`
- clickable statusline

### [0.7](https://github.com/neovim/neovim/milestone/29?closed=1)

- Tree-sitter integration (highlighting, folds)
- TUI: extended keys (CTRL-i vs TAB, SHIFT modifier, …!)
- Global statusline: `laststatus=3`

### [0.6](https://github.com/neovim/neovim/milestone/11?closed=1)

- Unified diagnostics API
- Updated [defaults](https://github.com/neovim/neovim/issues/6289)

### [0.5](https://github.com/neovim/neovim/milestone/19?closed=1) + [0.5.1](https://github.com/neovim/neovim/milestone/25?closed=1)

- [Expanded Lua API and user config](/doc/user/lua.html) (`init.lua`)
- [Built-in Language Server Protocol (LSP) support](/doc/user/lsp.html)
- [Tree-sitter integration](/doc/user/treesitter.html) (experimental)
- Decorations API improvements: extmarks, virtual text, highlights
- Lua API improvements
- LSP support improvements

### [0.4](https://github.com/neovim/neovim/milestone/21?closed=1)

- Lua "stdlib"
- Externalized UI: multigrid
- Externalized UI: floating windows
- Externalized UI: messages

### [0.3.x](https://github.com/neovim/neovim/milestone/18?closed=1)

- API: [buffer update events](https://neovim.io/doc/user/api.html#api-buffer-updates)
- Vimscript expression parser: `nvim_parse_expression()`
- Windows: [MSVC support](https://github.com/neovim/neovim/blob/master/BUILD.md#windows--msvc)
- [0.2.1](https://github.com/neovim/neovim/milestone/15?closed=1) Built-in Lua:`vim.api`, `:lua`, `nvim_execute_lua()`, …
- [0.2.1](https://github.com/neovim/neovim/milestone/15?closed=1) Externalize UI components: cmdline, wildmenu
- [0.2.1](https://github.com/neovim/neovim/milestone/15?closed=1) Windows `:terminal`
- [0.2.1](https://github.com/neovim/neovim/milestone/15?closed=1) Pre-packaged "universal" binary for Linux

### [0.2.x](https://github.com/neovim/neovim/milestone/10?closed=1)

- Windows support
- Externalized UI: popumenu
- Externalized UI: tabline
- Pre-packaged builds for Windows and macOS

### [0.1.x](https://github.com/neovim/neovim/milestone/5?closed=1)

- First public release
- Publish a stable product that can be used as a benchmark for progress
