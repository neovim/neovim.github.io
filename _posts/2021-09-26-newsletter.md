---
layout: newsletter
title: "Neovim: The Work Continues"
category: newsletter
permalink: /news/2021/09
---

> The Citadel found some of my... experiments... too bold.
> —Qyburn

Nvim 0.5.1 has been released, it includes many fixes and some **breaking changes**:

- changed LSP handler signature: https://github.com/neovim/neovim/pull/15504
- renamed `vim.register_keystroke_callback` => `vim.on_key`

These breaking changes are part of the 0.5.1 maintenance release to avoid delay while we develop 0.6.

## Velocity

Lua-first is now a central practice in the Neovim project.

We started with everything tucked into `vim.lsp`. The community began heavily
building on `vim.lsp.diagnostic`, it became clear that this "diagnostic"
concept had more general value beyond only LSP.
The development of `vim.diagnostic` diagnostic framework from concept, to
interface design, to delivery was a matter of weeks, thanks to @gpanders.

The `vim.diagnostic` API is available in Nvim master (unreleased 0.6) and we are considering it for 0.5.2 stable release.

Though the Nvim RPC API is bound by a sacred
[contract](https://neovim.io/doc/user/api.html#api-contract), in other areas of Nvim we are now more
aggressively deprecating and reworking interfaces.  We are fundamentally committed to backwards compatibility for the RPC API and will eventually adopt that commitment in the Lua interface.  Meanwhile, we reserve the option of breaking things in Lua-land. Such breakage is collected and announced in the [Following HEAD](https://github.com/neovim/neovim/issues/14090) thread.

This liberty has allowed us to move 10x faster.

### Lua plugins

@bfredl continues to improve Lua and Vimscript "runtime path" behavior to be intuitive, useful, and fast.

The model of "core framework, external dust cloud" has proven out. nvim-treesitter external project is heavily experimenting and some of its ancillary efforts such as UI "widgets" are finding their way back to core.

nvim-lspconfig saw heavy churn for 1+ years and is now settling down. Some of its utilities such as `:LspInfo` and the "root finder" mechanism are being considered as core Nvim feature.

### Lua config

Nvim supports `init.lua` as user config since 0.5, and in 0.6. we are working on `nvim -l` to support invoking Lua "main" scripts with `nvim`.

## Language Server Protocol (LSP)

The [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) (LSP) is an
open, JSON-RPC protocol for communication between code editors and
language servers, which provide programming language-specific features such as
completion, hover/tooltips, go to definition, show/go to references, show
method signatures, rename, refactoring.

Nvim's builtin [`vim.lsp`](https://neovim.io/doc/user/lsp.html) [LSP framework](https://www.youtube.com/watch?v=ArwDgvYEZYk)
plus [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) quickstart collection has been a major success,
demonstrating the viability of shipping ambitious ideas in core Nvim using Lua.
Nvim core developers use it to accelerate their work in Nvim's C and Lua source code.

Work on [semantic highlighting](https://github.com/neovim/neovim/pull/14122) continues.

## Tree-sitter

Work on [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) parser integration continues: performance, bug-fixes.

Also, Neovim itself only provides a (Lua) API for generating and querying the syntax tree using the bundled tree-sitter library; see [`:h treesitter`](https://neovim.io/doc/user/treesitter.html). User-facing features like the ones mentioned above are implemented in plugins like XXX and XXX.

## Unreleased (master branch)

### Virtual lines ("ghost text")

- "ghost text" (virtual lines) https://github.com/neovim/neovim/pull/15351

### Defaults

Nvim `master` branch has implemented a big [batch of improvements](https://github.com/neovim/neovim/issues/6289) to the [editor defaults](https://neovim.io/doc/user/vim_diff.html#nvim-defaults), including:

- ['backupdir'](https://neovim.io/doc/user/options.html#'backupdir') now [auto-creates its directory](https://github.com/neovim/neovim/pull/15433), as the 'undodir' and 'directory' (swapfile) options already do
- `CTRL-L` is mapped to also clear "/" search highlighting
- ['inccommand'](https://neovim.io/doc/user/options.html#'inccommand') (live preview of the `:substitute` command) is enabled by default
- `Y` is [mapped](https://github.com/neovim/neovim/pull/13268) to behave like `D` and `C` 🙀

Having now established patterns for "default autocommands" and "default
mappings", we will use this mechanism liberally to make quality-of-life
improvements to `nvim -u NONE` without breaking scripts.

## Feedback loop

Your feedback helps us.  We considered removing the 'backspace' option and decided to keep it based on comments explaining the use cases for some of its non-default behavior. We also asked about `:hardcopy` and found that it's relatively unknown but still sees usage; we will not remove its implementation until we have a complete answer for inscribing your pixels to paper.



## Engineering

`vim.mpack` now exposes a Lua-first messagepack encoder/decoder without
marshalling through Vimscript. This also sets the stage for eliminating
a dependency on libmsgpack in favor of libmpack.

`vim.json` exposes a Lua-first JSON encoder/decoder without marshalling through
Vimscript. This performance gain is helpful in the LSP client, where JSON
de/serialization dominates the cost of many client activities.

Nvim core team has fully migrated to GitHub Actions for CI, and we are leaning
heavily on this to automate even more of our workflow.

Nvim C source code is now fully reformatted to match our [style
guide](https://neovim.io/doc/user/dev_style.html#dev-style), so that our
development workflow favors auto-formatting instead of tedious human-driven
compliance with the style guide.  This is especially important for reducing
friction of merging patches from upstream Vim.

Upstream improvements in libuv and Windows 10 allow us to eliminate our [libuv
fork](https://github.com/neovim/libuv).  Note that going forward we consider
**Windows 8 or older is unsupported,** particularly for TUI/TTY bug reports.

### Vim patches

Of the over XXX commits in this release, about XXX were patches and runtime updates ported from Vim.

Nvim `master` branch is up-to-date with Vim runtime files.


## Community

In keeping with the motto of this newsletter, one of the most noticeable positive changes was the growth of the community and of new ways of interacting with it.

### Discourse

Previously, support requests and discussions were spread across Reddit, Gitter, and GitHub Discussions and were either ephemeral or hard to search for. We have now consolidated around a new [Neovim Discourse](https://neovim.discourse.group), which is a free and open source forum platform with mailing list and RSS features, in addition to a nice web interface. The Neovim Discourse is an official core project and moderated by core team members.

### Matrix

The official chatroom for Neovim is on [matrix](https://app.element.io/#/room/#neovim:matrix.org).

### Vimconf.live

Community members and Neovim core developers will speak at [Vimconf.live](https://www.vimconf.live).

### Twitch

Neovim core developers @vigoux and [@tjdevries](https://www.twitch.tv/teej_dv) continue to stream on [Twitch](https://twitch.tv).

### Neovim development

Active Neovim developmers continues to grow. In the last three months, there were XXX unique commit authors.

## Sponsorship

You can now sponsor Neovim via [Github Sponsors](https://github.com/sponsors/neovim) or [OpenCollective](https://opencollective.com/neovim). 

[BountySource](https://diziet.dreamwidth.org/5938.html) is no longer recommended.

## What's next?

[roadmap](https://neovim.io/roadmap/)

## Thanks

