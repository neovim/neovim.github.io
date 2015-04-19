---
layout: newsletter
title: "Newsletter #2 - Perchance to Dream"
category: newsletter
permalink: /news/2014/july/
---

Welcome to the second monthly newsletter for Neovim, the project that dreams to
be the next text editor that we'll all love.

## General News

### Colorscheme Contest

In the discussion about [default Neovim settings][color-defaults], the idea of
having a default colorscheme was brought up. A [later issue][color-discussion]
was started to determine what colorscheme would be used.

It was decided that a new colorscheme would be great for Neovim. To do this, the
Neovim collaborators will create a contest that will allow submissions of
colorschemes. After some time, the submissions will close and then a new Poll
will be started to let the community pick the winner.

The winner(s) will be awarded the prize money and their colorschemes will
forever be enshrined in distributions of Neovim.

Stay tuned to the [Neovim Twitter][info-twitter] for when the submission
guidelines and process are announced.

## Development News

### Clarification of Neovim's License

[Concern arose][license-concern] over Neovim using [Vim's
license][license-vim]. While the Vim license still applies to the original Vim
code, newly written code wasn't explicitly being addressed and could be
relicensed.

The community settled on using [Apache 2.0][license-apache]. The license info
was then [updated][license-update] and all contributors have been asked to sign
a [CLA][license-cla] by filling out [this document][license-cla-doc] and adding
your name to [this Wiki page][license-cla-wiki].

#### Note

> This means that if you've contributed code *before* the switch to Apache 2.0,
> your code is still under the old Vim license. It won't become part of Apache 2.0
> *unless* you sign the CLA.

### Client-side RPC

@tarruda finished [his implementation][client-pr] that provides a
`channel_send_call` function that allows code to be ran in other scripting
engines such as Python, Ruby, and more.

As @tarruda notes, the code runs in another process, blocks until the client
responds, has a 3 second timeout and has a call stack limit of 20.

### Various Fixes and Improvements

@tarruda opened [a pull request][various-pr] that proposed various fixes and
improvements to some of his past work. The changes targeted the jobs API,
streams API and lastly the events API. All of these past features were discussed
in last month's newsletter.

These changes included the ability to send large amounts of data through
streams, added code for [msgpack][various-msgpack] parsing failures, and an
ability to lock onto a set of event sources.

### Compiling under Windows

The ability to build Neovim on Windows has been popular and a [target for
months][windows-months]. The entire discussion can be viewed in [this
issue][windows-master].

[Recent progress][windows-equalsraf] has been made by @equalsraf in his attempt
to build Neovim under [MinGW][windows-mingw].

For help building on other platforms, be sure to check out the newly minted
[Building Neovim page][windows-building] on the Wiki for all things related to
compiling.

### Growable Array Additions

[Garray.c][garray-code] is a data structure from Vim that provides a
"**g**rowable **array**" to the editor. It has been the target of many [pull
requests][garray-issues] in the past.

The [latest addition][garray-append-init] by @philix gives an easier way to
append to the array. While `garray` is still being improved, eventually it will
be phased out by a more robust solution.

### Fixing VimL Libcall

A function called `mch_libcall()` was temporarily removed during some of the
cleanup. It is called in Vim by using the [`libcall()`][libcall-docs] function
and is used by some plugins.

[Discussion started][libcall-discussion] around its temporary removal and how to
re-add it to retain compatibility with Vim. @aktau proposed a solution and then
created a [pull request][libcall-fix] with the new changes which have since been
merged.

### Continued File Function Refactoring

In last month's issue, we talked about the [changes to `mch_stat`
calls][file-previous]. This refactoring was [continued][file-continued] by
@stefan991 to add a new structure that encapsulates `st_dev` and `st_ino` of
[libuv's][file-uv-stat-t] `uv_stat_t`.

### Translations

Contributors to Neovim live in countries all over the world. Many native
speakers have been busy updating the translations in their native languages.

Translations that already have been updated include
[German][translation-german] and [Brazilian Portuguese][translation-pt-br]. With
others like [Spanish][translation-spanish] and [Swedish][translation-swedish] in
the works.

### Doxygen Theme

@stefan991 customized the Doxygen theme to style it similar to how Neovim.io
looks. It was then [added to the codebase][docs-theme] for future builds.

### String Handling

[Effort was made][string-strncpy] to replace `vim_strncpy` with `strlcpy` and
it was merged in successfully. However there was a bit of
[fallout][string-fallout] from the changes.

In response, @aktau created a [master issue][string-master] to collaborate on
the process and discuss the best way forward.

To quote @philix, he summed it up best in [his comment][string-comment]:

> String handling is really important in a text editor and the current codebase
> doesn't have good abstractions for string handling (even though we've been
> slowly improving it). It's a miracle how much can be accomplished with so
> little abstraction (and a lot of low level code).

