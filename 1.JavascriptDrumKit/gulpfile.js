var gulp = require('gulp');
var rename = require("gulp-rename");


// Sass to CSS, autoprefixing, sourcemaps and minification
var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-cssmin');

// Pug to HTML, inline the scripts and styling, Minify the html
var pug = require('gulp-pug'),
    inline = require('gulp-inline-source'),
    htmlMin = require('gulp-htmlmin');

// JS to ES6, minify
var babel = require('gulp-babel'),
    pump = require('pump');

// Livereload
var browserSync = require('browser-sync').create();


// -----------------------------------------------


// Sass task for styling
gulp.task('sass',function() {

  return gulp.src(['./build/src/styles.sass'])
  .pipe(sourcemaps.init())

  // compile Saass
  .pipe(sass().on('error',sass.logError))

  // prefixes it
  .pipe(autoprefixer())

  // Minfies it
  .pipe(cssmin())

  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./build/dist'))

})



// HTML compiler
gulp.task('pug',function(){

  return gulp.src(['./build/src/index.pug'])

  .pipe(rename('./test.pug'))

  // Pug to HTML
  .pipe(pug({ pretty: true }).on('error',function(err) {
    console.log(err)
  }))

  .pipe(gulp.dest('./'));

})



// Babel compiler for scripts
gulp.task('babel',function(cb) {

  pump([
    gulp.src('./build/src/scripts.js'),
    sourcemaps.init(),

    // Babel to ES2015
    babel({
      presets: ['es2015']
    }),
    sourcemaps.write(),
    gulp.dest('./build/dist')
  ],cb);

})


// All 3 css, pug and js happen async, keep this in mind
// Nuke performs all the tasks and reloads the browser
gulp.task('nuke', ['pug','sass','babel'], function(done) {
  browserSync.reload();
  done();
});


// Watches all files in /build/src folder and runs nuke tasks first and then reloads the browser
gulp.task('serve',function() {

  browserSync.init({
    server:{
      baseDir:'./',
      directory: true
    }
  });

  gulp.watch('./build/src/*.*',['nuke']);

})


// Run production before commiting to github
gulp.task('production', function(){

  return gulp.src('./test.html')

  .pipe(rename('./index.html'))

  .pipe(inline({ compress: true }))

  .pipe(htmlMin({collapseWhitespace: true}))

  .pipe(gulp.dest('./'));

})

// -----------------------------------------------

// Individually watch pug and css
gulp.task('watch',function() {

  gulp.watch(['./build/src/index.pug'],['pug']);

  gulp.watch(['./build/src/styles.sass'],['css']);

});

// Testing gulp task
gulp.task('testing',function() {
  console.log('This is my first gulp task!!');
})
