---
layout: newsletter
title: "Newsletter #1 - A New Hope"
category: newsletter
permalink: /news/2014/june/
---

Welcome to the first newsletter for Neovim, a project that hopes to give a new
beginning to a text editor that we all love.

We asked and the [support was overwhelming][twitter-support]; the community
wanted a newsletter.

The plan is to release a newsletter each month to detail the progress and
anything else newsworthy for the project.

Future newsletters will be released on the first Friday of every month. That
makes the next one scheduled for July 4th.

## Playing Catch Up

Let's take a look at some of the milestones of the months preceding May:

### General News

- March 20: [Neovim.org][neovim.io](now neovim.io) was redesigned and launched.
- March 23: [Fundraiser][fund] on [Bountysource][bountysource] ended with nearly
  $34,000 in backing.
- April 2: Bountysource added the ability to [back a team][neovim-bountysource]
  even when not running a fundraiser.
- April 18: List of [BACKERS.md][backers] was added for those that backed it.
- April 29: [Justin Keyes][justinmk] was added to the Neovim team to [handle
  management][keyes].

### Development News

- Imported source code was cleaned up.
- Legacy system support was removed.
- [CMake][cmake] is now used for building Neovim.
- The C code is now written according to the [C99 standard][c99].
- [Unit tests][unit] have been written for some of the refactored portions of
  the code. Currently there are around 120 tests (more are needed).
- Job control code that was originally proposed to Vim was [improved and
  implemented][job-control] in Neovim.
- A large portion of the [OS specific code][os-specific] has been
  [ported][port-os] to use [libuv][libuv].
- Support was added for making remote procedure calls using the [new msgpack
  API][msgpack-api].
- Abstractions for non-blocking reads/writes were [introduced][streams].
- Some [format strings][format-strings] used weren't portable across
  operating systems. This was addressed in [#296][pr296], [#490][pr490],
  [#574][pr574].
- Progress on the [newly exposed API][new-api] has been made. To try it out,
  check out the *test* [Python client][py-client].

### At 20,000 Feet

You may be wondering, "just how much has changed since it forked from Vim?"
Well, let's look at some Git statistics.

Taking into account the [initial import of Vim][vim-import] which happened
January 31, 2014, there have been 1,010 commits across 77 contributors.

This has resulted in: 887 files changed, 575371 insertions(+), 500868
deletions(-) according to `git diff --stat`.

Using a more sophisticated tool such as [gitinspector][gitinspector], we can see some
more interesting statistics. The entire report of the analysis can be viewed in
[this Gist][stats].

## Recent Development

Now that we have detailed some of the milestones before the month of May
started, we can now look at what has happened in the last month.

### Removal of Default Feature Macros

Neovim has turned on some of the features that were optional in Vim at compile
time. This has led to various `ifdef FEAT_*` macros that are no longer needed.
These macros were [removed][feat_].

### Removal of Built-in Encryption

[Discussion][crypto-discussion] arose regarding Neovim's inherited crypto code.
It was determined that the crypto code should be removed rather than to provide
a possibly insecure implementation. The removal was then [promptly
handled][crypto-removal].

### Nvim Namespace

Due to name collisions with some of Neovim's headers, the source code was [moved
into a 'nvim' namespace][namespace]. It was also determined that `nvim` would be
the internal/technical identifier for the project from that point on.

### Improved Logging

Vim did have some logging in place but effort was made to create a [better
logging utility][logging]. The utility uses macros and can log a standard debug
message, basic info, a warning message or an error. The logging can be turned on
or off depending on if `NDEBUG` or `DISABLE_LOG` is defined.

### Removing Vim Specific Integer Types

There are Vim specific types that are used where standard types would be better
options. The complete information regarding these types can be found in this
[guideline][int-guideline].

So far `short_u`, `int_u`, and `long_i` types have been [removed][pr656].
`long_u` removal is [currently underway][pr757] as well with `char_u` and `long`
types planned for the near future.

### Out of Memory Errors

Rather than check to see if `malloc` returns a `NULL` when there isn't enough
memory for the allocation, a [suite of functions][memory.c] were introduced to
handle these out of memory errors.

The functions take care of error handling if this ever were to happen. The
removal of the checking for out of memory has spanned many issues (and months)
and have been listed in [this issue][oom-errors].

The [last removal][last-oom] of the memory errors has almost been completed.

### Refactor File Functions

A function called `mch_stat()` was used to populate a `struct` that contained
info about a given filename. The struct contained the [`stat`][stat] info
regarding the file.

To increase developer clarity, the code for this was refactored into new
functions defined in [`os/fs.c`][fs.c]. The existing calls to `mch_stat()`
were then [switched over][pr619].

### Coverity Support

[Coverity Scan][coverity] is a service that performs a static analysis on source
code to look for defects and vulnerabilities. It can look at multiple paths
through execution and find issues that might only arise under certain
conditions.

Neovim now has a [Coverity check][coverity-neovim] that runs multiple times a
week in addition to the continuous integration that is used with
[TravisCI][travis].


### API Events

You can now [listen and register for various API events][api-events]. This is
done by using the API channel id when making the request.

In addition to this, a [Wiki page][plugin-arch] has been created to detail the
current look at the plugin architecture. As the top warns, not all the features
have been implemented but take a look at it to learn more.

## Shape of Things to Come

The following is a list of things that are either in progress or on the roadmap.

1. Finish [porting][port-os] the rest of the OS layer to libuv.
2. Continue work on [VimL -> Lua translator][translator] by @ZyX-I.
3. Use [include-what-you-use][iwyu] to clean up headers and includes as
   [discussed][iwyu-issue].
4. Remove the use of temp files when using `system()` and [use pipes
   instead][pipes].
5. Add the functionality of [redraw events][redraw].
6. Add [Travis builds for OS X][travis-osx].

### A Note on the VimL to Lua Translator

There has been some questioning on the motivation for this feature. The
reasoning is that the evaluation of the VimL language is housed in the file
called [`eval.c`][eval.c].

The file currently has 19,164 lines of code. By creating the translator, it
would remove the need for this evaluator. Instead the Lua code could rely on the
newly developed API that would be properly tested.

### First Release

When asked in the [mailing list][mailing] about the progress, Thiago detailed
the list of things that's [necessary for the first official
release][first-release]:

