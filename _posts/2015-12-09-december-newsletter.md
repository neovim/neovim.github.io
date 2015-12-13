---
layout: newsletter
title: "Newsletter #6 - Ship it!"
category: newsletter
permalink: /news/2015/december/
---

Welcome to the sixth newsletter for Neovim, a project that aims to improve Vim
by adding [new features][terminal-emulator] and wrap it all in a nice, modern
face.

### Introduction

Hi, this is @tarruda and I will be addressing the Neovim community directly in
this newsletter. Other than that, I will try to keep it structured as @jdavis
did previously. Let's get started!

## General News

### 0.1 release

Neovim now has its first public release!

A few months ago, @justinmk created the [0.1 milestone][0.1-milestone] which
greatly helped us focus on more urgent tasks that resulted in the first release.
We planned many features not yet available in 0.1, but decided to postpone them
for future milestones, which will be more frequent after this newsletter.

This illustrates the path Neovim will take from now on: Instead of preparing
big releases that take forever to happen, we'll focus on smaller, frequent and
more stable releases.

The 0.1 release is basically just a tag for users looking to compile Neovim in
a version that has a minimum level of stability, but future releases may also
contain precompiled binaries and even installers (when Windows is officially
supported).

Neovim 0.1.0 and 0.1.1 are already available in the [releases
page][nvim-releases] and for [Homebrew/Linuxbrew][homebrew-formula] and [Arch
Linux][archlinux-package].  Check the [installation page on the Neovim
Wiki][installing-neovim-package] for more possibilities to install Neovim
(although, at the time of writing, most of these will install the latest
development version of Neovim instead of a 0.1.x release).

For those that prefer(or need) to compile manually from git, the [build
instructions][build-neovim] still work as usual.

### Bountysource salt campaign

For those who don't know yet, Bountysource launched a new platform that allows
open source projects to obtain sustainable crowdfunding. This platform is
conveniently called ["salt"][history-of-salt], and Neovim was one of the first
projects to use it.

The [first campaign][first-campaign] was very
successful and raised about $35,000, which allowed me to work full-time on
Neovim for roughly 6 months. Being very enthusiastic about the project and
unable to meet all goals in those months, I continued to dedicate a very
significant portion of my time to Neovim, so much that it started hurting my
personal and professional life. This continued until February when I saw that I
simply couldn't continue with my old pace. Around that time that @rappo offered
me to test the salt platform beta version and I saw it as a way to continue my
work on Neovim.

Like it's predecessor, [the salt campaign][salt-campaign] was very successful
and allowed me to continue Neovim contributions (in a healthy way) for the past 8
months, thank you!

### Building Neovim from source

Did we ever mention how easy it is to build and install Neovim from source?
While it has a good number of dependencies, the build system automatically
downloads and builds everything without cluttering your system. Check out
the [installation page on the Neovim Wiki][installing-neovim-source] for the
exact steps.

## Development News

### XDG Support

Neovim now follows the [XDG directory specification][xdg-spec]. This was
[proposed][xdg-proposal] by @ZyX-I when the project started, but only a couple
of months ago we received a [PR][xdg-pr1] from @Yamakaky which was superseded by
@jck in a [later PR][xdg-pr2] and again by @ZyX-I in a [final PR][xdg-pr3] that
was merged recently.

Since following the XDG directory specification, Neovim now looks for user
configuration files such as `.nvimrc` and those under `~/.nvim` in the
`~/.config` directory, which can be overriden by the `$XDG_CONFIG_HOME`
environment variable. The specification also states that cache files should be
stored in a separate directory (`~/.local/share`), which is where files like
viminfo (now ShaDa) or backup/swap can optionally go.

This change makes it simpler for users to backup and manage their configuration
since it will be stored with other programs that also follow the specification,
not to mention it keeps the home directory cleaner.

Step by step instructions on how to migrate existing configuration can be found
at [:h nvim-from-vim][nvim-from-vim].

### ShaDa (Shared Data)

@ZyX-I [major ShaDa PR][shada-pr] was merged. It completely replaced the viminfo
file for storing user data such as register contents, command history,
variables, jump list and so on.

A [known problem][shada-proposal] with viminfo is that two Vim instances running
concurrently will override each other's data. ShaDa is a new storage format
created by @ZyX-I that not only fixes the problem but also brings a number of
enhancements to Neovim:

