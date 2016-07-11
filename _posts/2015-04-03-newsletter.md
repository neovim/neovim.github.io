---
layout: newsletter
title: "Newsletter #5 - Out of the Box"
category: newsletter
permalink: /news/2015/april/
---

> Outstanding communication and handling of bugs from Neovim. Exemplary FOSS
> project in my experience so far.
> <a href="https://twitter.com/telemachus/status/568918223745372160"><small>&#64;telemachus</small></a>

Welcome to the fifth newsletter for Neovim, the project that looks to become Vim
[out of the box][info-box].

## General News

### Gitter.im for Neovim

Now in addition to the [mailing list][gitter-list] and IRC channel, you can hop
into the [Neovim chat room][gitter-nvim] provided through
[Gitter.im][gitter-link]. It has a convenient web interface but also allows you
to connect using your [favorite IRC client][gitter-irc].

### Black Duck 2014 Open Source Rookie

[Black Duck][blackduck-site], a company that helps other corporations in the
adoption of open source software, chose Neovim as one of the projects to feature
this past year. The company annually recognizes some of the top new open source
projects that started during the year.

### ICCF Holland Donations

As mentioned in the last newsletter, [Unixstickers][iccf-unixstickers] has added
[Neovim stickers][iccf-stickers] to their inventory. Every sticker that is
bought increases the amount donated to [ICCF Holland][iccf-site], Bram
Moolenaar's charity.

Since they've been added, USD 106 has been raised which Unixstickers [just
donated][iccf-tweet] on March 24th.

### Related Projects

The [Neovim Wiki][related-main-wiki] contains a page titled [Related
projects][related-wiki] that contains a list of current GUI projects, API
clients, plugins that take advantage of Neovim features, and projects with
direct support for Neovim.

Some of the projects might be experimental which means there might be bugs and
the projects might still be in progress.

Do you know of another project that can be listed? Don't be afraid to add a link
yourself!

## Development News

### Terminal UI (TUI)

@tarruda has merged his [pull request][tui-pr] to reimplement the terminal user
interface using [libtermkey][tui-libtermkey] and [unibilium][tui-unibilium].

Libtermkey is a library by @leonerd that "allows easy processing of keyboard
entry from terminal-based programs." It has the ability to handle special keys,
[UTF-8 combining][tui-combining] and more.

Unibilium is a library by @mauke that interfaces with [terminfo][tui-terminfo].
Terminfo is a library and database that makes it easy to interface with display
terminals without worrying about device specific details. More details can be
found on the man page for terminfo by running: [`man 5 terminfo`][tui-manpage].

Although the TUI implementation is included as part of Neovim, it is
architecturally decoupled from the editor core: it uses the same API as external
clients and GUIs.

#### Additional Keybindings

As a result of using libtermkey, Neovim can now bind [meta keys][tui-meta] and
`Ctrl-Shift` combinations both of which weren't previously possible in the
terminal. Be sure to [read more][tui-bindings] about the updated binding
capabilities for additional examples and possibilities.

### Builtin Terminal Emulation

@tarruda has finished [his pull request][term-pr] adding a new `:terminal`
command which when ran launches a full terminal emulator. The terminal is using
Neovim's native buffers and windows which means the user can enter [normal
mode][term-normal] by pressing `<C-\><C-n>`.

This is meant to replace and provide more capabilities than the already existing
Vim command, [`:shell`][term-shell], which has been removed from Neovim. More
explanation on the decision of this feature can be found in [this
comment][term-comment] made by @tarruda.

The complete documentation for this feature can be found under [`:help
nvim-terminal-emulator`][term-docs].

This feature is implemented using another of @leonerd's projects called
[libvterm][term-libvterm].

### True Colors

With the changes to the TUI described above, this allowed @tarruda to
make a [pull request][color-pr] to add true colors to supporting terminals.

A more detailed explanation of what true colors means as well as terminals that
support it can be found in [this Gist][color-info] that was written by @XVilka.

To enable true color support, set the environment variable
`NVIM_TUI_ENABLE_TRUE_COLOR`.

### Windows Build

The progress of building Neovim on Windows was first detailed in the [July
2014][windows-july] newsletter.

In a huge milestone, @equalsraf has been able to build Neovim on Windows and
also has [a build][windows-build] on [AppVeyor][windows-app], a continuous
delivery service specifically for Windows.

@equalsraf has provided [detailed notes][windows-notes] on the requirements,
building the dependencies/Neovim, and known errors.

