[![Stories in Ready](https://badge.waffle.io/neovim/neovim.github.io.png?label=ready&title=Ready)](https://waffle.io/neovim/neovim.github.io)

![Neovim Logo](logos/neovim-logo.png)

**Vim's rebirth for the 21st century**

Neovim is a project that seeks to aggressively refactor vim source code in
order to achieve the following goals:

* Simplify maintenance to improve the speed that bug fixes and features get
merged.
* Split the work between multiple developers.
* Enable the implementation of new/modern user interfaces without any
modifications to the core source.
* Improve the extensibility power with a new plugin architecture based on
coprocesses. Plugins will be written in any programming language without any
explicit support from the editor.
* By achieving those goals new developers will soon join the community,
consequently improving the editor for all users.

This repository is for the project's website; visit
[Neovim's repository](https://github.com/neovim/neovim) for more details on
the project itself.

## Contributing
...

## Setup

### Installing Ruby gems
`sudo gem install bundler` to get bundler, then you can just `bundle install` to install all the gems.

### Serving locally
```
jekyll serve --watch
```
Open on `http://localhost:4000`

### Running tests
```
bundle exec rake test
```

### (Optionally) Regenerate dependencies
Install bower if you don't have it:
```
npm install bower
```
Then install the JS dependencies with `bower install`.

## License

&copy; 2014 Cameron Eagans and Josh Branchaud

Licensed under the MIT License. See LICENSE for details.
