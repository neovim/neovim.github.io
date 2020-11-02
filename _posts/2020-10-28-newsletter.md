---
layout: newsletter
title: "Newsletter #10 - Neovim v0.4.4"
category: newsletter
permalink: /news/2020/10/
---

What is Neovim?
---------------

Neovim is a fork of the venerable text-editor vim, focused on extensibility and
usability. It is not a rewrite but a continuation and extension of Vim. Many
clones and derivatives exist, some very clever—but none are Vim. Neovim is built
for users who want the good parts of Vim, and more. See a list of differences
via [:help vim-differences](https://neovim.io/doc/user/vim_diff.html).

### Participating

If you are interested in contributing to Neovim, visit [the github
page](https://github.com/neovim/neovim/blob/master/CONTRIBUTING.md) for details.
We have a great test suite and automated CI, so you can just jump in and have a
go. Don't be afraid to open a PR to get comments or just take advantage of the
infrastructure!

To get in touch with the team, join the [gitter channel](https://gitter.im/neovim)
(also accessible via [IRC](https://webchat.freenode.net/?channels=neovim)), or
visit the [Neovim subreddit](https://www.reddit.com/r/neovim/), which many of
the developers read. Taking part in conversations is a contribution, too!

What's new
----------

The [last newsletter](https://neovim.io/news/2020/04/) covered the release of
Neovim v0.3.0, it is now time to do the same thing with the most exciting
Neovim release that happened since then: v0.4.4!

#### 0.4.4 for Users

- Neovim started detecting the background color of the terminal for xterm-compatible terminals (**@joshtriplett**, [#9509](https://github.com/neovim/neovim/pull/9509))

- The `'maxcombine'` option has been removed, it now always default to 6 (**@bfredl**, [#7992](https://github.com/neovim/neovim/pull/7992))

- The `'fillchars'` setting now has an `eob` option, letting users configure the character used to represent lines after the end of a buffer (previously hardcoded to `~`) (**@FriedSock**, [#8546](https://github.com/neovim/neovim/pull/8546))

- `F` has been added to the default `'shortmess'` option and `S` has been removed (**@justinmk**, [#8619](https://github.com/neovim/neovim/pull/8619), [#10136](https://github.com/neovim/neovim/pull/10136))

- The `CursorLine` type will now be smarter: if its foreground color is not set, the text of the `CursorLine` will use the `CursorLine`'s background color and default syntax highlighting colors as foreground (**@zhou13**, [#8578](https://github.com/neovim/neovim/pull/8578)).

- The terminal UI can now support undercurl and colored underline, provided that your terminal has support for that (**@blueyed**, [#9052](https://github.com/neovim/neovim/pull/9052)).

- Neovim's `'background'` setting now defaults to `dark` to get a consistent setting across platforms (**@justinmk**, [#9205](https://github.com/neovim/neovim/pull/9205)).

- `'fillchars'` and `'listchars'` now are window-local options (**@mhinz**, [#9539](https://github.com/neovim/neovim/pull/9539)).

- The popupmenu can now be made (pseudo) transparent (**@bfredl**, [#9571](https://github.com/neovim/neovim/pull/9571)).

- Floating windows! This enables all kinds of useful features, such as [big clocks](https://github.com/iamcco/clock.nvim) (**@bfredl**, **@dzhou121**, [#6619](https://github.com/neovim/neovim/pull/6619))

- Autocommands now have a `++once` modifier to let them execute only once (**@justinmk**, [#9706](https://github.com/neovim/neovim/pull/9706))

- A new autocommand event named `CompleteChanged` has been implemented (**@chemzqm**, [#9616](https://github.com/neovim/neovim/pull/9616))

- Vim's TermDebug plugin has been ported to neovim (**@kwon-young**, [#8364](https://github.com/neovim/neovim/pull/8364)).

- The wildmenu can now be turned into a popup menu with `wildoptions=pum` (**@bfredl**, [#9607](https://github.com/neovim/neovim/pull/9607)). In fact, that's the default!

- There now are two events triggered when a UI connects to and disconnects from Neovim: UIEnter and UILeave (**@equalsraf**, [#6917](https://github.com/neovim/neovim/6917)).

- There also are `TermEnter` and `TermLeave` autocommands triggered when entering/leaving a terminal (**usama54321**, [#8550](https://github.com/neovim/neovim/8550)).
 
#### 0.4.4 for Developers

- New UI extensions:
  - The `ext_hlstate` extension allows semantic identification of builtin and syntax highlights (**@bfredl**, [#8221](https://github.com/neovim/neovim/pull/8221)).
  - The `ext_linegrid` extension sends more gradual screen updates for improved performance (**@bfredl**, [#9064](https://github.com/neovim/neovim/pull/9064)).
  - The `ext_multigrid` extension introduces the concept of a "grid" which is just a rendering surface (**@bfredl**, **@UtkarshMe** [#8455](https://github.com/neovim/neovim/pull/8455])).
  - The `ext_messages` extension enables UIs to provide an external command line (**@bfredl**, **@dzhou121** [#7466](https://github.com/neovim/neovim/pull/7466))
  - `ext_popupmenu` makes neovim send information about its popup menu (**@bfredl** [#9607](https://github.com/neovim/neovim/pull/9607)).

- New API function:
  - `nvim_buf_get_offset`: returns the byte offset of a line (**@bfredl**, [#9180](https://github.com/neovim/neovim/pull/9180))
  - `nvim_buf_is_loaded`: checks if a buffer is loaded (**@phodge**, [#7688](https://github.com/neovim/neovim/pull/7688)).
  - `nvim_create_buf`: create a new buffer (**@bredl**, [#9272](https://github.com/neovim/neovim/pull/9272))
  - `nvim_get_context`/`nvim_load_context`:  explore and restore the editor's state (**@justinmk**, [#10619](https://github.com/neovim/neovim/pull/10619).
  - `nvim_input_mouse`: perform mouse actions (**@bfredl**, [#9429](https://github.com/neovim/neovim/pull9429)).
  - `nvim_open_win`: creating floating external windows 
  - `nvim_set_keymap`: sets a global mapping for a mode (**@yilin-yang**, [#9224](https://github.com/neovim/neovim/pull/9224)).
  - `nvim_win_close`: close a window (**@bfredl**, [#9667](https://github.com/neovim/neovim/pull/9667)).
  - `nvim_win_set_buf`: sets the current buffer of a window (**@justinmk**, [#9100](https://github.com/neovim/neovim/pull/9100))
  - `nvim_win_set_config`: configure the layout of a window (**@mhinz**, [#9626](https://github.com/neovim/neovim/pull/9626)).

- Changed API functions:
  - `nvim_buf_lines_event` will now send events for terminal buffers (**@justinmk**, [#8616](https://github.com/neovim/neovim/pull/8616)).

- Neovim now always waits for a UI when launched with --embed, unless --headless is also supplied (**@bfredl**, [#9024](https://github.com/neovim/neovim/pull/9024)).

- Neovim's libuv loop has been exposed to lua as `vim.loop` (**@zhaozg**, **@andreypopp**, [#10123](https://github.com/neovim/neovim/pull/10123)).

### What's next?

Neovim contributors have been hard at work and added a lot of new features to v0.5.0 like an [LSP client](https://microsoft.github.io/language-server-protocol/) written in Lua and [TreeSitter](https://github.com/tree-sitter/tree-sitter) integration. The next Neovim release promises to be fascinating!

Around Neovim
-------------

## Related projects

The wiki page of [related
projects](https://github.com/neovim/neovim/wiki/Related-projects) is an evergrowing list of projects that somehow make use of Neovim's extended capabilities. Here's a gist of additions since the last newsletter: 

### Plugins

The following plugins have found their way into our [wiki](https://github.com/neovim/neovim/wiki):

- [coc.nvim](https://github.com/neoclide/coc.nvim): Language Server Protocol client that aims to replicate VSCode's functionnalities
- [markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim): Provides preview of your markdown files in your browser, with synchronized scrolling.
- [nvim-gdb](https://github.com/sakhnik/nvim-gdb): thin wrapper for GDB, LLDB and PDB
- [nero.nvim](https://github.com/Vigemus/nero.nvim): A REPL for Neovim
- [neogdb.vim](https://github.com/huawenyu/neogdb.vim): Vim GDB front-end for neovim
- [nvim-luadev](https://github.com/bfredl/nvim-luadev): REPL for developing lua plugins
- [Conjure](https://github.com/Olical/conjure): Clojure and ClojureScript tooling for Neovim over a socket
- [Aniseed](https://github.com/Olical/aniseed): Write plugins for Neovim in Fennel, a Lisp that compiles to Lua.
- [nvim-luapad](https://github.com/rafcamlet/nvim-luapad): Interactive real time neovim scratchpad for the embedded lua engine.

### API Clients

Plenty of new API clients:

- Java: [neovim-java](https://github.com/esensar/neovim-java)
- D: [viniarck/nvimhost-d](https://github.com/viniarck/nvimhost-d)
- Scala: [viniarck/nvimhost-scala](https://github.com/viniarck/nvimhost-scala)
- NodeJS: [neoclide/neovim](https://github.com/neoclide/neovim)
- Dart: [smolck/dart-nvim-api](https://github.com/smolck/dart-nvim-api)
- Ocaml: [janestreet/vcaml](https://github.com/janestreet/vcaml)

The python client also has been renamed to "pynvim".

### GUIs

Maybe 2018/2019 weren't the years of the Linux desktop, but they sure were the years of the Neovim GUI:

- [veonim](https://github.com/veonim/veonim): a really cool electron-based GUI that aims to replicate the VSCode experience.
- [DinVim Vim for Mac](http://dinvim.com): A "safe and secure" Neovim GUI - available on the OSX app store.
- [akiyosi/gonvim](https://github.com/akiyosi/gonvim): A maintained fork of gonvim.
- [etorth/libnvc](https://github.com/etorth/libnvc): An easy to embed GUI based on SDL.
- [mvilim/neovim-pytc-example](https://github.com/mvilim/neovim-pytc-example): The first terminal UI for Neovim that isn't the default terminal UI!
- [GNvim](https://github.com/vhakulinen/gnvim): "GUI for neovim, without any web bloat" written in Rust.
- [Firenvim](https://github.com/glacambre/firenvim): A big ball of web bloat that embeds Neovim in Chrome, Firefox and other browsers.
- [glrnvim](https://github.com/beeender/glrnvim): A terminal wrapper that launches neovim inside of alacritty.
- [yatli/fvim](https://github.com/yatli/fvim): A beautiful UI written in F# - who knew functionnal languages could actually be used for writing software?
- [Neo Vim](https://github.com/asvetliakov/vscode-neovim): A new attempt at integration neovim into VSCode.
- [kethku/neovide](https://github.com/Kethku/neovide): A "No nonsense Neovim client writen in rust" with a tiny bit of cursor madness.
- [dontpanic92/dotnvim](https://github.com/dontpanic92/dotnvim): A C# neovim client with transparent backgrounds!

### Blog posts

Some posts that talk specifically about Neovim things:

- Writing Neovim plugins in lua: https://www.2n.pl/blog/how-to-write-neovim-plugins-in-lua
- Writing your init.vim in lua: https://teukka.tech/luanvim.html
- Using Neovim's event loop from lua: https://teukka.tech/vimloop.html

## Stats

Changed lines since the last newsletter:
```
git log v0.3.0..v0.4.4 --numstat --pretty=tformat: --numstat | nawk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s removed lines: %s total lines: %s\n", add, subs, loc }'
added lines: 168844 removed lines: 75466 total lines: 93378
```

Merged commits:
```
git log v0.3.0..v0.4.4 --pretty=oneline | wc -l
3477
```

Different commit authors:
```
git shortlog -e -s -n v0.3.0..v0.4.4 | wc -l
164
```

Documentation changes:
```
git log v0.3.0..v0.4.4 --numstat --pretty=tformat: --numstat runtime/doc | nawk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s removed lines: %s total lines: %s\n", add, subs, loc }'
added lines: 9226 removed lines: 7002 total lines: 2224
```

## Thanks

Thank you contributors, sponsors, bug-reporters, supporters.
Note that you can now sponsor neovim via [github Sponsors](https://github.com/sponsors/neovim) or on [OpenCollective](https://opencollective.com/neovim).
Thank you **@justinmk** for the awesome project and thank you **@brammool** for your foundational work.