Going forward, @equalsraf is still working on his main [pull
request][windows-pr] while @justinmk has started a [new issue][windows-issue]
for collecting requirements and discussion.

### Special Interfaces Cleaning

Vim has a number of ways to start it through its many aliases. The complete list
can be found under the [starting section][in-starting] in Vim's documentation.

@Pyrohh opened [an issue][in-discussion] to discuss the removal of such
aliases. All of the aliases had corresponding flags that could be used instead.

After some discussion it was decided to remove the lesser used ones. @Pyrohh
then made a [pull request][in-pr] to remove the following:

- [`ex`][in-ex]: Ex mode.
- [`exim`][in-exim]: "Improved" Ex mode.
- [`view`][in-view]: Read-only mode.
- [`gvim`][in-gvim]: Using the GUI.
- [`gex`][in-gex]: GUI and in Ex mode.
- [`gview`][in-gview]: GUI and in read-only mode.
- [`rvim`][in-rvim]: Restricted mode.
- [`rview`][in-rview]: Read-only and in restricted mode.
- [`rgvim`][in-rgvim]: GUI and in restricted mode.
- [`rgview`][in-rgview]: GUI, read-only, and in restricted mode.

In addition, @Pyrohh made another [pull request][in-vimdiff-pr] to merge
[`vimdiff`][in-vimdiff] and `vim -d`.

#### Removal of "Easy Mode"

@fmoralesc also opened a [pull request][easy-pr] to remove `evim`. Which given
by [the docs][easy-vimdoc] says it starts in insert mode which allows it to act
like a normal editor.

Even with removing of the feature, emulating it is still possible by using the
underlying [`'insertmode'`][easy-insert] option that easy mode leveraged.

### State of the GUI

The graphical side of Neovim has been seeing some changes in addition to the
terminal interface in one of the above section.

Since the last newsletter, the following projects in no particular order have
been created:

- [SolidOak][gui-oak] by @oakes: "a simple IDE for Rust" that embeds Neovim to
  provide text editing functionality. Visit the [website][gui-oak-site] for the
  IDE for more details and binaries.
- [Neovim.app][gui-app] by @rogual: an OS X friendly editor with mouse support,
  tabs, clipboards, and more.
- [vim-mode][gui-vim-mode] by @carlosdcastillo: an in progress Atom package that
  uses Neovim for binding and manipulating text. Take a look at [this
  video][gui-vim-mode-video] to see it.
- [python-client][gui-python] by @tarruda: which in addition to being a Python
  library for communicating with Neovim, also contains an interface using
  [GTK][gui-python-gtk].
- [neovim.as][gui-atom] by @coolwanglu: an application that uses [Atom
  Shell][gui-atom-shell]. A video of it in action can be [seen
  here][gui-atom-video].

### New Tab Events

Three new [autocommand][events-autocmd] events have been added by @fmoralesc in
[this pull request][events-pr]. An [autocommand event][events-list] is a way to
execute something in response to a particular event. Events are particularly
useful in plugins.

The new events are: [`TabNew`][events-tabnew],
[`TabNewEntered`][events-tabnewentered], and [`TabClosed`][events-tabclosed].

### Major Change to Improve Job API

@tarruda is continuing to refine the new job API. His work has continued in
[this latest pull request][job-pr]. This might be a breaking change for existing
plugins that use the existing job API.

This improvement is to make use of function callbacks (for input, output events)
instead of the previous way of using [autocommands][job-autocmd] for responding
to events.

In addition to that, there are more job control functions in VimL including
[`jobwait()`][job-wait] and [`jobclose()`][job-close].

### So Long `long_u`

In an epic crusade against Vim specific integer types that has spanned two
previous newsletters (June and November), @elmart has finished removing the
integer type `long_u`. @elmart's changes were broken up into three last pull
requests ([1][long-1], [2][long-2], [3][long-3]).

This is a step towards
@tarruda's goal to [remove all project specific types][long-types]. All that
remains is `char_u` in which there are ~12,300 occurrences currently in use.

### Adding a EndOfBuffer Highlight Group

@mhinz wanted a way to [remove ~ after the file ends][highlight-idea]. He
proposed a new [`:highlight`][highlight-docs] group, called
[`EndOfBuffer`][highlight-endofbuffer], to go with the current [list of
groups][highlight-groups].

His [proposal][highlight-proposal] was first sent as a patch to
[vim-dev][highlight-vim-dev] where his changes were accepted by Bram and should
make it into Vim in the future. @mhinz let @fmoralesc prepare the [pull
request][highlight-pr] to bring in the changes to Neovim. The pull request has
since been merged into the master branch.

