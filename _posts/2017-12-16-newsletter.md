---
layout: newsletter
title: "Newsletter #8 - Open up the Windows"
category: newsletter
permalink: /news/2017/12/
---

What is Neovim?
---------------

Neovim is a fork of the venerable text-editor vim, focused on extensibility and
usability. It is not a rewrite but a continuation and extension of Vim. Many
clones and derivatives exist, some very clever—but none are Vim. Neovim is built
for users who want the good parts of Vim, and more. See a list of differences
at [:help vim-differences](https://neovim.io/doc/user/vim_diff.html).

### Participating

If you are interested in contributing to Neovim, read
[CONTRIBUTING.md](https://github.com/neovim/neovim/blob/master/CONTRIBUTING.md) to get started.
We have a great test suite and automated CI, so you can just jump in and have a
go. Don't be afraid to open a PR to get comments or just take advantage of the
infrastructure!

To get in touch with the team, join the [gitter channel](gitter.im/neovim) (also
accessible via [IRC](https://webchat.freenode.net/?channels=neovim)), or visit
the [Neovim subreddit](https://www.reddit.com/r/neovim/), which many of the
developers read. Taking part in conversations is a contribution, too!

New contributor shoutout: **@ckelsel** has been responsible for porting a large number of [vim patches](https://github.com/neovim/neovim/commits?author=ckelsel), as has [**@lonerover**](https://github.com/neovim/neovim/commits?author=lonerover). Thank you!

Old contributor shoutout: **@oni-link** isn't a name you read a lot in the commit logs, but he's been very helpful in reviewing changes and improving complicated PR's for quite some time. Thank you!


What's new
----------

The [last newsletter](https://neovim.io/news/2016/11/) has gathered some dust,
so we want to bring you up-to-date in the Neovim world.

Neovim has had 3(!) releases since back then, so let us recap those first and foremost:

### Release 0.2

This release brings a host of fixes and improvements. We'll look at some of them closer below, but be sure to also check
out the [release page](https://github.com/neovim/neovim/releases/tag/v0.2.0) for all the gory details.


#### 0.2 for Users
 - Microsoft Windows is now fully supported
   - `:terminal` mode is available in 0.2.1, see below!
 - Starting this release, Neovim offers [pre-built packages](https://github.com/neovim/neovim/releases/)
   for macOS and Windows (32-bit and 64-bit). The Windows package contains
   a GUI and some additional tools like `curl.exe`.
 - `:terminal` has seen various improvements (**@justinmk**, [#6185](https://github.com/neovim/neovim/pull/6185))
   - `findfile()`, `:find` and `gf` now work in `:terminal` buffers (**@tweekmonster**, [#6009](https://github.com/neovim/neovim/pull/6009))
   - Shell output is now throttled to maintain terminal responsiveness (**@justinmk**, [#5396](https://github.com/neovim/neovim/pull/5396))
    - Arguments for shell commands now work properly with `:term` (**@friedsock**, [#4504](https://github.com/neovim/neovim/pull/4504))
 - Numerous improvements to man.vim have been made (**@m-wynn**, **@raichoo**, **@renstrom**, **@justinmk**, [#6693](https://github.com/neovim/neovim/pull/6693),  [#6766](https://github.com/neovim/neovim/pull/6766), [#6815](https://github.com/neovim/neovim/pull/6815), [#3104](https://github.com/neovim/neovim/pull/3104), [#7405](https://github.com/neovim/neovim/pull/7405))
 - Man and help pages now contain a TOC (**@tweekmonster**, [#5169](https://github.com/neovim/neovim/pull/5169))
 - The message `Reading from stdin` was removed (**@msva**, [#6298](https://github.com/neovim/neovim/pull/6298))
 - `guicursor` now works in the TUI (**@teto**, [#6423](https://github.com/neovim/neovim/pull/6423))
 - There's a new highlight group `Whitespace` for whitespace-related `listchars` (**@zhou13**, [#6367](https://github.com/neovim/neovim/pull/6367))
 - Commandline completion has been implemented (**@justinmk**, [#6376](https://github.com/neovim/neovim/pull/6376))
 - The event `DirChanged` is now available for autocommands (**@mhinz**, [#5928](https://github.com/neovim/neovim/pull/5928))
 - `cpoptions`: Use the `_` flag to toggle `cw` behaviour (**@raichoo**, **@chrisbra**, [#6235](https://github.com/neovim/neovim/pull/6235))
 - `CTRL-R` now omits trailing `^M` when pasting to the commandline (**@justinmk**, [#6137](https://github.com/neovim/neovim/pull/6137))
 - You can now `:edit` filenames without escaping whitespaces (**@Kurt-Bonatz**, [#6119](https://github.com/neovim/neovim/pull/6119))
 - Changes to defaults:
   - `mouse=a` is no longer the default (**@justinmk**, [#6022](https://github.com/neovim/neovim/pull/6022))
   - `NVIM_TUI_ENABLE_CURSOR_SHAPE` was removed, you can use `guicursor` instead (see https://github.com/neovim/neovim/releases/tag/v0.2.0)
   - `showcmd`, `belloff=all`, `ruler` are now default (**@justinmk**, [#6087](https://github.com/neovim/neovim/pull/6087))
 
 
#### 0.2 for Developers

- Full API documentation at [:help api](https://neovim.io/doc/user/api.html)
- API changes:
    - `{get,set}_option` now update local options as appropriate (**@yagebu**, [#6405](https://github.com/neovim/neovim/pull/6405))
    - `nvim_get_mode` is available (**@justinmk**, [#6247](https://github.com/neovim/neovim/pull/6247))
    - External UIs can now draw the tabline (**@dzhou121**, [#6583](https://github.com/neovim/neovim/pull/6583))
- `writefile` now obeys the `fsync` option (**@ZyX-I**, [#6427](https://github.com/neovim/neovim/pull/6427))
- In addition to the effort from the vim guys (7.4.{2055,2057,2058}), `eval.c` has been refactored and error messages were improved (**@ZyX-I**, [#5119](https://github.com/neovim/neovim/pull/5119))
- The `id` function is now available, and `printf(%p)` is finally useful (**@ZyX-I**, [#6095](https://github.com/neovim/neovim/pull/6095))
 - All providers will be disabled if `g:loaded_*` exists (**@justinmk**, [commit](https://github.com/neovim/neovim/commit/2f38ed11c98a35b7abe53405d8f5f41cb1054f8f))
 - `setpos` can now set lowercase marks in other buffers (**@hardenedapple**, [#5753](https://github.com/neovim/neovim/pull/5753))
 - You can check `v:exiting` to see if Neovim is exiting (**@mhinz**, [#5651](https://github.com/neovim/neovim/pull/5651))

### Release 0.2.1

Next let's see what happened in 0.2.1. As before, check out the [release
notes](https://github.com/neovim/neovim/commit/c67dd5acd0bb9f8d08789dfe6af27d9045e95fb4)
for details.

#### 0.2.1 for Users
- Nvim now supports window-local highlighting (**@bfredl**, [#6700](https://github.com/neovim/neovim/pull/6700))
- Even more terminal improvements:
  - TUI cursor motion, SGR, and scrolling optimizations, cursor shape and terminal type recognition improvements have been merged (**@jdebp**, [#6816](https://github.com/neovim/neovim/pull/6816))
  - Terminal buffers are adjusted when using the number column (**@tecywiz121**, [#7440](https://github.com/neovim/neovim/pull/7440))
  - A newly created `:terminal` will now stay in normal mode (**@nelstrom**, [#6808](https://github.com/neovim/neovim/pull/6808))
- The command line can now be colored (**@ZyX-l**, [#6364](https://github.com/neovim/neovim/pull/6364))
- Custom clipboard providers can now be configured (**@nhooyr**, [#6030](https://github.com/neovim/neovim/pull/6030))
- The clipboard provider can now fall back to tmux support (**@xu-cheng**, [#6894](https://github.com/neovim/neovim/pull/6894))
- Further improvements for `:Tutor` have been made (**@fmoralesc**, [#7028](https://github.com/neovim/neovim/pull/7028))
- `inccommand` now works with leading modifiers like `keeppattern` (**@jamessan**, [#6967](https://github.com/neovim/neovim/pull/6967))
- The ruby host can be configured (**@alexgenco**, [#6841](https://github.com/neovim/neovim/pull/6841))
- The unnamed register is kept on restart (**@AdnoC**, [#4700](https://github.com/neovim/neovim/pull/4700))
- For Windows users:
  - Neovim can be used on the console (**@equalsraf**, [#6315](https://github.com/neovim/neovim/pull/6315))
  - `:terminal` has been implemented (**@erw7**, [#7007](https://github.com/neovim/neovim/pull/7007))
  -  Path handling on windows has been improved (**@aignas**, [#7349](https://github.com/neovim/neovim/pull/7349))
- For Linux users:
  - You can now download AppImage packages (**@AdnoC**, [#6638](https://github.com/neovim/neovim/pull/6638))
  - Function keys now work in the terminal UI (**@rjmill**, [#5014](https://github.com/neovim/neovim/pull/5014))
  - Fixed a crash with extremely long lines (more than 100m virtual columns) (**@Grimy**, [#3527](https://github.com/neovim/neovim/pull/3527))
  - `:cquit` now takes an optional error code as argument (**@joshleeb**, [#7336](https://github.com/neovim/neovim/pull/7336))
  - True colors in tmux have been fixed (**@DarkDefender**, [#7100](https://github.com/neovim/neovim/pull/7100))
  - `:checkhealth` is a builtin now, and validates your `$VIMRUNTIME` (**@justinmk**, [#7399](https://github.com/neovim/neovim/pull/7399))
  - `cursorcolumn` and `colorcolumn` respect syntax highlighting (**@zhou13**, **@justinmk**, [#7364](https://github.com/neovim/neovim/pull/7364))


#### 0.2.1 for Developers
- Changes:
  - External UIs now should use the `FocusGained` event instead of sending the `<FocusGained>` pseudokey (**@justinmk**, [#7221](https://github.com/neovim/neovim/pull/7221))
- Neovim sources are now analyzed with PVS (**@ZyX-l**, [#6493](https://github.com/neovim/neovim/pull/6493))
- External UIs can now draw
  - ... the tabline (**@dzhou121**, [#6583](https://github.com/neovim/neovim/pull/6583))
  - ... the command line (**@dzhou121**, **@bfredl**, [#6162](https://github.com/neovim/neovim/pull/6162))
  - ... the wildmenu (**@dzhou121**, **@bfredl**, [#7454](https://github.com/neovim/neovim/pull/7454))
- Lua is gaining momentum:
  - The interface has been implemented (**@ZyX-I**, [#4411](https://github.com/neovim/neovim/pull/4411))
  - Lua files can now be required from `lua/` (**@ZyX-l**, [#6789](https://github.com/neovim/neovim/pull/6789))
  - Call lua directly from the API (**@bfredl**, [#6704](https://github.com/neovim/neovim/pull/6704))
- Programmatically get information about mappings via  `get_keymap` (**@tjdevries**, [#6236](https://github.com/neovim/neovim/pull/6236))
 - You can now retrieve highlights `using nvim_get_hl_by_name/by_id` (**@teto**, [#7082](https://github.com/neovim/neovim/pull/7082))
 - `bufhl` can now be used to create new highlighting groups (**@bfredl**, [#7414](https://github.com/neovim/neovim/pull/7414))
 - External UIs can get menus from  `menu_get` (**@teto**, [#6322](https://github.com/neovim/neovim/pull/6322))
    - `menu_get` pretty-prints special chars, making it possible to feed its results back into e.g. `nvim_input` (**@teto**, **@KillTheMule**, [#7340](https://github.com/neovim/neovim/pull/7340))
 - RPC clients can connect to a socket using `sockconnect` (**@bfredl**, [#6594](https://github.com/neovim/neovim/pull/6594))
 - `serverstart` now uses `uv_getaddrinfo()`, bringing IPv6 support (**@mhinz**, [#6680](https://github.com/neovim/neovim/pull/6680))
 - You can now define several functions in one `:execute` call (**@ZyX-I**, [#6914](https://github.com/neovim/neovim/pull/6914))
 - Logging has been enabled per default (**@justinmk**, [#6827](https://github.com/neovim/neovim/pull/6827))
 
 
### Release 0.2.2
 
 This is a fast-and-furious containing mostly bug-fixes. See the [release-notes](https://github.com/neovim/neovim/commit/6d2c30daf3b29b84b15b547ef956e165f5e9685d) for details. Some new features are in, too:
 
 - `curdir` has been added as a viewoption (**@EricR86**, [#7447](https://github.com/neovim/neovim/pull/7447))
 - A node host is available (**@billyvg**, [#7458](https://github.com/neovim/neovim/pull/7458))
 - `:checkhealth` now also validates the runtimepath (**@justinmk**, [#7526](https://github.com/neovim/neovim/pull/7526))
 - `scrollback` now defaults to 10000 (**@justinmk**, [#7556](https://github.com/neovim/neovim/pull/7556))
 - A bugfix of note is the reversal of the netrw update, we've been seeing quite some reports about that! (**@justinmk**, [#7557](https://github.com/neovim/neovim/pull/7557))
 
### 0.2.3-dev

Want to know what to expect from the next release? Here's a list to whet your appetite:

- `CmdlineEnter` and `CmdlineLeave` autocommands (**@bfredl**, [#7422](https://github.com/neovim/neovim/pull/7422))
- Channels: support buffered output and bytes sockets/stdio (**@bfredl**, [#6844](https://github.com/neovim/neovim/pull/6844))
- A proper viml expression parser (**@ZyX-l**, [#7234](https://github.com/neovim/neovim/pull/7234))
- A lot of work has been put into making Neovim work better with different terminal emulators, and is still ongoing (**@justinmk**, [#7664](https://github.com/neovim/neovim/pull/7664), [#7653](https://github.com/neovim/neovim/pull/7653), [#7720](https://github.com/neovim/neovim/pull/7720), [#7640](https://github.com/neovim/neovim/pull/7640), [#7624](https://github.com/neovim/neovim/pull/7624) and **@florolf**, [#7676](https://github.com/neovim/neovim/pull/7676))
  
### The near future: Upcoming

For an overview of planned features, goals and ideas for Neovim head to the [road
map](https://neovim.io/roadmap/). Some noteworthy upcoming PRs are:

- Floating Windows for external UIs (**@bfredl**, [#6619](https://github.com/neovim/neovim/pull/6619))
- Extended Marks (**@timeyyy**, [#5031](https://github.com/neovim/neovim/pull/5031))
- Buffer change notifications (**@phodge**, [#5269](https://github.com/neovim/neovim/pull/5269))
- Built in LSP support (**@tjdevries**, [#6856](https://github.com/neovim/neovim/pull/6856)) (see http://langserver.org/ why that could be of interest to you)

***PSA***: If you build Neovim from the latest master, always check [Following HEAD](https://github.com/neovim/neovim/wiki/Following-HEAD) for any changes.


Around Neovim
------------------

The wiki page of [related
projects](https://github.com/neovim/neovim/wiki/Related-projects) has seen quite
some additions, check out the full changes [here](https://github.com/neovim/neovim/wiki/Related-projects/_compare/7ce8559...e2c051fd85226ff6a67c67f9de55ad9039aa2948).


### API clients

API clients are at the heart of Neovim's architecture, and significantly improve developer experience. Write a plugin in
any language you want! Since the last newsletter, we've seen the addition of another [C++](https://github.com/DaikiMaekawa/neovim.cpp) client, one for [Elixir](https://github.com/dm1try/nvim), and a [Racket](https://gitlab.com/HiPhish/neovim.rkt) client. The [node client](https://github.com/neovim/node-client) got an overhaul and a new maintainer. Thanks **@billyvg** for taking over! While not totally new, a special shoutout goes to the [ruby client](https://github.com/alexgenco/neovim-ruby) for being very well-maintained. Thanks, **@alexgenco**!


If you happen to prefer a language not yet listed, a good starting point are the [docs](https://neovim.io/doc/user/msgpack_rpc.html#RPC), and be sure to come talk about it on the [gitter channel](gitter.im/neovim).

### GUIs

Too much activity has happened on the GUI front to list all new clients, so let's just have a look at some that stand out. VSCode  is using Neovim to properly [integrate ex-mode commands](https://github.com/VSCodeVim/Vim), and Sublime Text 3 gained [full Neovim integration](https://github.com/lunixbochs/actualvim). The latter also makes use of another
cool Neovim-specific feature, the externalized popupmenu, and it only took them
[50 LOC](https://github.com/lunixbochs/ActualVim/issues/57#issuecomment-286452725). Last but not least, [eovim](https://github.com/jeanguyomarch/eovim/) is an [enlightenment](https://www.enlightenment.org/) client for Neovim.

### The Architecture of Neovim.

Some students have studied the Architecture of Neovim and published an
"analytical essay" about their findings. Be sure to
[have a look](https://delftswa.gitbooks.io/desosa-2017/content/neovim/chapter.html)
if you are interested in the bigger picture.

### Vimcasts and Modern Vim

Drew Neil of [vimcasts](http://vimcasts.org) fame has started recording [casts about Neovim](http://vimcasts.org/categories/neovim/), and began work on a successor to his praised book [Practical Vim](https://pragprog.com/book/dnvim2/practical-vim-second-edition) called [Modern Vim](https://pragprog.com/book/modvim/modern-vim). Most of the book will be  suitable for Vim 8 and Neovim users, but about 1/3rd of the book will cover Neovim-specific functionality.

### Libuv

One of the founding stones of Neovim has been porting I/O to libuv. So you will be happy to hear that libuv has set out to [support more platforms](https://github.com/libuv/libuv/issues/1287). Neovim, soon coming to a platform near you!

### Test suite

Neovim offers easy testing via the wonderfully simple Lua language. Why aren't others doing it, you ask? Turns out, [they do](https://github.com/neomutt/neomutt/pull/415), or at least, the neomutt project is preparing for it. Very nice to see ideas from Neovim [taken up](https://github.com/neomutt/neomutt/issues/414).


Stats
-----

Changes lines since the last newsletter:

    git log  --since="2016-11-01" --numstat --pretty=tformat: --numstat|gawk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s removed lines: %s total lines: %s\n", add, subs, loc }'
    added lines: 255393 removed lines: 221106 total lines: 34287

Merged commits:

    git log  --since="2016-11-01"|wc -l
    3110

Different commit authors:

    git shortlog -e -s -n --since="2016-11-01"|wc -l
    146

Documentation changes:

    git log  --since="2016-11-01" --numstat --pretty=tformat: --numstat runtime/doc|gawk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s removed lines: %s total lines: %s\n", add, subs, loc }'
    added lines: 8579 removed lines: 6577 total lines: 2002


Thanks
----
Thank you contributors, sponsors, bug-reporters, supporters. Thank you **@justinmk** for the awesome
project and thank you **@brammool** for your foundational work.

**@brammool** and **@chrisbra**  from the vim team have left a
few comments on our issue tracker, it's nice to be working together!
