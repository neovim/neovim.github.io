---
title: "Neovim News #12 - What's New In Neovim 0.7"
date: 2022-04-26
category: newsletter
---

> Original article: <https://gpanders.com/blog/whats-new-in-neovim-0-7>

Neovim 0.7 was just released, bringing with it lots of new features (and of
course plenty of bug fixes). You can find the full release notes
[here][release notes], but in this post I'll cover just a few of the new
additions.

[release notes]: https://github.com/neovim/neovim/releases/tag/v0.7.0

## Table of Contents

* [Lua everywhere!](#lua-everywhere)
* [Distinguishing modifier keys](#distinguishing-modifier-keys)
* [Global statusline](#global-statusline)
* [filetype.lua](#filetypelua)
* [Client-server communication](#client-server-communication)
* [Looking ahead to 0.8](#looking-ahead-to-08)

## Lua everywhere!

Neovim 0.5 saw the introduction of Lua as a first-class citizen in the Neovim
ecosystem: Lua could now be used in the user's init file, plugins,
colorschemes, ftplugins, etc. Basically, anywhere that you could use a `.vim`
file, you could now use `.lua` instead.

However, there were still some shortcomings in the Lua API at that time.
Notably absent was the ability to create autocommands in Lua, as well as bind
key mappings directly to Lua functions. In order to do either of these things,
users needed to resort to workarounds involving a round trip through Vimscript
conversion, which is a bit clunky:

```lua
-- Using a Lua function in a key mapping prior to 0.7
local function say_hello()
    print("Hello world!")
end

_G.my_say_hello = say_hello

vim.api.nvim_set_keymap("n", "<leader>H", "<Cmd>call v:lua.my_say_hello()<CR>", {noremap = true})
```

The situation was similar for autocommands and custom user commands.

In Neovim 0.7, it is now possible to use all of the usual configuration
primitives (key mappings, autocommands, user commands, etc.) directly in Lua,
with no Vimscript conversion necessary. This also makes it possible to bind
key mappings and autocommands directly to *local* Lua functions:

```lua
-- Using a Lua function in a key mapping in 0.7
vim.api.nvim_set_keymap("n", "<leader>H", "", {
    noremap = true,
    callback = function()
        print("Hello world!")
    end,
})

-- Creating an autocommand in 0.7
vim.api.nvim_create_autocmd("BufEnter", {
    pattern = "*",
    callback = function(args)
        print("Entered buffer " .. args.buf .. "!")
    end,
    desc = "Tell me when I enter a buffer",
})

-- Creating a custom user command in 0.7
vim.api.nvim_create_user_command("SayHello", function(args)
    print("Hello " .. args.args)
end, {
    nargs = "*",
    desc = "Say hi to someone",
})
```

You may notice that `nvim_set_keymap` must set the Lua callback as a key in
the final table argument, while `nvim_create_user_command` can pass the
callback function directly as a positional parameter. This is a consequence of
Neovim's strict API contract, which mandates that after an API function makes
it into a stable release, it's signature *must not* change in any way.
However, because `nvim_create_user_command` is a new API function, we are able
to add a bit of convenience by making its second argument accept either a
string or a function.

Neovim 0.7 also includes a Lua-only convenience function `vim.keymap.set` for
easily creating new key mappings:

```lua
vim.keymap.set("n", "<leader>H", function() print("Hello world!") end)
```

`vim.keymap.set` differs from `nvim_set_keymap` in the following ways:

* It can accept either a string or a Lua function as its 3rd argument.
* It sets `noremap` by default, as this is what users want 99% of the
  time.

The help docs contain much more information: run `:h vim.keymap.set` in Neovim
to learn more.

Finally, users can now use the API function `nvim_set_hl` to modify global
highlight groups (the equivalent of using `:hi`), opening the door to pure-Lua
colorschemes.

## Distinguishing modifier keys

Being a terminal based application, Neovim has long been subject to the
constraints of terminal emulators, one of which being that many keys are
encoded the same and thus indistinguishable to applications running in the
terminal. For example, `<Tab>` and `<C-I>` use the same representation, as do
`<CR>` and `<C-M>`. This has long meant that it is not possible to separately
map `<C-I>` and `<Tab>`: mapping one necessarily maps both.

This has long been a point of annoyance and there are multiple solutions in
the wild to address it. Neovim uses Paul Evans' [libtermkey][], which in turn
makes use of Evans' own [fixterms][] proposal for encoding modifier keys in an
unambiguous way. As long as the terminal emulator controlling Neovim sends
keys encoded in this way, Neovim can correctly interpret them.

Neovim 0.7 now correctly [distinguishes these modifier key combos][vget] in
its own input processing, so users can now map e.g. `<Tab>` and `<C-I>`
separately. In addition, Neovim sends an [escape sequence][CSI PR] on startup
that signals to the controlling terminal emulator that it supports this style
of key encoding. Some terminal emulators (such as iTerm2, foot, and tmux) use
this sequence to programatically enable the different encoding.

A note of warning: this cuts both ways! You may find that existing mappings to
`<Tab>` or `<C-I>` (or `<CR>`/`<C-M>`) no longer work. The fix is easy,
however; simply modify your mapping to use the actual key you want to use.

In addition to disambiguating these modifier pairs, this also enables new
key mappings that were not possible before, such as `<C-;>` and `<C-1>`.

Support for this depends largely on the terminal you are using, so this will
not affect all users.

[libtermkey]: http://www.leonerd.org.uk/code/libtermkey/
[fixterms]: http://www.leonerd.org.uk/hacks/fixterms/
[CSI PR]: https://github.com/neovim/neovim/pull/17844
[vget]: https://github.com/neovim/neovim/pull/17825
[tmux issue]: https://github.com/tmux/tmux/issues/2705#issuecomment-841133549

## Global statusline

Neovim 0.7 introduces a new "global" statusline, which can be enabled by
setting `laststatus=3`. Instead of having one statusline per window, the
global statusline always runs the full available width of Neovim's containing
window. This makes it useful to display information that does not change
per-window, such as VCS information or the current working directory. Many
statusline plugins are already making use of this new feature.

## filetype.lua

In Neovim 0.7 there is a new (experimental) way to do filetype detection. A
quick primer on filetype detection: when you first start Neovim it sources a
file called `filetype.vim` in the `$VIMRUNTIME` directory. This file creates
several hundred `BufRead,BufNewFile` autocommands whose sole purpose is to
infer the filetype of the file based on information about the file, most
commonly the file's name or extension, but sometimes also using the file's
contents.

If you profile your startup time with `nvim --startuptime` you will notice
that `filetype.vim` is one of the slowest files to load. This is because it is
expensive to create so many autocommands. An alternative way to do filetype
detection is to instead create one single autocommand that fires for *every*
new buffer and then tries to match the filetype through a sequential series of
steps. This is what the new `filetype.lua` does.

In addition to using a single autocommand, `filetype.lua` uses a table-based
lookup structure, meaning that in many cases filetype detection happens in
constant time. And if your Neovim is compiled with LuaJIT (which it most
likely is), you also get the benefit of just-in-time compilation for this
filetype matching.

This feature is currently *opt-in* as it does not yet completely match all of
the filetypes covered by `filetype.vim`, although it is very close (I have
been using it exclusively for many months without any issues). There are two
ways to opt-in to this feature:

1. Use `filetype.lua`, but fallback to `filetype.vim`

   Add `let g:do_filetype_lua = 1` to your `init.vim` file. This prevents any
   regressions in filetype matching and ensures that filetypes are always
   detected *at least* as well as they are with `filetype.vim`. However, you
   will pay the startup time cost of both `filetype.lua` and `filetype.vim`.

2. Use only `filetype.lua` and do not load `filetype.vim` at all

   Add both `let g:do_filetype_lua = 1` and `let g:did_load_filetypes = 0` to
   your `init.vim`. This will exclusively use `filetype.lua` for filetype
   matching and provides all of the performance benefits outlined above, with
   the (small) risk of missed filetype detection.

In addition to performance benefits, `filetype.lua` also makes it easy to
add custom filetypes. Simply create a new file `~/.config/nvim/filetype.lua`
and call `vim.filetype.add` to create new matching rules. For example:

```lua
vim.filetype.add({
    extension = {
        foo = "fooscript",
    },
    filename = {
        ["Foofile"] = "fooscript",
    },
    pattern = {
        ["~/%.config/foo/.*"] = "fooscript",
    }
})
```

`vim.filetype.add` takes a table with 3 (optional) keys corresponding to
"extension", "filename", and "pattern" matching. The value of each table entry
can either be a string (in which case it is interpreted as the filetype) or a
function. For example, you may want to override Neovim's default behavior of
always classifying `.h` files as C++ headers by using a heuristic that only
sets the filetype to C++ if the header file includes another C++-style header
(i.e. one without a trailing `.h`):

```lua
vim.filetype.add({
    extension = {
        h = function(path, bufnr)
            if vim.fn.search("\\C^#include <[^>.]\\+>$", "nw") ~= 0 then
                return "cpp"
            end
            return "c"
        end,
    },
})
```

We are bringing `filetype.lua` closer to full parity with `filetype.vim` every
day. The goal is to make it the default in Neovim 0.8 (with the ability to
opt-out to the traditional `filetype.vim`).

## Client-server communication

Neovim 0.7 brings some of the features of [neovim-remote][] into the core
editor. You can now use `nvim --remote` to open a file in an already running
instance of Neovim. An example:

```bash
# In one shell session
nvim --listen /tmp/nvim.sock

# In another shell session, opens foo.txt in the first Nvim instance
nvim --server /tmp/nvim.sock --remote foo.txt
```

One use case for the new remote functionality is the ability to open files
from the embedded terminal emulator in the primary Neovim instance, rather
than creating an embedded Neovim instance running inside Neovim itself.

[neovim-remote]: https://github.com/mhinz/neovim-remote

## Looking ahead to 0.8

Neovim is a loosely structured project of motivated individuals who do the
work for fun; thus, any roadmap is always a bit of a guessing game. However,
there are some things already brewing that you *might* see in Neovim 0.8:

* Improvements to Treesitter support
* "Projects" support for LSP
* [Anti-conceal][]
* [Fully remote TUI][remote tui]
* And more...

[nvim-treesitter]: https://github.com/nvim-treesitter/nvim-treesitter
[Anti-conceal]: https://github.com/neovim/neovim/pull/9496
[remote tui]: https://github.com/neovim/neovim/pull/10071
