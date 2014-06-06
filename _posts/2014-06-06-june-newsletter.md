---
layout: post
title: "Issue #1: A New Hope"
category: newsletter
---

Welcome to the first newsletter for Neovim, a project that hopes to give a new
beginning to a text editor that we all love. We plan on releasing a newsletter
each month to detail the progress and anything else newsworthy for the project.

Future newsletters will be released on the first Friday of every month. That
makes the next one scheduled for July 4th.

## Playing Catch Up

Let's take a look at some of the milestones of the months preceding May:

### General News

- March 23: [Fundraiser for Neovim][fund] on [Bountysource][bountysource] ended with
  nearly $34,000.
- April: List of [BACKERS.md][backers] was added.
- April: [Justin Keyes][justinmk] was added to the Neovim team to [handle
  management][keyes].

### Development News

- March: A Neovim [Style Guide][style] was written.
- April: A large portion of the [OS specific code][os-specific] has been
  [ported][port-os] to use [libuv][libuv].
- https://github.com/neovim/neovim/pull/509

### At 20,000 Feet

You may be wondering, "just how much has changed since it forked from Vim?".
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
started, we can now look at what has happened in the last month!

### Removal of Encryption Code

[Discussion][crypto-discussion] arose regarding Neovim's inherited crypto code.
It was determined that the crypto code should be removed rather than to provide
a possibly insecure implementation. The removal was then [promptly
handled][crypto-removal].

## Road Map

> Look at where development will be doing in this upcoming month.

## A Look at the Contributors

> List the active developers.

[fund]: https://www.bountysource.com/teams/neovim/fundraiser
[bountysource]: https://www.bountysource.com/
[backers]: https://github.com/neovim/neovim/blob/master/BACKERS.md
[libuv]: https://github.com/joyent/libuv
[style]: http://neovim.org/development-wiki/style-guide/style-guide.xml
[vim-import]: https://github.com/neovim/neovim/commit/72cf89bce8e4230dbc161dc5606f48ef9884ba70
[crypto-discussion]: https://github.com/neovim/neovim/issues/694
[crypto-removal]: https://github.com/neovim/neovim/pull/699