### Garbage Collection Performance

When using Vim with plugins that allocate a large number of objects there are
times when the garbage collection will kick in and cause Vim to hang due to the
time spent looking for objects to free.

This issue was [posted][gc-original] to [vim\_dev][gc-vim-dev] by Yasuhiro
Matsumoto. A [patch][gc-patch] as written by Ariya Mizutani and proposed to the
mailing list which improves the algorithm for looking through the objects. In
Yasuhiro's test case, it took unpatched Vim 100 seconds to execute but took just
0.134 seconds when the patch was applied.

An [issue][gc-issue] by @Shougo was created to discuss this patch being applied
to Neovim. @oni-link then created a [pull request][gc-pr] to apply the patch
which was merged shortly after.

### Vimexpect and Example GDB Plugin

@tarruda created a small Vimscript library in a [pull request][expect-pr] that
mimics Tcl's [Expect][expect-wiki] for Neovim.

The purpose of Expect (in Tcl) is to make it easy to script and automate text
based applications that don't provide that functionality.

@tarruda provided an example [plugin for GDB][expect-gdb] as a proof of concept.
The plugin was created to make it easier to develop Neovim and show the
vimexpect possibilities.

### Options Updates

#### Removal of `compatible`

Vim has a [`compatible`][options-cp-docs] option which lets Vim be more
compatible with Vi. It can also be started by running `vim -C`.

In December, @klusark made a [pull request][options-cp-pr] to change
`nocompatible`, which turns on no compatibility mode with Vi, to always be set.

This means that `set nocompatible` and the flag [`-N`][options-cp-n] are
non-operations. This also means that since there isn't a compatible mode, if
you run `set compatible` it will give an error.

#### Removal of `edcompatible`

An [issue][options-ed-issue] was created to discuss the removal of the
[`edcompatible`][options-ed-docs] option. Turning on this feature gives special
behavior for the `g` and `c` flags for the [`:substitute`][options-ed-s]
command. Vim's documentation actually discourage the use of this option.

@Pyrohh created a [pull request][options-ed-pr] to remove the feature and it was
merged into the master branch.

#### Removal of `ttyfast`

Vim has an option called [`ttyfast`][options-tty-docs] which is set if there
exists a "fast terminal connection". When set, it will send more characters to
be drawn instead of using insert/delete line commands.

[Discussion][options-tty-talk] started and it was agreed that the option should
be set as the default back in August. Shortly after, @fornwall created a [pull
request][options-tty-pr] to make it the default.

After a few months of it being the default and no issues arising, @Pyrohh
created a [pull request][options-tty-pr2] to remove it completely.

#### Simpler Handling of Always-on/Always-off Options

Since the following three options were removed and more might follow, @fwalch
created a [pull request][options-always-pr] to simplify how these
always-on/always-off options are handled.

### Upstream Vim Patches

Neovim continues to merge in the upstream Vim patches that are submitted to the
Vim mailing list.

Since the last newsletter, more than [60 pull requests][patch-search] worth of
patches have been submitted to Neovim. The current status of all the patches can
be found on the [Vim patch report][patch-report].

## Helping Out

### Donating

If you'd like to help support development, you may donate using Bitcoins here:
`1Evu6wPrzjsjrNPdCYbHy3HT6ry2EzXFyQ` or back the team on the [Neovim
Bountysource][info-bountysource] page.

### Contributing

If you are an experienced developer or inexperienced but wanting to learn, visit
the [GitHub repo][info-github] and check out the [README][info-readme],
[CONTRIBUTING][info-contrib] guide, and finally the [Wiki][info-wiki] to learn
more.

There are plenty of opportunities to help out and plenty of things to do.

## That's a Wrap

Do you have any feedback or suggestions regarding this newsletter? Feel free to
reach out through the [Neovim Twitter][info-twitter].

This newsletter cannot cover all of the contributions and support of the
community. Thanks to all of the other contributors that have helped in some way
during the months since the last newsletter.

Be sure to subscribe to the [RSS feed][info-rss] to stay up-to-date on what
is happening in the Neovim world. The next newsletter will be released in
a few months time.

Until next time. `:wq`

[info-bountysource]: https://www.bountysource.com/teams/neovim
[info-contrib]: https://github.com/neovim/neovim/blob/master/CONTRIBUTING.md
[info-github]: https://github.com/neovim/neovim/
[info-readme]: https://github.com/neovim/neovim/blob/master/README.md
[info-rss]: {{ site.news.feed }}
[info-twitter]: https://twitter.com/Neovim
[info-wiki]: https://github.com/neovim/neovim/wiki
[info-box]: http://en.wikipedia.org/wiki/Out_of_the_box_feature

