#!/usr/bin/env -S nvim -l

-- This script generates the HTML content pages for the Neovim docs on the website.
--
-- The source documentation lives in `runtime/doc` inside the Neovim repository and is written in
-- Vimdoc. The actual Vimdoc to HTML conversion is handled primarily by `src/gen/gen_help_html.lua`
-- from the neovim/neovim repository.
--
-- The generation process has two stages:
--
-- 1. This script invokes `gen_help_html.lua` to convert the Vimdoc files into Hugo
--    content pages under `content/doc/user/<page>.html`. Each generated page contains:
--    - Hugo front matter (including title, aliases, and the commit hash from which
--      the page was generated)
--    - the HTML body produced from the Vim help files.
--
-- 2. Hugo then applies the site templates (head, footer, layout, etc.) to these content
--    pages to produce the final static HTML files served at `/doc/user/<page>/`.
--
-- In addition to the Vimdoc pages, this script also generates Hugo content pages for INSTALL.md
-- (at `/doc/install/`) and BUILD.md (`/doc/build/`).
--
-- Usage:
--   ./script <source_dir> [<nvim_repo>]
--
--   source_dir  Path to a Neovim repository containing `runtime/doc`
--   nvim_repo   Path to a Neovim repository containing `src/gen/gen_help_html.lua`
--               (defaults to `source_dir` if omitted)
--               [For future use cases where versioned docs might be published]

local joinpath = vim.fs.joinpath

local function errprint(msg)
  vim.api.nvim_echo({ { msg } }, false, { err = true })
  vim.cmd('q!')
end

local function usage()
  local script = vim.fs.basename(_G.arg[0])
  errprint(vim.text.indent(0, [[
    Usage: ./%s <source_dir> [<nvim_repo>]

    Arguments:
      source_dir     Path to the Neovim repository with runtime/doc files
      nvim_repo      Path to the Neovim repository with src/gen/gen_help_html.lua script

    Example:
      ./%s ~/Documents/neovim
    ]]):format(script, script))
end

---@param cmd string[]
---@param opts vim.SystemOpts?
---@return string
local function sys(cmd, opts)
  local ok, res = pcall(function()
    return vim.system(cmd, opts or {}):wait()
  end)
  if not ok or res.code ~= 0 or res.signal ~= 0 then
    local err = type(res) == 'string' and res or res.stderr
    errprint(('Error while running %s:\n\t%s'):format(table.concat(cmd, ' '), err))
  end
  return res.stdout
end

local function commit_hash(dir)
  local hash = sys({ 'git', 'rev-parse', 'HEAD' }, { cwd = dir }):gsub('%s', '')
  return (hash and #hash > 0) and hash or '?'
end

local function main()
  if #_G.arg < 1 then
    usage()
  end

  local srcdir = _G.arg[1]
  local nvim_repo = _G.arg[2] or _G.arg[1]

  local docdir = joinpath(srcdir, 'runtime/doc')
  local usercontent = 'content/doc/user'

  vim.cmd(('helptags ++t %s'):format(docdir))
  -- Generate html pages from the Vimdoc files
  local genhelp = dofile(joinpath(nvim_repo, 'src/gen/gen_help_html.lua'))
  local res = genhelp.gen(docdir, usercontent, nil, commit_hash(srcdir))
  --                                           ^ { 'lua.txt', 'starting.txt', }

  if res.err_count > 0 or #res.invalid_links > 0 then
    error(('Error generating pages: err_count: %d, #invalid_links: %d'):format(
      res.err_count,
      res.invalid_links
    ))
  end

  local out_install = 'content/doc/install.md'
  sys({ 'hugo', 'new', 'content', '--force', out_install })
  vim.fn.writefile(vim.fn.readfile(joinpath(srcdir, 'INSTALL.md')), out_install, 'a')
  vim.cmd.edit(out_install)
  -- Replace ./BUILD.md hyperlinks with "/doc/build/".
  vim.cmd([[%s!./BUILD\.md!/doc/build/!g]])
  vim.cmd([[w]])

  local out_build = 'content/doc/build.md'
  sys({ 'hugo', 'new', 'content', '--force', out_build })
  vim.fn.writefile(vim.fn.readfile(joinpath(srcdir, 'BUILD.md')), out_build, 'a')
  vim.cmd.edit(out_build)
  -- Replace INSTALL.md hyperlinks with "/doc/install/".
  vim.cmd([[%s!./INSTALL\.md!/doc/install/!g]])
  vim.cmd([[w]])
end

main()