> - Finish implementation of redraw events  <- doing this right now
> - Use the redraw events to implement a new infrastructure for
>   integration tests based on busted/lua.
> - Write a cross-platform GUI program
> - Compatibility layer for old python plugins on top of the python
>   client(except for plugins that use python features introduced in 7.4)
> - Make it compile/run on windows(I dont think this will be hard since
>   a lot of platform-specific stuff already runs on libuv)
>
> If there's a volunteer, I'm going to delegate writing the GUI program after I
> finish implementing redraw events since I'm not very good with designing UIs.

### Donating

If you'd like to help support development, you may donate using Bitcoins here:
`1Evu6wPrzjsjrNPdCYbHy3HT6ry2EzXFyQ` or back the team on the [Neovim
Bountysource][neovim-bountysource] page.

### Contributing

If you an experienced developer or inexperienced but wanting to learn, visit the
GitHub repo and check out the [README][github], [CONTRIBUTING][CONTRIB] guide,
and finally the [Wiki][wiki] to learn more.

There are plenty of opportunities to help out and plenty of things to do.

## That's a Wrap

Do you have any feedback or suggestions regarding this first newsletter? Feel
free to reach out through the [Neovim Twitter][twitter].

Also be sure to subscribe to the [RSS feed][rss] to stay up-to-date on what is
happening in the Neovim world. The next newsletter will be released the first
Friday of July.

Until next time. `:wq`

