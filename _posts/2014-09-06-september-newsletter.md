---
layout: newsletter
title: "Newsletter #3 - Better Late than Never"
category: newsletter
permalink: /news/2014/sept/
---

Welcome to the third (and delayed) newsletter for Neovim, the project that aims
to overhaul the Vim codebase.

The next newsletter will be coming out near the beginning of November. It has
changed to be [every other month][every-other-month] as to not overload any
sensitive Neovim lovers with too much staggering awe.

## General News

### Over 1,000 Issues

The Issue tracker on GitHub now has over 1,000 issues/pull requests. The lucky
[1000th pull request][issues-1000th] was opened shortly before August.

### Documentation Update

As mentioned in last July's newsletter, the documentation has successfully been
moved to [neovim.io/doc/][docs-home].

It features some general documenation links as well as some more specific
reports directed towards developers and contributors. These reports have already
[helped developers][docs-help] contribute and improve the codebase.

## Development News

In no particular order, here are the top stories in the last two months.

### Implementing `system()` with Pipes

This issue was mentioned in the [June newsletter][newsletters-june] on things
that were yet to come.

@aktau has [finished implementing][pipes-pr] the VimL `system()` function to use
pipes and the job system instead of redirecting to temporary files. The change
provides a nice speed boost and avoids some permission issues (mainly affecting
Windows, which is not supported yet).

The slowness of the old implementation of `system()` was especially noticeable
when the called process had large output. An example of this is: `system('cat
largefile')`.

#### Note

> There has been one bug report concerning the new `system()` code: it doesn't
> work well with the [Selecta][pipes-selecta] plugin as described
> [here][pipes-bug].

### More Precise Profiling

@aktau leveraged [libuv's][info-libuv] ability to provide a high resolution
clock on many systems to improve Neovim's profiling capability with [this pull
request][profile-pr].

The previous implementation was using `gettimeofday()`. This was a blocker in
getting Neovim to run on Windows (as detailed in the previous section) as this
function wasn't supported in Windows.

For more info on profiling in Vim, just run `:help profiling`.

### Dropping of MoonScript

During the start of of the project, the [MoonScript vs Lua
debate][moonscript-lua] was a widely discussed one.

[MoonScript][moonscript-site] (a language that compiles to Lua) was chosen to be
the language for unit tests. After updating the unit test library,
[Busted][moonscript-busted], some unit tests [were failing][moonscript-failing].

Thus it was [decided][moonscript-decision] to drop the dependency to simplify
the tests and remove a layer of abstraction. @tarruda made the [accompanying
changes and pull request][moonscript-drop].

### Msgpack RPC

[Discussion arose][msgpack-discussion] regarding how Neovim wasn't fully
compliant with the [specification of msgpack-rpc][msgpack-spec].

In the last few weeks, @tarruda has [completed the
implementation][msgpack-compliance] to fully support the specification.

He also has been working on [upgrading][msgpack-2.0] the use of msgpack to the
latest version, 2.0, which should be merged soon.

### Python Client

In the first newsletter, a [Python client][python-client] was first discussed.
Since then, @tarruda has [refactored it][python-refactor] for various
improvements.

### Go Client

@myitcv has made a [proposal for adding Go integration][go-integration] in a
similar way that the Python integration works. The proposal also touches on
being language agnostic.

Although too copious to detail here, the link above also includes more details
on implementation and discussion regarding that.

### More Code Removal

More code that was either dead or for unsupported legacy systems was removed in
two different pull requests ([1][removal-pr1], [2][removal-pr2]).

The systems that still had code lingering included [SGI IRIS][removal-sgi],
[BeOS][removal-beos], and [EBCDIC][removal-ebcdic].

### Cross Platform Temporary Filenames

The function to create temporary files in Neovim needed features that weren't in
[libuv][info-libuv].

@Hinidu, one of Neovim's contributors, [sent a pull request][temp-libuv-pr] to
libuv to add a new function, `uv_fs_mkdtemp`. The changes (now part of libuv
[version 0.11.27][temp-version]) are being [used by Neovim][temp-pr] to provide
temporary file/directory creation and the changes work across platforms.

Because the cross-plaform code has been contributed to libuv, all libuv-based
projects can benefit from the changes.

### First Bounty Claimed!

Back on April 9th, the [first bounty][bounty-first] on [Neovim's
Bountysource][info-bountysource] was created. The request was to port an existing
patch that was written by Christian Brabandt from Vim to Neovim. The patch gives
a `breakindent` option that will match the indentation when a line is wrapped.

@fmoralesc created a [pull request][bounty-pr] to claim the bounty. A bit of
discussion took place and some revisions were made. Since then they have been
merged into the master branch and @fmoralesc has been awarded the bounty!

### More Unit Tests

@war1025 has [added unit tests][tests-pr] for two existing files:
[buffer.c][tests-buffer] and [fileio.c][tests-fileio]. Adding more unit test
coverage to the code as it is refactored is part of the goal of Neovim.

### Core Service Providers

@tarruda made a [pull request][core-pr] that is exposing some of Neovim's core
functionality through the msgpack API.

While still volatile as it evolves, this core functionality includes:

- [Support functions for external interpreters][core-external]
- [Accessing/changing the clipboard registers][core-clipboard]
- [More Python support][core-python]


### Embeddability Progress

@tarruda has [added a `--embedded-mode`][embed-pr] flag which will allow another
program to start Neovim in the background and use it as a headless instance.

