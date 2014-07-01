---
layout: newsletter
title: "Issue #2 - TODO"
category: newsletter
permalink: /news/2014/july/
---

### General News

- News here.

## Recent Development

### Clarification of Neovim's License

[Concern arose][neovim-license-concern] over Neovim using [Vim's
license][vim-license]. While the Vim license still applies to the original Vim
code, newly written code wasn't explicitly being addressed and could be
relicensed.

The community settled on using [Apache 2.0][apache-license]. The license info
was then [updated][license-update] and all contributors have been asked to sign
a [CLA][cla].

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
