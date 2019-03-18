---
layout: newsletter
title: "Google Summer of Code 2019"
category: newsletter
permalink: /news/gsoc-2019
---

Neovim was again accepted into the Google Summer of Code program.
View [our page on the GSoC website](https://summerofcode.withgoogle.com/organizations/6095582066638848/)
for details.  Our [ideas list](https://github.com/neovim/neovim/wiki/GSoC-2019-Ideas)
runneth over! You're also welcome to propose other ideas in
[chat](https://gitter.im/neovim/neovim) or on the
[ticket tracker](https://github.com/neovim/neovim/issues).

Results from last year
----------------------

In our first GSoC ever, we mentored two students who both completed their
projects.

[Brock Mammen](https://github.com/neovim/neovim/issues/8337) implemented a
[C# client for Nvim](https://github.com/neovim/nvim.net), and even went further
with a [Nvim extension](https://github.com/neovim/VSNvim) for Visual Studio!
He also made significant improvements to the build system, particularly for
Windows/MSVC.

The [_multigrid_ project](https://github.com/neovim/neovim/issues/8320)
by Utkarsh Maheshwari involved low-level changes to the UI subsystem:

> breaks up the screen grid in per-window grids, allows UIs to set different
> sizes for each window grid and receive grid based events.

The final product was integrated by mentor [Björn Linse](https://github.com/bfredl)
into the Nvim `master` branch, providing the foundation for the
[floating windows](https://neovim.io/doc/user/api.html#nvim_open_win()) feature.

This demo shows the feature being used in a [popular plugin](https://github.com/neoclide/coc.nvim/)
to reveal documentation with completion results:

<img src="/images/nvim-0.4.0-floatwin-chemzqm.gif" style="max-width:680px; height:auto;"
     title="Neovim floating window demo (credit: Qiming zhao)" />

Looking forward
---------------

Our mentors are looking forward to your GSoC proposals in the next weeks!
The best way to get familiar with Neovim development is to
[send a pull request](https://github.com/neovim/neovim/blob/master/CONTRIBUTING.md#getting-started)
to help out with a small bug or feature request. Working with students on pull
requests is _extremely helpful_ for determining mentor-student workflow.

