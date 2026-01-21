---
layout: newsletter
title: "Neovim 0.10"
category: newsletter
permalink: /news/2024/05
---


Neovim is still the [world's most-loved editor](https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-new-collab-tools-love-dread).

![](/images/2023/3_1537128649228537859.jpg)

Here are some highlights from Neovim 2022 (Nvim 0.8) development.

## UI

## LSP

- LSP documentation hover now uses Nvim's builtin markdown parsing to render
  markdown in docstrings.
- LSP client now has support for fswatch, to improve efficiency and performance
  of watching many files in a big workspace.
- inlay hint support: [neovim/neovim@643546b](https://github.com/neovim/neovim/commit/643546b82b4bc0c29ca869f81af868a019723d83)
    - leverages the new inline virtual text: [neovim/neovim@efa9b29](https://github.com/neovim/neovim/commit/efa9b299a7cb68909e9bcd290e4d12bcb6d0bb03).

## Editor

- `grepprg` now use ripgrep if available
    [neovim/neovim@20b3867](https://github.com/neovim/neovim/commit/20b38677c22b0ff19ea54396c7718b5a8f410ed4)

## Performance

## Defaults

- Neovim-branded colorscheme [neovim/neovim@64a1402](https://github.com/neovim/neovim/commit/64a14026d76ba1798d91e15a941fcb6af7cbc5ad)
- Built in commenting: https://github.com/neovim/neovim/pull/28176

## TUI

- osc52 clipboard [neovim/neovim@748bc4d](https://github.com/neovim/neovim/commit/748bc4d22d35b40f0795015e5d93113b526adf22)
- osc8: treesitter queries can annotate text as URLs, which Nvim will then emit
  to the host terminal wrapped in OSC 8. Supporting terminals will activate
  these tokens as hyperlinks.
- support Super and Meta keys [feat(tui): support Super and Meta modifiers neovim/neovim#24357](https://github.com/neovim/neovim/pull/24357)

## Treesitter (syntax parsing)

Developing treesitter grammars is now as accessible as developing plugins.
With `:InspectTree` and `:EditQuery` you can start experimenting with the
treesitter parsing of any buffer (C, Lua, vimscript, vimdoc, markdown are builtin).
And these views are connected to the buffer: when you move your cursor in the
AST or the query, the relevant buffer text is highlighted, so you can instantly see how
changes in one affect the other.

## API

## Lua

- `vim.system()`: [neovim/neovim@c0952e6](https://github.com/neovim/neovim/commit/c0952e62fd0ee16a3275bb69e0de04c836b39015)
- Nvim ships with annotations for `vim.fn.xxx`, so LSP servers like LuaLS can show docstrings and type information. [neovim/neovim@42333ea](https://github.com/neovim/neovim/commit/42333ea98dfcd2994ee128a3467dfe68205154cd)
- `vim.iter`: [neovim/neovim@ab1edec](https://github.com/neovim/neovim/commit/ab1edecfb7c73c82c2d5886cb8e270b44aca7d01)
- `vim.snippet`
- `vim.keycode`: [neovim/neovim@7e70ca0](https://github.com/neovim/neovim/commit/7e70ca0b4808bb9d8f19c28c8f93e8f2b9e0d0f0)
- base64 module [neovim/neovim@224f303](https://github.com/neovim/neovim/commit/224f303ee54c54d2147f03010385e8cc48e42869)

## Maintenance

- LuaLS type checking, annotations
- Work by dundargoc, zeer

## Documentation

Automated generation of the [online Nvim documentation](https://neovim.io/doc/user/) was rewritten by replacing an old AWK script with Lua + tree-sitter. [We can have nice things.](https://twitter.com/justinmk/status/1577344345736466432)

- massive improvements by lewis, `@inlinedoc`, performance, ...

Compare the old layout (left) to the new one (right):

![](/images/2023/3_1564266982698090496.jpg)

## Job control

## RPC

Nvim UIs are just (inverted) plugins. And `nvim` itself is a [self-hosting UI](https://github.com/neovim/neovim/pull/18375): when you run `nvim` in a terminal, it starts the TUI as a `nvim --embed` child process.

![](/images/2023/3_1609951283833716739.jpg)

Just like Nvim GUIs, you can connect the `nvim` TUI to any Nvim server to see its UI! You can try it right now:

1. Start a server at address `./foo` (creates a `foo` file in the current directory):
   ```
   nvim --listen ./foo
   ```
2. From a different terminal (in the same directory as `./foo`), connect `nvim` to the server:
   ```
   nvim --remote-ui --server ./foo
   ```

## Deprecations




## Holiness

Developing with the holistic system in mind. Thinking about long-term effects,
composability of concepts and economy of interfaces.

examples of devs working to arrive at a long-term solution instead of short-term hacks:
- `v:completed_item` and `CompleteChanged` enhancements which avoided new concepts ("attach to completion provider") & surface area for LSP completion support.
- diagnostic `goto_next(severity=nil)` instead of special-case `severity="auto"`.
- echanovski reporting performance-based test failures, and rewriting `vim.deprecate()` to be faster to remove subtle costs of our evolution strategy.
- dundar help with test conventions and quality, which improves life for new and existing contributors.
- nvim_open_win() supports all kinds of windows instead of only floats. this was difficult and careful work that resulted in a much better interface.

## Future

upcoming:
- build.zig : our build system is in better shape than ever (it's fast, "just
  works" for users starting from zero, and maintainable). And having mastered
  cmake, yet we're exploring zig to replace it all. This is one of those
  relatively cheap side-quests that could yield extreme benefits
  (cross-compilation, reduced maintenance costs, avoidance of cmake baggage), or
  we could put it on ice for years or forever. Being able to probe these
  forbidden ideas is extremely powerful.
- utf8proc potentially improves our unicode support. the grapheme algorithm is much better.
  utf8proc contains all the data which now is in unicode_tables.generated.h internally.


