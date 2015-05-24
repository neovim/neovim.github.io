var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var ejsify = require('ejsify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var str = require('string-to-stream');
var _ = require('lodash');


var browserifyOpts = _.assign({}, watchify.args, {
  entries: ['./lib/index.js'],
  transform: [ejsify],
  debug: true
});

function build(bundler, dir, minify) {
  var b = bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'browserify error:'))
    .pipe(source('sponsors.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}));

  if (minify) {
    b = b.pipe(uglify()).on('error', gutil.log.bind(gutil, 'uglify error:'));
  }

  return b
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir));
}

gulp.task('test-html', function() {
  str([
    '<!DOCTYPE html>',
    '<html>',
    '  <body>',
    '    <div id="sponsors-test"></div>',
    '    <script>var sponsorsDivId = "sponsors-test", sponsorsFront = false;</script>',
    '    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>',
    '    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>',
    '    <script src="sponsors.js"></script>',
    '  </body>',
    '</html>'
  ].join('\n'))
    .pipe(source('index.html'))
    .pipe(gulp.dest('./test'));
});

gulp.task('build', ['test-html'], function() {
  return build(browserify(browserifyOpts), './test', false);
});

gulp.task('watch', ['test-html'], function() {
  var bundler = watchify(browserify(browserifyOpts), './test');
  bundler.on('update', function() { build(bundler, false); });
  bundler.on('log', gutil.log.bind(gutil, 'browserify:'));
  return build(bundler);
});

gulp.task('dist', function() {
  return build(browserify(browserifyOpts), '../js', true);
});

gulp.task('default', ['dist']);
