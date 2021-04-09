let
  nixpkgsRev = "e9158eca70ae59e73fae23be5d13d3fa0cfc78b4";

  nixpkgs = builtins.fetchTarball {
      name = "nixos-unstable";
      url = "https://github.com/nixos/nixpkgs/archive/${nixpkgsRev}.tar.gz";
      sha256 = "0cnmvnvin9ixzl98fmlm3g17l6w95gifqfb3rfxs55c0wj2ddy53";
  };
  pkgs = import nixpkgs { };

  rubyEnv = pkgs.ruby.withPackages(p: with p; [ nokogiri ]);
in
pkgs.mkShell {

  name = "neovim-website";
  buildInputs = with pkgs; [ bundler rubyEnv libxml2 ];

  shellHook = ''
    echo "bundle install --path .bundle"
    echo "bundle exec jekyll build --verbose"
  '';
}
