# neovim.io website

This repository contains the source for the neovim.io website. The Neovim core
project is: https://github.com/neovim/neovim

## Contributing

Just fork this repository and send us a pull request! :-)

## Setup

This assumes that you already have a recent Ruby with RubyGems.

### Installing Ruby gems

Install Bundler, either systemwide:

    $ sudo gem install bundler

or for the current user:

    $ gem install --user-install
    $ export PATH="$(ruby -e 'print Gem.user_dir')/bin:$PATH"

In the latter case, you might want to add the `PATH` update to `.bashrc` or your shell's equivalent.

To install the dependencies of this project, use Bundler:

    $ bundle install --path .bundle

### Serving locally

Execute the following command:

    $ bundle exec jekyll serve --watch

Open `http://localhost:4000` to view the website.

If you encounter an error message saying `Could not find a JavaScript runtime`, follow the link indicated
in the error message and install one of the listed runtimes.

### Running tests

    $ bundle exec rake test

### (Optionally) Regenerate dependencies

Install Bower if you don't have it:

    npm install bower

Then install the JS dependencies with `bower install`.

## License

&copy; 2014 Cameron Eagans and Josh Branchaud

Licensed under the MIT License. See LICENSE for details.