## Shape of Things to Come

### Documentation on Neovim.io

Neovim's [development documentation][docs-dev] that is autogenerated by Doxygen
is in the process of being [moved to the neovim.io][docs-doxygen] domain.

In addition to that, the user documentation for Neovim is being [moved there as
well][docs-user].

To aid in the process, @Marvim, Neovim's newly appointed resident automaton (aka
bot), will be configured to automate the process. Just don't [talk to him about
life][docs-quotes].

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

Do you have any feedback or suggestions regarding this second newsletter? Feel
free to reach out through the [Neovim Twitter][info-twitter].

Also be sure to subscribe to the [RSS feed][info-rss] to stay up-to-date on what is
happening in the Neovim world. The next newsletter will be released around the
first Friday of August.

Until next time. `:wq`

[docs-dev]: http://neovim.io/doc/dev
[docs-doxygen]: https://github.com/neovim/neovim.github.io/issues/48
[docs-quotes]: http://hitchhikers.wikia.com/wiki/Marvin#Quotes_by_Marvin
[docs-user]: https://github.com/neovim/neovim.github.io/issues/55
[docs-theme]: https://github.com/neovim/neovim/pull/824
[info-bountysource]: https://www.bountysource.com/teams/neovim
[info-contrib]: https://github.com/neovim/neovim/blob/master/CONTRIBUTING.md
[info-github]: https://github.com/neovim/neovim/
[info-readme]: https://github.com/neovim/neovim/blob/master/README.md
[info-rss]: {{ site.news.feed }}
[info-twitter]: https://twitter.com/Neovim
[info-wiki]: https://github.com/neovim/neovim/wiki
[license-apache]: https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)
[license-cla-doc]: https://docs.google.com/forms/d/1u54bpbwzneDIRltFx1TGi2evKxY3w0cOV3vlpj8DPbg/viewform
[license-cla-wiki]: https://github.com/neovim/neovim/wiki/CLA-confirmation-page
[license-cla]: http://en.wikipedia.org/wiki/Contributor_License_Agreement
[license-concern]: https://github.com/neovim/neovim/issues/878
[license-update]: https://github.com/neovim/neovim/pull/883
[license-vim]: http://vimdoc.sourceforge.net/htmldoc/uganda.html#license
[string-comment]: https://github.com/neovim/neovim/issues/859#issuecomment-46429356
[string-fallout]: https://github.com/neovim/neovim/issues/858
[string-master]: https://github.com/neovim/neovim/issues/859
[string-strncpy]: https://github.com/neovim/neovim/pull/743
[translation-german]: https://github.com/neovim/neovim/pull/780
[translation-pt-br]: https://github.com/neovim/neovim/pull/892
[translation-spanish]: https://github.com/neovim/neovim/pull/913
[translation-swedish]: https://github.com/neovim/neovim/pull/913
[windows-building]: https://github.com/neovim/neovim/wiki/Building-Neovim
[windows-equalsraf]: https://github.com/neovim/neovim/pull/810
[windows-master]: https://github.com/neovim/neovim/issues/696
[windows-mingw]: http://www.mingw.org/
[windows-months]: https://github.com/neovim/neovim/issues/328
[garray-code]: https://github.com/neovim/neovim/blob/master/src/nvim/garray.c
[garray-issues]: https://github.com/neovim/neovim/search?q=garray&ref=cmdform&type=Issues
[garray-append-init]: https://github.com/neovim/neovim/pull/830
[color-discussion]: https://github.com/neovim/neovim/issues/793
[color-defaults]: https://github.com/neovim/neovim/issues/276
[file-previous]: https://github.com/neovim/neovim/pull/619
[file-continued]: https://github.com/neovim/neovim/pull/775
[file-uv-stat-t]: https://github.com/joyent/libuv/blob/b9b386ac5a8bf772af95e7238c3f0b6673626923/include/uv.h#L441
[libcall-docs]: http://vimdoc.sourceforge.net/htmldoc/eval.html#libcall()
[libcall-discussion]: https://github.com/neovim/neovim/issues/795
[libcall-fix]: https://github.com/neovim/neovim/pull/802
[client-pr]: https://github.com/neovim/neovim/pull/872
[various-pr]: https://github.com/neovim/neovim/pull/853
[various-msgpack]: http://msgpack.org/
