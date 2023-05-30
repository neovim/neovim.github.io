# neovim.io website

This repository contains the source for the neovim.io website. The Neovim core
project is: https://github.com/neovim/neovim
Note that www.neovim.io/doc is served by https://github.com/neovim/doc (which
previously crawled neovim.io/doc2 generated from this repository).

## Contributing

Just fork this repository and send us a pull request! :-)

## Setup

This assumes that you already have a recent Ruby with RubyGems.

### Installing Ruby gems

Install Bundler, either systemwide:

    sudo gem install bundler

or for the current user:

    export PATH="$(ruby -e 'print Gem.user_dir')/bin:$PATH"
    gem install --user-install bundler

In the latter case, you might want to add the `PATH` update to `.bashrc` or your shell's equivalent.

To install the dependencies for this project only:

    bundle config set --local path .bundle
    # To _update_ deps, remove the lockfile.
    # rm Gemfile.lock
    bundle install

### Serving locally

Execute the following command:

    bundle exec jekyll serve --watch --livereload

Open http://localhost:4000 to view the website.

## Maintenance

* Site search (for `:help` docs) is served by [Algolia Docsearch](https://docsearch.algolia.com/).
    * The javascript and UI container were setup in [this commit](https://github.com/neovim/neovim.github.io/commit/ce9aef12eb1c98135965e3a9c5c792bf9e506a76).
    * The docs pages don't use the jekyll layout so they also need to [manually include](https://github.com/neovim/neovim/pull/23839) the javascript and define a UI container.
    * Admin: https://www.algolia.com/apps/X185E15FPG/dashboard

## License

&copy; 2014 Cameron Eagans and Josh Branchaud

Licensed under the MIT License. See LICENSE for details.
