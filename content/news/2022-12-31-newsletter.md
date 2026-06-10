---
title: "What Neovim shipped in 2022"
date: 2022-12-31
category: newsletter
---


Neovim is the [world's most-loved editor](https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-new-collab-tools-love-dread). That's just science:

![](/images/2023/3_1537128649228537859.jpg)

Here are some highlights from Neovim 2022 (Nvim 0.8) development.

## UI

Eye candy first!

- 'winhighlight' was throughly [reimplemented](https://github.com/neovim/neovim/pull/13457) as window-local highlight namespaces. This is backwards-compatible while enabling many new usecases, like window-local syntax highlighting.
- [global 'statusline'](https://github.com/neovim/neovim/issues/9342) designates one statusline for all windows. Try it:
  ```
  :set laststatus=3
  ```
- `'winbar'` is like an extra statusline at the top of each window. It complements `laststatus=3`:
  ```
  set winbar=%f
  set laststatus=3
  ```
- `'winbar'` and `'statusline'` gained [support for mouse-click regions](https://github.com/neovim/neovim/pull/18650) (as 'tabline' has had since 2016):
    - ![](/images/2023/3_1527849187110440961.jpg)
- _Experimental_ [zero-height command-line](https://github.com/neovim/neovim/pull/16251):
  ```
  :set cmdheight=0
  ```
- The ['mousescroll' option](https://github.com/neovim/neovim/pull/12355) controls vertical/horizontal mouse scroll behavior.
  ```
  :set mousescroll=ver:5,hor:2
  ```
- The new ['statuscolumn'](https://github.com/neovim/neovim/pull/20621) option gives full control of the "gutter", with the same familiar format of 'statusline'. It even supports click events, just like 'statusline', 'tabline', and 'winbar'.
    - Feature author @luukvbaal also provides a [plugin](https://github.com/luukvbaal/statuscol.nvim) with various pre-packaged 'statuscolumn' configs.
    - Try it!
      ```
      :set rnu nu 
      :let &stc='%#NonText#%{&nu?v:lnum:""}%=%{&rnu&&(v:lnum%2)?"\ ".v:relnum:""}%#LineNr#%{&rnu&&!(v:lnum%2)?"\ ".v:relnum:""}'
      ```
    - <video height="360" controls><source src="/images/2023/statuscolumn.mp4" type="video/mp4"></video>
- Marks can [save and restore viewport info](https://github.com/neovim/neovim/pull/15831).
  ```
  :set jumpoptions=view
  ```
    - When you jump around, or switch buffers with <kbd>ctrl-^</kbd>, the viewport is restored instead of resetting/recentering vertically.
- [vim.ui_attach](https://neovim.io/doc/user/lua.html#vim.ui_attach%28%29) (experimental) enables in-process Lua plugins to hook into the same events exposed to all Nvim UIs.  [pic.twitter.com/w9U87jGfIL](https://twitter.com/Neovim/status/1578146342991527938/photo/1)
    - [noice.nvim](https://github.com/folke/noice.nvim) was an early adopter (a matter of days!).
    - ![](/images/2023/noice-ui_attach.webp)

## LSP

- [Summary](https://www.vikasraj.dev/blog/lsp-neovim-retrospective) of the history and status of Nvim builtin LSP support.
- Nvim LSP client now [supports](https://github.com/neovim/neovim/pull/19916) connecting to language servers by TCP.
  ```lua
  vim.lsp.start({ name = 'godot', cmd = vim.lsp.rpc.connect('127.0.0.1', 6008) })
  ```
- New [core events for LSP](https://github.com/neovim/neovim/pull/18507): `LspAttach`, `LspDetach`. Example:
  ```lua
  vim.api.nvim_create_autocmd('LspAttach', {
    group = yourGroupID,
    callback = function(args)
      local client = vim.lsp.get_client_by_id(args.data.client_id)
      your_callbac_func(client, args.buf)
    end
  }
  ```
- `vim.lsp.get_active_clients()` learned to filter (this will be a standard pattern in the Lua stdlib):
  ```lua
  get_active_clients({id=42})
  get_active_clients({bufnr=99})
  get_active_clients({name='tsserver'})
  ```

## Editor

- Nvim now [includes](https://github.com/neovim/neovim/pull/15391) treesitter parsers for C, Lua, and Vimscript. This is a step towards "treesitter by default" for common languages, instead of regex-based vim syntax definitions.
- [tree-sitter spellcheck](https://github.com/neovim/neovim/pull/19419) constrained to extmark region.
- The diff-mode ["linematch" feature](https://github.com/neovim/neovim/pull/14537) improves rendering of same-line diff changes:
  ```
  :set diffopt+=linematch:60
  ```
    - ![](/images/2023/3_1589419182713602048.jpg)
- Nvim supports [editorconfig](https://editorconfig.org), and [enables it](https://github.com/neovim/neovim/pull/21633) by default. Nvim detects ".editorconfig" files in your project and applies the settings.
    - To opt-out of this feature, add this to your config:
      ```lua
      vim.g.editorconfig_enable = false
      ```
- Plugins can provide a [live preview](https://neovim.io/doc/user/map.html#%3Acommand-preview) of user-defined commands. 
    - This extends the builtin `'inccommand'` feature (since 2017), which show the effects of `:substitute` (`:s/foo/bar`) as you type. 
    - Example: The [live-command.nvim](https://github.com/smjonas/live-command.nvim) plugin adds preview for `:normal` and macros:
        - <video height="360" controls><source src="/images/2023/normal-cmd-preview_a84638.mp4" type="video/mp4"></video>
- You [can now](https://github.com/neovim/neovim/pull/18194) implement ['inccommand'](https://neovim.io/doc/user/options.html#'inccommand') preview for any user-defined command. This builds a foundation for live preview of `:normal`, [:global](https://github.com/neovim/neovim/pull/18815), etc.
  ```lua
  vim.api.nvim_create_user_command(
    'MyCmd',
    my_cmd,
    { …, preview = my_cmd_preview })
  ```
- The `:write` command [gained](https://github.com/neovim/neovim/issues/19884) the `++p` flag, so this creates parent/dir/ if it doesn't exist:
  ```
  :edit parent/dir/file.txt
  :write ++p
  ```
- Nvim [now stores](https://github.com/neovim/neovim/pull/15583) "session data" (shada, persistent undo, ...) in `$XDG_STATE_HOME` (~/.local/state) instead of `$XDG_CACHE_HOME` (~/.cache). This change only affects macOS/unix, the Windows locations are unchanged.
- Plugins can also use `stdpath('log')` to get the recommended location for log files.
- <kbd>gO</kbd> in the manpage viewer (`:help :Man`) shows an outline (table of contents) in the location list. Now the outline also [lists the flags](https://github.com/neovim/neovim/pull/17558).
    - ![](/images/2023/3_1526166272706215938.jpg)

## Performance

- [Filetype detection](https://github.com/neovim/neovim/issues/18604) uses Lua (instead of Vimscript) + "on-demand" strategy => 7x speedup vs the old filetype.vim, saves 5+ ms on startup:
  ```
  before:
    9.0ms: sourcing …/runtime/filetype.vim
  after:
    1.3ms: sourcing …/runtime/filetype.lua
  ```
- `nvim --startuptime` [now reports](https://github.com/neovim/neovim/pull/19267) Lua `require()` times.
  ```
  000.010  000.010: --- NVIM STARTING ---
  000.198  000.188: event init
  ...
  026.333  001.109  001.101: require('vim.lsp.protocol')
  028.144  000.423  000.423: require('vim.lsp._snippet')
  ...
  ```
- A brief summary of Nvim 'packpath' improvements:
    - ![](/images/2023/3_1531381005990473730.jpg)
- [Fast, slick folds](https://github.com/kevinhwang91/nvim-ufo) provided by a plugin.

## Defaults

- 'mouse' option is [set by default](https://github.com/neovim/neovim/pull/19290) (again). Was disabled since 2017 "until a better approach".  Now we have it:
  ```
  mouse=nvi
  Type ":" (cmdline-mode) to temporarily disable mouse. Right-click shows a popup menu.
  Try it!
  ```

## API

- [nvim_parse_cmd()](https://github.com/neovim/neovim/pull/18231) provides the foundation for `nvim_cmd([list])` and "user cmd-preview"! And super useful for defining custom cmdline (`:`) behavior.
  ```lua
  :echo nvim_parse_cmd('.,$g/foo/bar', {})
  {
   'cmd': 'global',
   'args': ['/foo/bar'],
   'mods': {…},
   'magic': {'file': v:false, 'bar': v:false}
  }
  ```
- Use `nvim_cmd()` to call any Vim legacy command in a structured way, like `system([...])`.
    - Don't need `fnameescape()`: special chars are controlled by the `magic` param.
      ```lua
      nvim_cmd({cmd='vimgrep', args={'/%s/j', '**'}}, {})
      ```
- [nvim-oxi](https://github.com/noib3/nvim-oxi): "first-class Rust bindings (FFI to Nvim C) to the rich API exposed by Neovim."

## Lua

- Check out the [vim.fs](https://neovim.io/doc/user/lua.html#vim.fs) module for filesystem operations.
    - `vim.fs.find()` is now the canonical way to find "root files", common for LSP configuration.
- `vim.cmd` is the Lua `nvim_cmd` wrapper. It supports calling Ex commands as functions instead of strings:
  ```lua
  vim.cmd.colorscheme('nightfox')
  ```
- Lua plugins [continue to mature](https://zignar.net/2022/11/06/structuring-neovim-lua-plugins/):
  > "Lua plugins are basically the same as a vim plugin, except the file extension is `.lua` instead of `.vim` and the file contains Lua code instead of Vimscript."
    - This elegant interface required lots of careful work, largely thanks to @bfredl!

## Maintenance

- Work by @dundargoc closed two refactor epics started in 2014 and 2017: [#567](https://github.com/neovim/neovim/issues/567) [#7401](https://github.com/neovim/neovim/issues/7401)
- [Progress](https://twitter.com/teej_dv/status/1575450247173738498) on vim9script => Nvim-Lua transpiler from core maintainer [@teej_dv](https://twitter.com/teej_dv) will enable us to continue pulling test coverage from Vim, plus syntax, ftplugins, and even plugins like cfilter.
- [Nightly + stable releases](https://github.com/neovim/neovim/releases) now [provide](https://github.com/neovim/neovim/pull/19029) a universal binary (ARM/M1, Intel) for macOS 11+.

## Documentation

Automated generation of the [online Nvim documentation](https://neovim.io/doc/user/) was rewritten by replacing an old AWK script with Lua + tree-sitter. [We can have nice things.](https://twitter.com/justinmk/status/1577344345736466432)

- Improved styling
- Nested lists
- Soft-wrapped "flow" layout on selected pages ([example](https://neovim.io/doc/user/luaref.html))
- Improved parsing of vim :help tokens

Compare the old layout (left) to the new one (right):

![](/images/2023/3_1564266982698090496.jpg)

## Job control

Nvim now [sets](https://github.com/neovim/neovim/pull/11009) the `$NVIM` environment variable in `jobstart()` and `:terminal` jobs, so child processes have an unambiguous hint that they are children of Nvim. The old `$NVIM_LISTEN_ADDRESS`, which had conflicting "dual purposes", is no longer passed to children.

## RPC

Nvim UIs are just (inverted) plugins. And now `nvim` itself is a [self-hosting UI](https://github.com/neovim/neovim/pull/18375): when you run `nvim` in a terminal, it starts the TUI as a `nvim --embed` child process.

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

- [Removed the `'insertmode'` option](https://github.com/neovim/neovim/pull/18547#issuecomment-1134613097), which was used in Vim to implement "easy vim".
    - We're driving towards making the same behavior possible as a plugin. See `:help 'insertmode'`.
- cscope support was [removed](https://github.com/neovim/neovim/pull/20545), because it is mostly redundant with the LSP client (`:help lsp`).
    - Note: ctags support will *never* be removed, it is far more common and generally useful.



