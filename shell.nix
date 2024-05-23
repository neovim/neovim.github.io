let
  nixpkgsRev = "80665d8fe1cd7a6e121ae969a2dcbcc469d0f2cf";

  nixpkgs = builtins.fetchTarball {
    name = "nixos-unstable";
    url = "https://github.com/nixos/nixpkgs/archive/${nixpkgsRev}.tar.gz";
    sha256 = "090v2nfx19fd24gpsrprgby8f2373xj93sxx89k8ajd239f0xiyg";
  };

  pkgs = import nixpkgs { };

  rubyEnv = pkgs.ruby.withPackages (p: with p; [ nokogiri ]); # ruby 3.1.5
in
pkgs.mkShell {
  name = "neovim-website";

  buildInputs = with pkgs; [
    bundler
    libxml2
    rubyEnv
  ];

  shellHook = ''
    echo "mkdir .bundle"
    echo "bundle config set path .bundle"
    echo "bundle install"
    echo "bundle exec jekyll serve --watch --livereload"
  '';
}