- File format that:
    - Supports forward (ShaDa files from newer Neovim can be used by older
      versions) and backward (ShaDa files from older versions can be used by
      newer ones without problems) compatibility, making ShaDa files
      future-proof to a great extent.
    - Supports hierarchical data structures, giving Neovim lot of flexibility in
      serializing any kind of information.
    - Is based on msgpack and explicitly standardized in documentation which
      allows creation of plugins/tools that perform arbitrary manipulations.
    - Assumes no state stored between data pieces inside the file, which makes
      such tools simpler and allows such manipulations as “to concatenate two
      ShaDa files from different Neovim instances simply use `cat 1.shada
      2.shada > joined.shada`, Neovim will handle this properly when reading”.
    - Uses expanded paths(/home instead of ~/).
- Embedded timestamps that allow multiple Neovim instances to correctly merge
  their data when writing or reading ShaDa files.
- Forward compatibility includes Neovim core code that preserves additional
  information found in ShaDa files generated by newer Neovim versions in case
  they provide any.

While the [PR][shada-pr] is very big, @ZyX-I has taken care of adding great test
coverage. Great work @ZyX-I!

### Wrapping the event loop layer

It's no secret that libuv is the event loop library used by Neovim, and it is
what makes it possible for us to implement features that require asynchronous
communication (not initiated by the user) with the editor with ease.
Unfortunately due to how Neovim code is currently organized, integrating libuv
was not a trivial task.

The basic idea is that Neovim receives arbitrary events when it is polling for
user input, but these events can't be processed immediately because Neovim can
be in a state that simply can't handle arbitrary actions. So if Neovim receives
an event while checking user input, it will put the event in a queue for later
processing.

One example is illustrated in the following scenario: Neovim checks if the user
typed ctrl+c while the regexp engine is executing, but it can't process the
event as it is received because it may want to execute vimscript that calls the
regexp engine again, and the engine is not reentrant since it relies heavily on
global variables. So it has to postpone the event for when it's safe, and
determining when it's safe to process events is itself another problem.

Another complication of integrating with libuv is that sometimes Neovim must
only process events from a certain source. For example, while Neovim is sending
a msgpack-rpc call, it should only process events that come from:

- the user (eg: ctrl+c to interrupt the call)
- the file descriptor that received the msgpack-rpc call (which can be from a child
  process stdio from a socket)

To allow this kind of selective event processing, Neovim must maintain multiple
queues that integrate with each other, and the logic to do this is very
repetitive. In one of my [latest PRs][event-loop-pr], some libuv "classes" were
wrapped in a way that makes managing these queues much easier.

### jemalloc

[jemalloc][jemalloc], a high performance general purpose memory allocator, is
now used by default. Since Neovim makes heavy use of dynamic queues (see above)
in its inner loops, `malloc(3)` is called a lot more than Vim, so it is
important to use a fast implementation that has consistent performance across
platforms.

In a recent [PR][jemalloc-4-pr], @fmoralesc modified the jemalloc version used
by our build system to target jemalloc 4.0 which brings even more performance
enhancements and adds support for more platforms.

### Faster travis builds

We now use [Travis container-based insfrastructure][travis-container] to run
Neovim builds, which makes CI builds to start immediately. This was
[implemented][container-pr] by @fwalch, which also did many other improvements
to our build infrastructure, allowing developers to receive much faster
feedback when submitting PRs.

### Quickbuild

@jszakmeister is running a [quickbuild][quickbuild] server in his own
infrastructure. This gives us a backup CI that double checks Neovim PRs, also
running tests in FreeBSD which is not covered by travis. Thank you for improving
Neovim robustness @jszakmeister!

## Third-party development

### Neomake

Did you know that there is an alternative to [syntastic][syntastic] that makes
use of Neovim asynchronous capabilities? [Neomake][neomake] is the best plugin
for syntatic checking on Neovim: It is extensible like [syntastic][syntastic]
and the fact that it uses [job-control][job-control] allows it to perform
checking in background without blocking the user interface. This is very useful
for compiled languages that are slower to check (typescript, java, .NET).

The migration from [syntastic][syntastic] is also very trivial, great work
@benekastah!

### FZF

[fzf][fzf] is a command-line fuzzy finder that thanks to its author (@junegunn,
the same developer behind [vim-plug][vim-plug]), has great Neovim support
through a plugin that uses our [builtin terminal emulator][terminal-emulator].

FZF is a great alternative to plugins like [ctrlp][ctrlp]: It is really fast and
has the advantage of running in another process, which can make use of
multi-core systems and doesn't block Neovim user interface. To see how fast and
responsive it is, just try running `:FZF` to search for files on the linux
source tree!

