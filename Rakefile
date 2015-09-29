require 'html/proofer'

task :test do
  sh 'bundle exec jekyll build --drafts'
  HTML::Proofer.new('./_site',
    :parallel => { :in_threads => 4 },
    :href_swap => {
      # Check /doc against /doc_index (moved to this location by bot-ci).
      /^\/doc\/$/ => '/doc_index/',
    }, :href_ignore => [
      # Ignore doc directories created by bot-ci.
      /^\/doc\/.*$/,
      '#',
  ]).run
end

task :default => [:test]