Technically, it uses [msgpack-rpc][embed-msgpack] to talk with the client using
stdin and stdout.

### Windows Progress

Neovim has successfully been compiled in [Microsoft Visual C++][windows-msvc] as
well as using [MinGW][windows-mingw], in [this issue][windows-master] and [this
one][windows-mingw-issue] respectively.

## Helping Out

### Donating

If you'd like to help support development, you may donate using Bitcoins here:
`1Evu6wPrzjsjrNPdCYbHy3HT6ry2EzXFyQ` or back the team on the [Neovim
Bountysource][info-bountysource] page.

### Contributing

If you an experienced developer or inexperienced but wanting to learn, visit the
[GitHub repo][info-github] and check out the [README][info-readme],
[CONTRIBUTING][info-contrib] guide, and finally the [Wiki][info-wiki] to learn
more.

There are plenty of opportunities to help out and plenty of things to do.

## That's a Wrap

Do you have any feedback or suggestions regarding this third newsletter? Feel
free to reach out through the [Neovim Twitter][info-twitter].

Also be sure to subscribe to the [RSS feed][info-rss] to stay up-to-date on what is
happening in the Neovim world. The next newsletter will be released in two
months near the beginning of November.

Until next time. `:wq`

[info-bountysource]: https://www.bountysource.com/teams/neovim
[info-contrib]: https://github.com/neovim/neovim/blob/master/CONTRIBUTING.md
[info-github]: https://github.com/neovim/neovim/
[info-readme]: https://github.com/neovim/neovim/blob/master/README.md
[info-rss]: {{ site.news.feed }}
[info-twitter]: https://twitter.com/Neovim
[info-wiki]: https://github.com/neovim/neovim/wiki
[info-libuv]: https://github.com/joyent/libuv
[issues-1000th]: https://github.com/neovim/neovim/pull/1000
[docs-home]: http://neovim.io/doc/
[docs-help]: https://github.com/neovim/neovim/pull/985
[pipes-pr]: https://github.com/neovim/neovim/pull/978
[pipes-selecta]: https://github.com/garybernhardt/selecta
[pipes-bug]: https://github.com/neovim/neovim/issues/1044
[newsletters-june]: http://neovim.io/news/2014/june/
[windows-master]: https://github.com/neovim/neovim/issues/696
[windows-mingw-issue]: https://github.com/neovim/neovim/pull/810
[windows-msvc]: http://msdn.microsoft.com/en-us/vstudio/hh386302.aspx
[windows-mingw]: http://www.mingw.org/
[moonscript-drop]: https://github.com/neovim/neovim/pull/1128
[moonscript-lua]: https://github.com/neovim/neovim/issues/207
[moonscript-busted]: https://github.com/Olivine-Labs/busted
[moonscript-decision]: https://github.com/neovim/neovim/pull/1098
[moonscript-failing]: https://github.com/neovim/neovim/pull/1098#issuecomment-53942512
[moonscript-site]: http://moonscript.org/
[embed-msgpack]: https://github.com/msgpack-rpc/msgpack-rpc
[embed-pr]: https://github.com/neovim/neovim/pull/1060
[msgpack-2.0]: https://github.com/neovim/neovim/pull/1130
[msgpack-compliance]: https://github.com/neovim/neovim/pull/1121
[msgpack-spec]: https://github.com/msgpack-rpc/msgpack-rpc/blob/master/spec.md
[msgpack-discussion]: https://github.com/neovim/neovim/issues/1118
[go-integration]: https://github.com/neovim/neovim/issues/1136
[python-client]: https://github.com/neovim/python-client
[python-refactor]: https://github.com/neovim/python-client/pull/17
[profile-pr]: https://github.com/neovim/neovim/pull/839
[removal-sgi]: http://en.wikipedia.org/wiki/SGI_IRIS
[removal-beos]: http://en.wikipedia.org/wiki/BeOS
[removal-ebcdic]: http://en.wikipedia.org/wiki/EBCDIC
[removal-pr1]: https://github.com/neovim/neovim/pull/814
[removal-pr2]: https://github.com/neovim/neovim/pull/1006
[temp-windows]: https://github.com/neovim/neovim/issues/812
[temp-libuv-pr]: https://github.com/joyent/libuv/pull/1368
[temp-version]: https://github.com/joyent/libuv/commit/ffe24f955032d060968ea0289af365006afed55e
[temp-pr]: https://github.com/neovim/neovim/pull/1034
[tests-pr]: https://github.com/neovim/neovim/pull/904
[tests-buffer]: https://github.com/neovim/neovim/blob/master/src/nvim/buffer.c
[tests-fileio]: https://github.com/neovim/neovim/blob/master/src/nvim/fileio.c
[every-other-month]: https://twitter.com/Neovim/status/504448350221901824
[core-pr]: https://github.com/neovim/neovim/pull/895
[core-external]: https://github.com/tarruda/neovim/commit/8a091e7f5c58a27fb3af1de76284430e812c95b5
[core-clipboard]: https://github.com/tarruda/neovim/commit/fba1d3b50f34a4e755bee8fa5dcc192efef202d8
[core-python]: https://github.com/tarruda/neovim/commit/486c8e37c17e4aa89fa9ef7e0c682b659a5a8a82
[bounty-first]: https://github.com/neovim/neovim/issues/501
[bounty-pr]: https://github.com/neovim/neovim/pull/691
[bounty-patch]: https://retracile.net/wiki/VimBreakIndent
