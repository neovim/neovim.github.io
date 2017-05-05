---
layout: newsletter
title: "Newsletter #8 - Open up the Windows"
category: newsletter
permalink: /news/2017/05/
---

@timeyyy here representing the Neovim Team.

As one of Neovim's goals is to be welcoming to Contributors, I thought I would comment on my experiences being new to the team and all. In short, it has been a blast!
I can strongly encourage anyone to get involved if you have been thinking about it. The community is a friendly place to be.  Come join us!

We are very happy to announce the release of version [0.2](https://github.com/neovim/neovim/releases/tag/v0.2.0).


Features
--------

- **Windows Support** see [Install Instructions](https://github.com/neovim/neovim/wiki/Installing-Neovim) and [ongoing work](https://github.com/neovim/neovim/issues/5229)
- **Binaries** for windows and OSX platforms


Community Projects
------------------

Let's take a look at some projects that have sprung up recently.

### [Actualvim](https://github.com/lunixbochs/actualvim)

Now this is a cool project - Bidirectional interface between Sublimetext and Neovim. This project could be used as a reference design to port to different editors as long as you have the ability to intercept all input.

The steps required to make this work (straight from the horse's mouth)

- sublime-facing code intercepts keys and handles reading/writing sublime state and listening for sublime events
- neovim-facing code inputs keys and handles reading/writing vim state
- glue code in the middle handles efficient synchronization
- a pile of forked libraries (neovim, msgpack, asyncio, etc) hacked up to work in the sublime environment

We also have a bonus example from the project. The popup menu(PUM) has been recently externalized from the grid, allowing
clients to draw the widget as they like. Actualvim has externalized the PUM in around [~100LOC](https://github.com/lunixbochs/ActualVim/commit/bd214f980688546926c17ec84418446674f62f27). A picture can be seen [here](https://github.com/lunixbochs/ActualVim/issues/57#issuecomment-286452725)

### The Architecture of Neovim.

Some students have studied the Architecture of Neovim. The [results](https://delftswa.gitbooks.io/desosa-2017/content/neovim/chapter.html) look awesome.

Development Goodies
-------------------
### Features

- **Externalized Tabline** - Thanks @dzhou121
    Every UI component that is externalized means that nvim can run faster.
- PVS studio static analysis. We now have static analysis by coverity, clang-scan, clang ASan/UBSan, clint, luacheck, and PVS

### Upcoming

- [Floating Windows in the Terminal!](https://github.com/neovim/neovim/pull/6619)
- [Window Specific Background Color](https://github.com/neovim/neovim/pull/6597)
- [Externalized cmdline](https://github.com/neovim/neovim/pull/6162)
- [Windows Terminal UI](https://github.com/neovim/neovim/pull/6315)
- `:Terminal` in Windows
- pre-build packages(Appimage) for Linux (https://github.com/neovim/neovim/pull/6638)


### Note

- We unfortunately missed out on Google Summer of Code 2017, it is on the radar
now and we are maintaining a list of [project ideas](https://github.com/neovim/neovim/wiki/GSoC-2018-Ideas).
We should keep this brimming with ideas. It is required for our acceptance into GSOC;
it can also spark creativity in contributors and students.

- We are aiming to release newsletters more often, please add any relevant news
to our website's [issue tracker](https://github.com/neovim/neovim.github.io).

- We have a few contributors located in Europe, it would be cool to organize
some events or sprints together!

- @Sander2 (one of the students on the Architecture project mentioned above) has
been experimenting with code fuzzing which resulted in a [bug fix](https://github.com/neovim/neovim/pull/6557) in both Neovim and Vim.

- @ZyX-I 's [eval.c refactor](https://github.com/neovim/neovim/pull/5119) was also merged,
paving the way for the built-in Lua for 0.3. We cannot wait!

- [Libuv](https://github.com/libuv/libuv/issues/1287) might be getting support
for cygwin and other platforms. This is great news for Neovim!


Misc
----

- [Neomutt](https://github.com/neomutt/neomutt/pull/415) may be getting a Lua based testing infrastructure similar to ours.

- The [road map](https://neovim.io/roadmap/) has got your back if you need a quick overview of
what is to come.

- For a complete list of Neovim features [:help vim-differences](https://neovim.io/doc/user/vim_diff.html)

- @brammool (creator of Vim), as well as @chrisbra (Vim contributor) have left a few comments on our issue tracker, it's nice to be working together!

Thank you sponsors, and thank you @justinmk @brammool et al for the awesome project.

—Timothy C. Eichler (@timeyyy)