[fund]: https://www.bountysource.com/teams/neovim/fundraiser
[bountysource]: https://www.bountysource.com/
[backers]: https://github.com/neovim/neovim/blob/master/BACKERS.md
[libuv]: https://github.com/joyent/libuv
[style]: http://neovim.io/development-wiki/style-guide/style-guide.xml
[vim-import]: https://github.com/neovim/neovim/commit/72cf89bce8e4230dbc161dc5606f48ef9884ba70
[crypto-discussion]: https://github.com/neovim/neovim/issues/694
[crypto-removal]: https://github.com/neovim/neovim/pull/699
[gitinspector]: https://code.google.com/p/gitinspector/
[stats]: https://gist.github.com/jdavis/b5dba46bc5ede54bdc4c
[keyes]: https://groups.google.com/forum/#!topic/neovim/R_jXItMXN4E
[justinmk]: https://github.com/justinmk
[os-specific]: https://github.com/neovim/neovim/tree/master/src/nvim/os
[namespace]: https://github.com/neovim/neovim/pull/716
[port-os]: https://github.com/neovim/neovim/issues/133
[translator]: https://github.com/neovim/neovim/pull/243
[iwyu]: https://code.google.com/p/include-what-you-use/
[iwyu-issue]: https://github.com/neovim/neovim/issues/549
[rss]: {{ site.news.feed }}
[twitter]: https://twitter.com/Neovim
[neovim-bountysource]: https://www.bountysource.com/teams/neovim
[logging]: https://github.com/neovim/neovim/pull/644
[memory.c]: https://github.com/neovim/neovim/blob/cab8cf970c09ea465d30e11eb356e2e5d37dc544/src/nvim/memory.c
[oom-errors]: https://github.com/neovim/neovim/issues/488
[last-oom]: https://github.com/neovim/neovim/pull/787
[c99-types]: https://en.wikipedia.org/wiki/Stdint.h#stdint.h
[pr757]: https://github.com/neovim/neovim/pull/757
[pr656]: https://github.com/neovim/neovim/pull/656
[feat_]: https://github.com/neovim/neovim/pull/500
[streams]: https://github.com/neovim/neovim/pull/556
[format-strings]: http://en.wikipedia.org/wiki/Printf_format_string
[pr296]: https://github.com/neovim/neovim/pull/296
[pr490]: https://github.com/neovim/neovim/issues/490
[pr574]: https://github.com/neovim/neovim/issues/574
[twitter-support]: https://twitter.com/Neovim/status/471385995808481280
[new-api]: https://github.com/neovim/neovim/pull/582
[py-client]: https://github.com/neovim/python-client
[1st-bounty]: https://www.bountysource.com/issues/1563162-include-the-vim-breakindent-patch
[job-control]: https://github.com/neovim/neovim/pull/475
[unit]: https://github.com/neovim/neovim/tree/master/test/unit
[c99]: http://en.wikipedia.org/wiki/C99
[cmake]: http://www.cmake.org/
[msgpack-api]: https://github.com/neovim/neovim/pull/509
[stat]: http://en.wikipedia.org/wiki/Stat_(system_call)
[fs.c]: https://github.com/neovim/neovim/blob/master/src/nvim/os/fs.c
[pr619]: https://github.com/neovim/neovim/pull/619
[plugin-arch]: https://github.com/neovim/neovim/wiki/Plugin-UI-architecture
[api-events]: https://github.com/neovim/neovim/pull/762
[pipes]: https://github.com/neovim/neovim/pull/807
[redraw]: https://github.com/neovim/neovim/pull/781
[mailing]: https://groups.google.com/forum/#!forum/neovim
[first-release]: https://groups.google.com/d/msg/neovim/KDgatetthQw/8rn4rdm8z8wJ
[neovim.io]: http://neovim.io/
[eval.c]: https://raw.githubusercontent.com/neovim/neovim/master/src/nvim/eval.c
[coverity-neovim]: https://scan.coverity.com/projects/2227
[coverity]: http://scan.coverity.com/
[travis]: https://travis-ci.org/neovim/neovim
[travis-osx]: https://github.com/neovim/neovim/issues/766
[int-guideline]: https://github.com/neovim/neovim/wiki/Integer-types-refactoring-guidelines
[github]: https://github.com/neovim/neovim/blob/master/README.md
[CONTRIB]: https://github.com/neovim/neovim/blob/master/CONTRIBUTING.md
[wiki]: https://github.com/neovim/neovim/wiki
