#!/bin/bash

# This script syncs files from Neovim core, to content/doc2/:
# - BUILD.md
# - INSTALL.md
#
# After Hugo publishes the rendered HTML from content/doc2/, the files are
# later copied from doc2/ to doc/ by this CI task:
# https://github.com/neovim/doc/blob/main/ci/doc-index.sh

set -eu

# Add Hugo markdown header.
add_frontmatter() {
  local file="$1"
  local title="$2"

  cat > "$file.tmp" <<EOF
---
title: $title
type: page
---

EOF
  cat "$file" >> "$file.tmp"
  mv "$file.tmp" "$file"
}

curl -Lo content/doc2/build.md https://raw.githubusercontent.com/neovim/neovim/refs/heads/master/BUILD.md
add_frontmatter content/doc2/build.md "Build"
# Replace INSTALL.md hyperlinks with "./install".
sed -i '' 's/INSTALL\.md/\.\.\/install\//g' content/doc2/build.md

curl -Lo content/doc2/install.md https://raw.githubusercontent.com/neovim/neovim/refs/heads/master/INSTALL.md
add_frontmatter content/doc2/install.md "Install"
# Replace BUILD.md hyperlinks with "./build".
sed -i '' 's/BUILD\.md/\.\.\/build\//g' content/doc2/install.md

git add content/doc2/
git commit -m 'update content/doc2/ files from neovim/neovim repo'