Besides [fzf][fzf], the user is also encouraged to install [fzf.vim][fzf.vim], a
plugin that exposes some very useful commands that are implemented on top of
fzf.

### Deoplete

@Shougo has created [deoplete.nvim][deoplete], an asynchronous completion engine
written as a [remote-plugin][remote-plugin] that makes use of Neovim async
capabilities to allow completions to be computed without blocking the user
interface. He decided to write a new plugin from the scratch because Neovim
doesn't support the lua interface required for neocomplete. @Shougo is the sith
lord of Vim plugins, here's a list containing some of his previous work:

- [neocomplete][neocomplete]
- [neocomplcache][neocomplcache]
- [vimshell][vimshell]
- [unite][unite]
- [neobundle][neobundle]

The community can expect great things from [deoplete.nvim][deoplete]!

(Recently @Shougo posted a [slide][deoplete-slide] to explain the ideas behind
deoplete.)

### Neoterm

[Neoterm][neoterm] is a plugin for easily running tests in a [terminal
window][terminal-emulator]. It was written by @kassio and supports the following
test libraries:

- rspec
- cucumber
- minitest
- go-lang test
- nose

Very useful @kassio!

[terminal-emulator]: https://neovim.io/doc/user/nvim_terminal_emulator.html#nvim-terminal-emulator
[0.1-milestone]: https://github.com/neovim/neovim/milestones/0.1-first-public-release
[history-of-salt]: https://en.wikipedia.org/wiki/History_of_salt
[first-campaign]: https://www.bountysource.com/teams/neovim
[salt-campaign]: https://salt.bountysource.com/teams/neovim
[shada-proposal]: https://github.com/neovim/neovim/issues/999
[shada-pr]: https://github.com/neovim/neovim/pull/2506
[event-loop-pr]: https://github.com/neovim/neovim/pull/2980
[jemalloc]: http://www.canonware.com/jemalloc/
[jemalloc-4-pr]: https://github.com/neovim/neovim/pull/3289
[xdg-spec]: http://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html
[xdg-pr1]: https://github.com/neovim/neovim/pull/3120
[xdg-pr2]: https://github.com/neovim/neovim/pull/3198
[xdg-pr3]: https://github.com/neovim/neovim/pull/3470
[xdg-proposal]: https://github.com/neovim/neovim/issues/78
[travis-container]: http://docs.travis-ci.com/user/workers/container-based-infrastructure/
[container-pr]: https://github.com/neovim/neovim/pull/2938
[quickbuild]: http://freecode.com/projects/quickbuild
[syntastic]: https://github.com/scrooloose/syntastic
[neomake]: https://github.com/benekastah/neomake
[job-control]: https://neovim.io/doc/user/job_control.html#job-control
[deoplete]: https://github.com/Shougo/deoplete.nvim
[deoplete-slide]: http://www.slideshare.net/Shougo/deoplete-the-dark-powered-auto-completion-plugin-for-neovim
[neoterm]: https://github.com/kassio/neoterm
[remote-plugin]: https://neovim.io/doc/user/remote_plugin.html#remote-plugin
[vimshell]: https://github.com/Shougo/vimshell.vim
[unite]: https://github.com/Shougo/Unite.vim
[neocomplete]: https://github.com/Shougo/neocomplete.vim
[neocomplcache]: https://github.com/Shougo/neocomplcache.vim
[neobundle]: https://github.com/Shougo/neobundle.vim
[fzf]: https://github.com/junegunn/fzf
[fzf.vim]: https://github.com/junegunn/fzf.vim
[vim-plug]: https://github.com/junegunn/vim-plug
[ctrlp]: https://github.com/kien/ctrlp.vim
[windows-instrutions]: https://github.com/neovim/neovim/wiki/Installing-Neovim#windows
[neovim-qt]: https://github.com/equalsraf/neovim-qt
[homebrew-formula]: https://github.com/neovim/homebrew-neovim
[archlinux-package]: https://www.archlinux.org/packages/?q=neovim
[installing-neovim-package]: https://github.com/neovim/neovim/wiki/Installing-Neovim#install-from-package
[installing-neovim-source]: https://github.com/neovim/neovim/wiki/Installing-Neovim#install-from-source
[build-neovim]: https://github.com/neovim/neovim/wiki/Building-Neovim
[nvim-from-vim]: https://neovim.io/doc/user/nvim_from_vim.html#nvim-from-vim
[nvim-releases]: https://github.com/neovim/neovim/releases
