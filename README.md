# Neovim.io website

This repository contains the source for the neovim.io website.

*To report a bug Neovim,* go here: https://github.com/neovim/neovim

## Contributing

Just fork this repository and send us a pull request! :-)

To embed raw html:

    {{< rawhtml >}}
    <lol>
    {{< /rawhtml >}}

## Setup

This site is statically generated using Hugo. It takes one minute to get setup,
just do the following:

1. Install Hugo
   ```
   brew install hugo
   ```
2. Build and view the website locally:
   ```
   hugo server --buildDrafts
   ```
3. Open http://localhost:1313/ to view the website.

## Maintenance

Notes:

- www.neovim.io/doc is served by https://github.com/neovim/doc (which previously
  crawled neovim.io/doc2 generated from this repository).
- Site search (for `:help` docs) is served by [Algolia Docsearch](https://docsearch.algolia.com/).
    - The javascript and UI container were setup in [this commit](https://github.com/neovim/neovim.github.io/commit/ce9aef12eb1c98135965e3a9c5c792bf9e506a76).
    - The docs pages don't use the layout so they also need to [manually include](https://github.com/neovim/neovim/pull/23839) the javascript and define a UI container.
    - Admin: https://www.algolia.com/apps/X185E15FPG/dashboard
- Codeblock highlighting
    - The highlighting for the generated help docs (`/doc/user/`) is done by:
        - `static/css/neovim-hi.css`
        - `static/highlight/styles/neovim.min.css`
        - [gen_help_html.lua](https://github.com/neovim/neovim/blob/a88c7962a82f1427aa90d1c0a08514423516f9f2/src/gen/gen_help_html.lua#L884-L887)
          references those css files.
    - Hugo can provide highlighting for markdown codeblocks, see the `[markup]` section in `hugo.toml`.
        - To list/generate Hugo syntax themes:
          ```
          hugo gen chromastyles --style nord > static/css/syntax.css
          ```
        - To use the them, commit `static/css/syntax.css` and enable it by uncommenting this line: https://github.com/neovim/neovim.github.io/blob/eb266d7929eff8693cc05ca96732a2daf431e834/layouts/_default/baseof.html#L27
          - And fiddle with the `[markup]` section in `hugo.toml`.
