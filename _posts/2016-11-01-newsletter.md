---
layout: newsletter
title: "Newsletter #7 - Summer of Road"
category: newsletter
permalink: /news/2016/11/
---

It's time for the Neovim newsletter! Skip to the [Fun](#fun-without-smile) and
[Features](#features) sections if you only care about new features. There are
also changes in [project management](#project-management) that you should know
about.

What is Neovim?
---------------

Each minute, a new text editor is born (source: Hacker News). There are
endless text editors that address the "common case".

Instead of another _Vim-like_ text editor, Neovim users want a better Vim.
Thousands of small decisions live in the Vim core, accumulated over decades;
most of those decisions are still relevant, solving subtle problems that new
projects have yet to encounter, digest and decide.

Neovim is a refactor of Vim to make it viable for another 30 years of hacking.
See [`:help vim-differences`](https://neovim.io/doc/user/vim_diff.html) for
a reference of changes and improvements.

Should I switch?
------------------

Neovim very intentionally builds on the long history of Vim community knowledge
and user habits. That means **"switching" from Vim to Neovim is just an
"upgrade"**—like installing a new version of Vim. If you log onto a server or
workstation with only Vim, you won't be lost. If you find an article about Vim,
it likely also applies to Neovim, unless it's about `:smile`.

So if you like Vim, try Neovim. If you love Vim, try
[this](https://github.com/neovim/neovim/blob/master/CONTRIBUTING.md) ;)

Hacking... or plain old Engineering
-----------------------------------

From the start, one of Neovim's explicit goals has been:

> Simplify maintenance and encourage contributions

We want a _hackable Vim_: a codebase and community that enables experimentation
and low-cost trials of new features.

And there's evidence of real progress towards that ambition. We've successfully
executed non-trivial "off-the-roadmap" patches: features which are important to
their authors, but not the highest priority for the project.

- [`:tchdir`](https://neovim.io/doc/user/editing.html#:tcd) enables tab-local
  "working directory"
- `'statusline'` supports unlimited alignment sections ([PR #4489](https://github.com/neovim/neovim/pull/4489))
- [TextYankPost](https://neovim.io/doc/user/autocmd.html#TextYankPost)
  event makes it trivial to implement a reliable
  [yank ring](https://github.com/bfredl/nvim-miniyank), send yanks to an
  external service, and
  [applications we didn't anticipate](https://github.com/machakann/vim-highlightedyank)
- [QuickFixLine](https://neovim.io/doc/user/syntax.html#hl-QuickFixLine) is
  a new highlight group
- `man.vim` offers completion, improved highlighting, and more

These patches were included because they:

1. fit into existing conventions/design
2. included robust test coverage (enabled by an advanced test framework and CI)
3. received thoughtful review by other contributors

They are casually mentioned in [`:help
nvim-features`](https://neovim.io/doc/user/vim_diff.html#nvim-features) :)

Fun without `:smile`?
---------------------

New clients and innovative applications are appearing more frequently than ever.

- [NyaoVim](https://github.com/rhysd/NyaoVim) is a thoughtfully-designed,
  modular **Electron GUI**.
  - Its [`<neovim-editor>`](https://github.com/rhysd/neovim-component) web
    component can be used in **your own project**, including VS Code, Atom, and
    other Electron or nw.js projects!
- [ONI](https://github.com/extr0py/oni) is an Electron-based **Neovim IDE**
  showing many exciting possiblities. It also has a cool logo like NyaoVim :)
- Users love [**deoplete**](https://github.com/Shougo/deoplete.nvim), the first
  **non-blocking auto-completion** plugin for vim.
- @qvacua turned his sights to `nvim`, progressing rapidly on a new `nvim`-based
  backend for his well-known [VimR](https://github.com/qvacua/vimr) project,
  a polished **GUI for macOS**. There are pre-built `.app` bundles for
  macOS 10.11 at the [releases](https://github.com/qvacua/vimr/releases) page.
- The cross-platform [**neovim-qt**](https://github.com/equalsraf/neovim-qt) GUI
  continues to get better: it's as fast as gVim, with less flicker, and it
  doesn't depend GTK/KDE.
- [neovim.app](https://github.com/rogual/neovim-dot-app) is a macOS Neovim GUI
  available via homebrew for macOS 10.9+.
- [nvim-hs](https://github.com/neovimhaskell/nvim-hs) is a host to enable
  **writing Neovim plugins in Haskell**.
- Check out [cl-neovim](https://github.com/adolenc/cl-neovim) for authoring
  **Neovim lisp plugins**. Includes `:Lispdo`!
- [nvr](https://github.com/mhinz/neovim-remote) now supports the Vim
  "clientserver" options `--servername`, `--remote`, etc. `nvr` is perfect for
  **communicating with a parent `nvim` instance** from a `:terminal` buffer.
- Intero [users are joyful](https://twitter.com/_simonyang/status/753365931896692736)
  about [intero.nvim](https://github.com/myfreeweb/intero.nvim) and
  [intero-neovim](https://github.com/parsonsmatt/intero-neovim)

There are clients for go, julia, perl, Java, R, Elixir, Clojure, and more. Visit
the [related projects](https://github.com/neovim/neovim/wiki/Related-projects)
wiki page to discover new projects as they emerge!

Project management
------------------

> Clarity and consistency breed contribution. — @robertmeta

### Benevolent Dictator For a Limited time

In July, Thiago (@tarruda) took a less active role in the project, for personal
reasons. He hopes to resume active contributions in the future.

Some have asked for a "BDFL" to be named. @justinmk has that role, unless you
want it: we've made steps to document the role of maintainer, so that anyone
trusted by most contributors can step up in the future.

The ultimate goal is to spread out tasks as horizontally as possible, and to
continue to give the "commit bit" to people we've grown to trust. There are
currently 14 core contributors; we'd like to scale that to 50. We don't want the
project to depend on heroic effort, but a flow of interested parties working
within the conventions and etiquette of the Vim community.

### Funding

The (ongoing) successful [funding campaign](https://salt.bountysource.com/teams/neovim)
yielded [libmpack], `:terminal`, and major refactors and improvements (e.g.
decoupling the UI logic from the TUI). With Thiago taking a less active role in
the project, the funding is available to other developers.

[@ZyX-I](https://github.com/ZyX-I), a prolific committer to Neovim (21 kLOC
contributed) and Vim ([13 kLOC](#note1), including `if_python`), agreed to take
the role of "lead developer", i.e. the developer who receives the funding. His
work on Neovim includes:

- first-class XDG support, shada, build-time generators, automated change-aware
  linter, Lua-to-VimL translator
- critical internals such as `msgpackparse()` and `os/fileio.c` (buffered I/O)
- complete rewrite of Vim JSON support, including granular error messages
- comprehensive test coverage for all of the above

The funding does not always go to one person. It's available to any
[core contributor](https://github.com/orgs/neovim/people) who wants to take
a month or more to focus on Neovim.

### Donations

Because funding is monthly, it is (hopefully) a low-friction decision:

- To donate $10, you could pledge $1 per month.
- If the project makes you rage, just cancel your pledge.
- If the project makes you happy (despite the lack of `:smile`, somehow), let
  the pledge continue!

API
---

The Neovim API is one of the defining technical and "soft" features of the
project. In [PR #5535](https://github.com/neovim/neovim/pull/5535) we formed
a strategy for **growing the API without breaking clients**.

- We established the *API Level* concept, to enable trivial comparison and
  emphasize that the API version is separate from the Neovim version.
- We added version and deprecation fields to the API metadata.
- We'll never break API function signatures published in a tagged release.
- We won't remove deprecated API functions until Neovim version `2.0` (if ever).

The API should only [**grow**](https://youtu.be/oyLBGkS5ICk?t=1557), not break.
Each API function is marked by the API level where it first became available.
This makes it practical for the numerous Neovim API clients to support any
released version of Neovim.

Since [PR #4934](https://github.com/neovim/neovim/pull/4934) you can call the
API of the current `nvim` process **directly from VimL**:

    :echo nvim_buf_get_lines(42, 1, 3, v:false)

Try `:call nvim_<Tab>` at the command line to see the available API functions,
or install the [nvim-api-viewer](https://github.com/tweekmonster/nvim-api-viewer)
plugin to see a nice overview of available API functions.

We take API reliability seriously, and we've tried to think carefully about the
design. Feedback from plugin and client authors is appreciated!

Release strategy
----------------

### Versioning

One year ago we announced our first release, `0.1`. We've streamlined the
release process (versioning, tagging, changelogs, announcements).

Some users wonder if `0.1` means Neovim is unstable.

- Each release since `0.1` is considered **stable for use** on all systems
  except Windows.
    - Windows will be a first-class target starting with `0.2`.
- Until `1.0`, some non-API features may break backwards compatibility. This is
  uncommon, and these cases are always
  [documented](https://github.com/neovim/neovim/wiki/Following-HEAD).
- In `0.1.6` we introduced **API versioning**. Clients can dynamically decide
  which functions to use.

We follow [semver](https://semver.org); the recommendations there explain
the intention of the `0.x` series.

### OS Packages

More OS packages are appearing. Neovim is part of **Debian's [next
release](https://packages.debian.org/stretch/neovim)!** Special thanks to
@jamessan (Debian maintainer and Neovim contributor), @fwalch and others who
build packages for their favorite systems and work with us to address inevitable
compiler/platform quirks.

Progress
--------

What did Neovim contributors accomplish since 2014?

By a [conservative estimate](#note2) at least 20,000 new lines of C code have
been written. We've written 2200 _new_ tests, in addition to passing Vim's own
test suite. 273 different people have contributed to the core project. The [core
project](https://github.com/neovim/neovim) has more commits in 3 years than Vim
in 12 years.

Besides major refactoring and feature work, a ton of time was put into the
Neovim continuous integration (CI) system. In a stable but fragile C codebase,
maintainers tend to ignore "small" features because they may be too risky. CI
reduces fragility so we can [welcome](#hacking-or-plain-old-engineering) feature
work large _and small_, instead of fearing change.

New features can be tested rigorously with **screen tests**. For example, here's
a test that exercises the `'wildmode'` UI behavior:

```lua
describe("'wildmenu'", function()
  it(':sign <tab> shows wildmenu completions', function()
    execute('set wildmode=full')
    execute('set wildmenu')
    feed(':sign <tab>')
    screen:expect([[
                               |
      ~                        |
      ~                        |
      define  jump  list  >    |
      :sign define^             |
    ]])
  end)
end)
```

After we forked Vim in 2014, there was an unstable period; that gap has become
smaller and smaller, and will vanish in 2017. Each regression fix is covered by
integration tests. Each pull request builds against 12 different environments.
Special thanks to @jszakmeister, @fwalch and @ZyX-I for their work on the build
system, and to @oni-link for fixing some very difficult bugs.

### Little things matter

One of the strongest impressions from
[social media](https://twitter.com/search?q=neovim&src=typd) is that people
really appreciate _less friction_ when they try Neovim. **Defaults matter.**
Tim Pope deserves credit for [curating](https://github.com/tpope/vim-sensible/)
many of the [defaults](https://neovim.io/doc/user/vim_diff.html#nvim-defaults)
we chose.

@fmoralesc and others thought carefully about how to
[implement](https://github.com/neovim/neovim/issues/2676) these defaults without
causing regressions (`encoding=utf8` and syntax/filetype were tricky). The work
was tedious, but justified: it's a _one-time_ cost that helps new users, old
users on new systems (which are everywhere these days: VMs, containers,
servers...), and _all_ users by propagating Vim "best practices".

Features
--------

Here are some new developments since the last newsletter.

- **Ruby support** landed in 0.1.5. This means you can write Neovim plugins in
  ruby _and_ the legacy Vim `:ruby*` commands are supported (so existing
  Vim+ruby plugins work in Neovim, such as Command-t and vim-github-dashboard).
  - To enable Ruby support, just `gem install neovim`. You don't need to worry
    about compiling against a specific version.
- **Write plugins in Go** with the Neovim API
  [Go client](https://godoc.org/github.com/neovim/go-client/nvim)!
  (Thanks to @garyburd!)
- `:CheckHealth` detects common problems (like Homebrew's `doctor`). Run it
  whenever you install or upgrade Neovim.
- **buffer-local highlighting** (`:help api-highlights`) is similar to
  `matchaddpos()`, with some key differences: it is associated with a buffer and
  **adapts to line insertions and deletions**. Useful for linter or semantic
  highlighter plugins that monitor a buffer for changes and compute highlights
  in the background.

### Externalized UI Widgets

In [PR #4432](https://github.com/neovim/neovim/pull/4432) @bfredl made the first
step to [give UIs more control](http://tarruda.github.io/articles/neovim-smart-ui-protocol/)
over the display of "widgets". @romgrk quickly made a
[proof of concept](https://www.youtube.com/watch?v=TI5azVeDUDo).

It didn't take long for an [ambitious patch](https://github.com/neovim/neovim/pull/5686)
to externalize **cmdline, tab, wildmenu, and preview window widgets**. The demo
shows exciting potential:

<iframe width="600" height="400" src="https://www.youtube.com/embed/rzclz1seo0g" frameborder="0" allowfullscreen></iframe>

This work was possible because @tarruda cleanly separated the terminal-UI (TUI)
from the internal screen, so **even the built-in TUI is driven by UI events**
like any other externalized UI.

### Incremental ("live") `:substitute`

In May 2016 a group of students mentored by Eric Burel contacted us about
contributing to Neovim. From a list of ideas we provided, they decided to
implement a "live preview" for `:substitute`. We merged it in
[PR #5561](https://github.com/neovim/neovim/pull/5561), released in `0.1.7`.
Set the `inccommand` option to try it:

    :set inccommand=split

<script type="text/javascript" src="https://asciinema.org/a/92207.js" id="asciicast-92207" async></script>

This feature was made possible by our development model: despite having "no
time" for a side-project, we outlined the basic idea, the students made
decisions out-of-band, and we provided clarification as needed.

- The students posted a PR to allow ongoing feedback. The PR fork was updated
  regularly, so reviewers could pull, build, and test.
- Tests were written using [screen tests](#progress), helping coverity/ASan/etc
  to exercise the feature and reviewers to **visualize the behavior**.
- The automated build system continuously ran the changes against 12 different
  systems.

Eric [wrote about the experience](https://medium.com/@eric.burel/stop-using-open-source-5cb19baca44d#.4gz835f9y).
Thanks to Eric, the students at ENSIMAG,
[@KillTheMule](https://github.com/KillTheMule), and @bfredl for carrying this
feature to a conclusion we are proud of.

### Upcoming

Look for the following developments in 2017 for Neovim `0.3`.

- We will ship Lua as a default scripting alternative in 2017.
  The next "inflection point" of reduced-risk, rapid enhancement is to make the
  core extensible with Lua. For that
  [PR #4411](https://github.com/neovim/neovim/pull/4411) is an important step.
- With ZyX's [eval.c refactor](https://github.com/neovim/neovim/pull/5119)
  the monolithic `eval.c` will be separated into
  [modules](https://github.com/neovim/neovim/issues/5081#issuecomment-234772243),
  marking a point where Neovim's VimL implementation diverges from Vim's. This
  will be the world's second **alternative VimL implementation**
  (ZyX's [VimL-to-Lua PR](https://github.com/neovim/neovim/pull/243) was the first).
- [Extended marks](https://github.com/neovim/neovim/pull/5031) will give plugin
  authors more powerful and flexible marks.
- We will take a close look at the
  [Microsoft Language Server Implementation](https://github.com/neovim/neovim/issues/5522)
  to decide how it and similar middleware can integrate elegantly with Neovim.

EOF
---

So that was 2016 for Neovim. Could 2017 be the Year of the Neovim Desktop?

Neovim's ideas are finding their way into other projects, such as
[Xi editor](https://news.ycombinator.com/item?id=11576751) and Vim itself,
which has seen
[more activity this year than any other year in its history](https://github.com/vim/vim/graphs/contributors).

<img src="/images/2016-vimfest.jpg" style="max-width:600px; height:auto;"
     title="Neovim and Vim maintainers at VimFest 2016" />

There's a beehive of activity in the gitter and IRC channels (which are
bridged by [matrix](https://github.com/matrix-org/matrix-appservice-gitter)
thanks to @leonerd!). [Visit us](https://neovim.io/community/) to talk about the
project.

And don't forget there's a [roadmap](https://neovim.io/roadmap/) at neovim.io if
you want to check where the project is headed.

Thanks for reading.

—Justin M. Keyes (@justinmk)

---

##### note1

    $ git log --grep='\([zZ]y[xX]\)\|\([nN]ikolai [pP]av\)\|\([nN]ikolay [pP]av\)' --numstat --pretty=tformat: --numstat|gawk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s removed lines: %s total lines: %s\n", add, subs, loc }'
    added lines: 22590 removed lines: 8620 total lines: 13970

    $ git log --grep='[cC]hristian [bB]rab' --numstat --pretty=tformat: --numstat|gawk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s removed lines: %s total lines: %s\n", add, subs, loc }'
    added lines: 10000 removed lines: 3033 total lines: 6967

##### note2

    $ ohcount msgpack_rpc/ api/ os/ event/ tui/ shada.c rbuffer.c terminal.c memory.c
    c                    79      14576       2863      16.4%       2154      19593

[libmpack]: https://github.com/tarruda/libmpack
