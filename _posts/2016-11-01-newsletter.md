---
layout: newsletter
title: "Newsletter #7 - Summer of Road"
category: newsletter
permalink: /news/2016/11/
---

It's time for the Neovim newsletter.

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
their authors, but not necessarily popular. These features were merged because
they

1. fit into existing conventions/design
2. included robust test coverage (enabled by an advanced test framework and CI)
3. received thoughtful review by other contributors

Features like...

- [`:tchdir`](https://neovim.io/doc/user/editing.html#:tcd)
- unlimited alignment sections in `'statusline'` ([PR #4489](https://github.com/neovim/neovim/pull/4489))
- [TextYankPost](https://neovim.io/doc/user/autocmd.html#TextYankPost)
  event
- [QuickFixLine](https://neovim.io/doc/user/syntax.html#hl-QuickFixLine)
  highlight group
- Improved `man.vim` plugin

These features are available today. They are casually mentioned in [`:help
nvim-features`](https://neovim.io/doc/user/vim_diff.html#nvim-features) :)

Fun without `:smile`?
---------------------

New clients and applications are popping up more frequently than ever.

- Users love [**deoplete**](https://github.com/Shougo/deoplete.nvim), the first
  **non-blocking auto-completion** plugin for vim.
- @rhysd is innovating and exploring new concepts with
  [**NyaoVim**](https://github.com/rhysd/NyaoVim), a thoughtful,
  convention-based, modular design.
  - The [`<neovim-editor>`](https://github.com/rhysd/neovim-component) web
    component can be used in **your own project**, including VS Code, Atom, and
    other electron or nw.js projects!
- @qvacua turned his sights to `nvim`, progressing rapidly on a new `nvim`-based
  backend for his well-known **[VimR](https://github.com/qvacua/vimr)** project,
  a polished GUI frontend for macOS. There are ready-to-go `.app` bundles for
  macOS 10.11 at the [releases](https://github.com/qvacua/vimr/releases) page.
- The cross-platform [**neovim-qt**](https://github.com/equalsraf/neovim-qt) GUI
  continues to get better and better: it is as fast as gVim (or _faster_—try
  it!), with less flicker, and it doesn't depend GTK/KDE.
- [neovim.app](https://github.com/rogual/neovim-dot-app) is the original OS
  X Neovim GUI available via homebrew for macOS 10.9+.
- [nvim-hs](https://github.com/neovimhaskell/nvim-hs) is a Haskell host for
  Neovim plugins. This means you can **write Neovim plugins in Haskell**.
- Keep an eye on [cl-neovim](https://github.com/adolenc/cl-neovim)
  for authoring **lisp plugins**. It also implements `:Lispdo`!
- [nvr](https://github.com/mhinz/neovim-remote) recently published a release
  that provides the legacy Vim "clientserver" command-line options such as
  `--servername`, `--remote`, etc. `nvr` is perfect for **communicating with
  a parent `nvim` instance** from a `:terminal` buffer.
- Intero [users are excited](https://twitter.com/_simonyang/status/753365931896692736) about
  [intero.nvim](https://github.com/myfreeweb/intero.nvim) and
  [intero-neovim](https://github.com/parsonsmatt/intero-neovim)

There are clients for go, julia, perl, Java, R, Elixir, and Clojure.
Go to the [related projects](https://github.com/neovim/neovim/wiki/Related-projects)
wiki page whenever you are curious about new work.

And some long-awaited major features have landed in `nvim` core:

- **Ruby support** landed in 0.1.5. This means you can write Neovim plugins in
  ruby, _and_ the legacy Vim `:ruby`, `:rubydo`, and `:rubyfile` commands are
  supported (so existing Vim+ruby plugins work in Neovim, such as Command-t and
  vim-github-dashboard).
  - To enable Ruby support, just `gem install neovim`. You don't need to worry
    about compiling against a specific version.
- `:CheckHealth` is like homebrew "doctor", conceived by @tweekmonster and
  extended by @tjdevries. We'll continue to add healthchecks to detect and fix
  common problems. Run `:CheckHealth` whenever you upgrade Neovim or install on
  a new system.

Project changes
---------------

> clarity and consistency breed contribution
> — @robertmeta

### Funding: Nikolai Pavlov (ZyX) assumes Thiago's role

The enormously successful
[salt campaign](https://salt.bountysource.com/teams/neovim) has funded
Thiago's work, yielding libmpack, major refactors and improvements. For personal
reasons Thiago will take a less active role in the project, and the 2-3 days of
funded work will now be fulfilled by ZyX, the second-most [prolific](#note2)
committer to Neovim _and Vim_ (~50,000 LOC contributed to Neovim, ~13,000 LOC
contributed to Vim—including `if_python`, Vim's most mature FFI).

ZyX's work on Neovim includes: first-class XDG support, shada, build-time
generators, automated change-aware linter, lua-VimL. He gave careful
attention to internals such as `msgpackparse()`/`msgpackdump()`, `string()`, and
completely re-wrote `json_decode()`/`json_encode()` support (incl. granular
error messages and comprehensive test coverage).


Release strategy
----------------

### 0.1.x releases

In November we announced our first release, `0.1.`. Since then we have
streamlined our release process (versioning, tagging, changelogging,
announcement-making, booty-shaking).

I consider these releases reasonably stable, though we still have some bugs that
we'd rather not have. With `0.2`, Windows will become a first-class target.

Some question the lack of a `1.0` sticker. We follow
[semver](https://semver.org), the recommendations there explain the status that
we want to signal with the `0.x` version designations. We don't want to declare
`1.0` until we have some features like providers, UIs, and the remote API
designed to a spec that we want to commit to supporting for the (very) long
term.

### OS Packages

More OS packages are appearing. Thanks to @jamessan, @fwalch and others for
building packages for their favorite systems and working with us
to address inevitable compiler/platform quirks that come from
supporting dozens of targets.

**Neovim is part of Debian's
[next release](https://packages.debian.org/stretch/neovim).**

Progress
--------

What did we _really_ do?

50,000 (TODO: exact number?) new lines of code have been written. That's 25% of the codebase we
started with.
1000 (TODO:?) _new_ tests (on top of Vim's existing test suite).

Besides the major refactoring and feature work done in the first two years,
a ton of time was put into the Neovim build and CI system. As many devops/SREs
know, this is a major project by itself. An important part of a CI system is to
"lock in" the gains by insisting on green builds and writing meaningful and
robust tests.

Now the work is really starting to pay off. Instead of being
petrified by far-reaching changes, we can welcome feature work large _and
small_. In a stable but fragile C codebase, the tendency is to ignore "small"
features because they may not be popular and the maintainers don't have the
incentive to care for them.

With the Neovim test infrastructure, new features can be tested thoroughly by
**screen tests**. For example, here's a test that exercises Vim's `'wildmode'`
feature:

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

Having built a sophisticated build/CI system, the next "inflection point" of
safe, rapid enhancement is to make the core extensible with Lua. That is why
ZyX's [PR #4411](https://github.com/neovim/neovim/pull/4411) will be the most
important achievement for the project this year.

Each Neovim PR now builds against 12(!) different systems. Thanks to
@jszakmeister, @fwalch and @ZyX-I for maturing the CI pipeline.
Reliable and meaningful CI/automation is central to our
"Move Fast and Don't Break Things™" methodology.

We did break some things though. Many of those regressions have been fixed
thanks to @oni-link's insight, and many others. Two years ago when we forked
Vim, there was an unstable period; that gap has become smaller and smaller. Each
regression fix is covered by integration tests.


(TODO: laundry list of the tons of work we've done in the last 2 years, which
wasn't really addressed by previous newsletters and is obviously unknown to most
people based on reddit conversations)

- `:terminal`
- remote API
- first-class XDG support
- better defaults

### New features

The definitive reference of user-facing features is
[`:help nvim-features`](https://neovim.io/doc/user/vim_diff.html#nvim-features),
but here are some highlights:

- API client for go https://godoc.org/github.com/neovim/go-client/nvim

- buffer-local highlighting (`:help api-highlights`). This is similar to
  matchaddpos() but with some key differences. The added highlights are
  associated with a buffer and adapts to line insertions and deletions, similar
  to signs. It is also possible to manage a set of highlights as a group and
  delete or replace all at once.

  The intended use cases are linter or semantic highlighter plugins that monitor
  a buffer for changes, and in the background compute highlights to the buffer.
- @tjdevries's [first PR](https://github.com/neovim/neovim/pull/4489) added
  unlimited **alignment sections for the statusline**. This means you can
  put `%=` in your `'statusline'` setting the separate sections equally.

- The `TextYankPost` event allows scripts to reliably and easily hook into any
  yank ("text copy") event. This makes it trivial to implement a
  [yank ring](https://github.com/bfredl/nvim-miniyank)—or even send yanks to an
  external service.

- API: externalized popup. [Demo](https://www.youtube.com/watch?v=TI5azVeDUDo)

### Around the corner

- ZyX lua work
- timeyyy extended-marks
- bfredl work
- moar!!!!!!!!!

### Student project: live `:substitute`

The initial idea came out of discussions I had with the students, suggesting
several ideas and getting a feel for their time/effort budget. Eric Burel [wrote
about the
project](https://medium.com/@eric.burel/stop-using-open-source-5cb19baca44d#.4gz835f9y).
Thanks to Eric, the students at ENSIMAG, and @KillTheMule!

This is a feature that can, with some work, be merged back into Vim. Like other
Neovim features adopted by Vim, this feature was **made possible by our
development model**: despite having zero time for taking on a side-project,
I outlined the basic idea, the students made most of the decisions out-of-band,
coming back to us for clarification where needed.

- The students posted a PR which allowed ongoing feedback from several
  contributors. The PR was updated by pushing to the students' project fork,
  which anyone could easily pull, build, and run.
- Tests were written using screen tests (a unique Neovim feature), this allows
  the feature to be checked against coverity/ASan/etc as well as helping
  reviewers visualize the intended behavior by reading the tests instead of
  deciphering [TTY tests](...).
- The automated build system exercised the students' work against 12 different
  systems, without needing to wait for other users and developers to try it out.

Little things matter
--------------------

Defaults really do matter. One of the impressions I most often see on twitter is
the positive experience that people have in starting Neovim and encountering
_less friction_. Tim Pope deserves credit for curating many of the defaults we
chose. @fmoralesc and others put careful thought into implementing these
defaults without causing regressions ('encoding=utf8', syntax/filetype, were the
trickiest ones) or making things worse for users who _don't_ want the new
defaults.

Changing the defaults ended up being a **lot of work**, in order to avoid making
things _worse_ for existing users. But the work is justified: it is a _one-time_
cost that helps new users, old users who just silently suffered, old users on
new systems (which are everywhere these days: VMs, containers, server farms...),
and _all_ users by spreading the Vim ecosystem "best practices".
Insisting on strong defaults spreads knowledge to _all_ users implicitly, and
avoids a lot of wasted time and effort of each user having to re-discover the
baseline "sanity level" of Vim configuration. Culture and ecosystem are
a significant part of the value of a long-lived software project; without good
defaults, that advantage is undermined.

Neovim's reach
--------------

Neovim's ideas are finding their way into other projects.
The coprocess architecture of Neovim [influenced Xi
editor](https://news.ycombinator.com/item?id=11577160).

For the last 7 months Vim has seen a flurry of commits to reach bullet-point
parity with Neovim features (Bram often
[recounts the fate of Elvis](https://groups.google.com/d/msg/vim_dev/IKha1xx6V8Y/tfHDcVcU0Y8J)
as evidence that features are king): job control and `'viminfo'` merging were
major Neovim-like features absorbed by Vim.

Most users consider Neovim's job control to be easier to use than Vim's.
Compare `:help job-control` to `:help channel` and let us know what you think.

Fundraiser goals
----------------

I consider the original fundraiser goals to be met.


EOF
---

There's a beehive of activity at the gitter and IRC channels (which are
bridged together by the [matrix
project](https://github.com/matrix-org/matrix-appservice-gitter) thanks to
@leonerd!) .
[Stop by our hangouts](https://neovim.io/community/) to talk about the project.

And don't forget there's a [roadmap](https://neovim.io/roadmap/) at neovim.io if
you want to check where the project is headed.

Thanks for reading.

—@justinmk

---

##### note1

* A primary goal of Neovim is to be positioned to "piggy-back" on whatever
  editor or IDE "wins".

##### note2

    $ git log --grep='\([zZ]y[xX]\)\|\([nN]ikolai [pP]av\)\|\([nN]ikolay [pP]av\)' --numstat --pretty=tformat: --numstat|gawk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s removed lines: %s total lines: %s\n", add, subs, loc }' -
    added lines: 22590 removed lines: 8620 total lines: 13970

    $ git log --grep='[cC]hristian [bB]rab' --numstat --pretty=tformat: --numstat|gawk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s removed lines: %s total lines: %s\n", add, subs, loc }' -
    added lines: 10000 removed lines: 3033 total lines: 6967
