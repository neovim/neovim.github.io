---
layout: newsletter
title: "Issue #2 - Perchance to Dream"
category: newsletter
permalink: /news/2014/july/
---

Welcome to the second monthly newsletter for Neovim.

Development has has been steadily progressing. There haven't been any general
news points, so let's jump straight into the development updates to see what has
been happening in the last month.

## Recent Development

### Clarification of Neovim's License

[Concern arose][neovim-license-concern] over Neovim using [Vim's
license][vim-license]. While the Vim license still applies to the original Vim
code, newly written code wasn't explicitly being addressed and could be
relicensed.

The community settled on using [Apache 2.0][apache-license]. The license info
was then [updated][license-update] and all contributors have been asked to sign
a [CLA][cla] by filling out [this document][cla-doc] and adding your name to
[this Wiki page][cla-wiki].

### Compiling under Windows

The ability to build Neovim on Windows has been popular and a [target for
months][windows-months]. The entire discussion can be viewed in [this
issue][windows-master].

[Recent progress][windows-equalsraf] has been made by @equalsraf in his attempt
to build Neovim under [MinGW][mingw].

For help building on other platforms, be sure to check out the newly minted
[Building Neovim page][building] on the Wiki for all things related to
compiling.

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

### Garray Section Here

- https://github.com/neovim/neovim/pull/830

### Implement VimL libcall Section Here

- https://github.com/neovim/neovim/pull/802

### Thiago's Progress Section Here

- https://github.com/neovim/neovim/pull/853
- https://github.com/neovim/neovim/pull/872


#### Note

> This means that if you've contributed code *before* the switch to Apache 2.0,
> your code is still under the old Vim license. It won't become part of Apache 2.0
> *unless* you sign the CLA.

## Shape of Things to Come

News here.

### Donating

If you'd like to help support development, you may donate using Bitcoins here:
`1Evu6wPrzjsjrNPdCYbHy3HT6ry2EzXFyQ` or back the team on the [Neovim
Bountysource][bountysource] page.

### Contributing

If you an experienced developer or inexperienced but wanting to learn, visit the
[GitHub repo][github] and check out the [README][readme],
[CONTRIBUTING][contrib] guide, and finally the [Wiki][wiki] to learn more.

There are plenty of opportunities to help out and plenty of things to do.

## That's a Wrap

Do you have any feedback or suggestions regarding this first newsletter? Feel
free to reach out through the [Neovim Twitter][twitter].

Also be sure to subscribe to the [RSS feed][rss] to stay up-to-date on what is
happening in the Neovim world. The next newsletter will be released the first
Friday of August.

Until next time. `:wq`

[twitter]: https://twitter.com/Neovim
[bountysource]: https://www.bountysource.com/teams/neovim
[rss]: {{ site.news.feed }}
[readme]: https://github.com/neovim/neovim/blob/master/README.md
[contrib]: https://github.com/neovim/neovim/blob/master/CONTRIBUTING.md
[wiki]: https://github.com/neovim/neovim/wiki
[github]: https://github.com/neovim/neovim/
[vim-license]: http://vimdoc.sourceforge.net/htmldoc/uganda.html#license
[neovim-license-concern]: https://github.com/neovim/neovim/issues/878
[apache-license]: https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)
[license-update]: https://github.com/neovim/neovim/pull/883
[cla]: http://en.wikipedia.org/wiki/Contributor_License_Agreement
[cla-wiki]: https://github.com/neovim/neovim/wiki/CLA-confirmation-page
[cla-doc]: https://docs.google.com/forms/d/1u54bpbwzneDIRltFx1TGi2evKxY3w0cOV3vlpj8DPbg/viewform
[mingw]: http://www.mingw.org/
[windows-months]: https://github.com/neovim/neovim/issues/328
[windows-master]: https://github.com/neovim/neovim/issues/696
[windows-equalsraf]: https://github.com/neovim/neovim/pull/810
[building]: https://github.com/neovim/neovim/wiki/Building-Neovim
[string-master]: https://github.com/neovim/neovim/issues/859
[string-strncpy]: https://github.com/neovim/neovim/pull/743
[string-fallout]: https://github.com/neovim/neovim/issues/858
[sds-strings]: https://github.com/antirez/sds
[string-comment]: https://github.com/neovim/neovim/issues/859#issuecomment-46429356