[iccf-site]: http://iccf-holland.org/
[iccf-unixstickers]: http://www.unixstickers.com/
[iccf-stickers]: http://www.unixstickers.com/tag/neovim
[iccf-tweet]: https://twitter.com/unixstickers/status/580318671341559808

[blackduck-site]: https://www.blackducksoftware.com/
[blackduck-article]: https://www.blackducksoftware.com/open-source-rookies

[tui-pr]: https://github.com/neovim/neovim/pull/1820
[tui-libtermkey]: http://www.leonerd.org.uk/code/libtermkey/
[tui-unibilium]: https://github.com/mauke/unibilium
[tui-bindings]: http://neovim.io/doc/user/vim_diff.html#nvim-features
[tui-combining]: http://en.wikipedia.org/wiki/Combining_character
[tui-terminfo]: http://en.wikipedia.org/wiki/Terminfo
[tui-manpage]: http://manpages.debian.org/cgi-bin/man.cgi?query=terminfo&sektion=5
[tui-meta]: http://en.wikipedia.org/wiki/Meta_key

[term-pr]: https://github.com/neovim/neovim/pull/2076
[term-libvterm]: http://www.leonerd.org.uk/code/libvterm/
[term-normal]: http://neovim.io/doc/user/intro.html#Normal
[term-comment]: https://github.com/neovim/neovim/pull/2076#issuecomment-85979869
[term-docs]: http://neovim.io/doc/user/nvim_terminal_emulator.html
[term-shell]: http://vimdoc.sourceforge.net/htmldoc/various.html#:shell

[easy-pr]: https://github.com/neovim/neovim/pull/1656
[easy-vimdoc]: http://vimdoc.sourceforge.net/htmldoc/starting.html#-y
[easy-insert]: http://neovim.io/doc/user/options.html#'insertmode'

[color-pr]: https://github.com/neovim/neovim/pull/2198
[color-info]: https://gist.github.com/XVilka/8346728

[job-pr]: https://github.com/neovim/neovim/pull/2247
[job-wait]: http://neovim.io/doc/user/eval.html#jobwait()
[job-close]: http://neovim.io/doc/user/eval.html#jobclose()
[job-autocmd]: http://neovim.io/doc/user/autocmd.html#autocmd-intro

[events-pr]: https://github.com/neovim/neovim/pull/1717
[events-autocmd]: http://neovim.io/doc/user/autocmd.html#autocmd-intro
[events-list]: http://neovim.io/doc/user/autocmd.html#autocmd-events
[events-tabnew]: http://neovim.io/doc/user/autocmd.html#TabNew
[events-tabnewentered]: http://neovim.io/doc/user/autocmd.html#TabNewEntered
[events-tabclosed]: http://neovim.io/doc/user/autocmd.html#TabClosed

[in-vimdiff-pr]: https://github.com/neovim/neovim/pull/1849
[in-vimdiff]: http://vimdoc.sourceforge.net/htmldoc/diff.html#vimdiff

[long-1]: https://github.com/neovim/neovim/pull/1715
[long-2]: https://github.com/neovim/neovim/pull/1788
[long-3]: https://github.com/neovim/neovim/pull/1812
[long-types]: https://github.com/neovim/neovim/issues/459

[highlight-pr]: https://github.com/neovim/neovim/pull/1926
[highlight-idea]: https://github.com/neovim/neovim/pull/1214
[highlight-docs]: http://neovim.io/doc/user/syntax.html#:highlight
[highlight-groups]: http://neovim.io/doc/user/syntax.html#highlight-groups
[highlight-endofbuffer]: http://neovim.io/doc/user/syntax.html#hl-EndOfBuffer
[highlight-proposal]: https://groups.google.com/forum/#!topic/vim_dev/p3de1iU1GXI/discussion
[highlight-vim-dev]: https://groups.google.com/forum/#!forum/vim_dev

[related-wiki]: https://github.com/neovim/neovim/wiki/Related-projects
[related-main-wiki]: https://github.com/neovim/neovim/wiki

[patch-search]: https://github.com/neovim/neovim/pulls?utf8=%E2%9C%93&q=vim-patch+in%3Atitle+created%3A%222014-11-25+..+2015-04-02%22+
[patch-report]: http://neovim.io/doc/reports/vimpatch/

[gui-list]: https://github.com/neovim/neovim/wiki/Related-projects#gui-projects
[gui-oak]: https://github.com/oakes/SolidOak
[gui-oak-site]: https://sekao.net/solidoak/
[gui-app]: https://github.com/rogual/neovim-dot-app
[gui-vim-mode]: https://github.com/carlosdcastillo/vim-mode
[gui-vim-mode-video]: https://www.youtube.com/watch?v=7TVBcdONEJo
[gui-python]: https://github.com/neovim/python-client
[gui-python-gtk]: http://www.gtk.org/
[gui-atom]: https://github.com/coolwanglu/neovim.as
[gui-atom-video]: https://www.youtube.com/watch?v=zgNJnBKMRNw
[gui-atom-shell]: https://github.com/atom/atom-shell

[in-pr]: https://github.com/neovim/neovim/pull/2008
[in-discussion]: https://github.com/neovim/neovim/issues/1646
[in-starting]: http://vimdoc.sourceforge.net/htmldoc/starting.html#ex
[in-ex]: http://vimdoc.sourceforge.net/htmldoc/starting.html#ex
[in-exim]: http://vimdoc.sourceforge.net/htmldoc/starting.html#exim
[in-view]: http://vimdoc.sourceforge.net/htmldoc/starting.html#view
[in-gvim]: http://vimdoc.sourceforge.net/htmldoc/starting.html#gvim
[in-gex]: http://vimdoc.sourceforge.net/htmldoc/starting.html#gex
[in-gview]: http://vimdoc.sourceforge.net/htmldoc/starting.html#gview
[in-rvim]: http://vimdoc.sourceforge.net/htmldoc/starting.html#rvim
[in-rview]: http://vimdoc.sourceforge.net/htmldoc/starting.html#rview
[in-rgvim]: http://vimdoc.sourceforge.net/htmldoc/starting.html#rgvim
[in-rgview]: http://vimdoc.sourceforge.net/htmldoc/starting.html#rgview

[gc-original]: https://groups.google.com/forum/#!searchin/vim_dev/GC/vim_dev/DBYOdHQWvqY/1WH04_dwETIJ
[gc-vim-dev]: https://groups.google.com/forum/#!forum/vim_dev
[gc-patch]: https://gist.github.com/mattn/0c58a7398c63ab4c3066
[gc-issue]: https://github.com/neovim/neovim/issues/1687
[gc-pr]: https://github.com/neovim/neovim/pull/1761

[gitter-list]: https://groups.google.com/forum/#!forum/neovim
[gitter-nvim]: https://gitter.im/neovim/neovim
[gitter-link]: https://gitter.im/
[gitter-irc]: https://irc.gitter.im/

[expect-pr]: https://github.com/neovim/neovim/pull/2314
[expect-wiki]: http://en.wikipedia.org/wiki/Expect
[expect-gdb]: https://github.com/neovim/neovim/blob/617878f7473a9f2980df2627601c38fd9f5029ca/contrib/neovim_gdb/neovim_gdb.vim

[options-cp-docs]: http://vimdoc.sourceforge.net/htmldoc/options.html#'compatible'
[options-cp-pr]: https://github.com/neovim/neovim/pull/1622
[options-cp-n]: http://vimdoc.sourceforge.net/htmldoc/starting.html#-N

[options-ed-issue]: https://github.com/neovim/neovim/issues/1902
[options-ed-docs]: http://vimdoc.sourceforge.net/htmldoc/options.html#'edcompatible'
[options-ed-s]: http://vimdoc.sourceforge.net/htmldoc/change.html#:substitute
[options-ed-pr]:  https://github.com/neovim/neovim/pull/1911

[options-tty-docs]: http://vimdoc.sourceforge.net/htmldoc/options.html#'ttyfast'
[options-tty-talk]: https://github.com/neovim/neovim/pull/1015#issuecomment-50975716
[options-tty-pr]: https://github.com/neovim/neovim/pull/1051
[options-tty-pr2]: https://github.com/neovim/neovim/pull/1945

[options-always-pr]: https://github.com/neovim/neovim/pull/2002

[windows-july]: /news/2014/july/
[windows-build]: https://ci.appveyor.com/project/equalsraf/neovim
[windows-app]: http://www.appveyor.com/
[windows-notes]: https://gist.github.com/equalsraf/4685f7aef022a36c26d5
[windows-pr]: https://github.com/neovim/neovim/pull/810
[windows-issue]: https://github.com/neovim/neovim/issues/1749
