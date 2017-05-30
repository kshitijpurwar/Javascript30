# Javascript 30 day boilerplate ( _boil_ )
---

Based on a [Javascript 30 course](https://javascript30.com/)  by [Wes Bos](https://wesbos.com) in which you build 30 micro projects with only `vanilla JS`, no jQuery and :poop:.

Also _Wes Bos_ is an amazing teacher!! :thumbsup:

Used this [Scotch.io course](https://scotch.io/courses/using-gulp-as-a-build-system) to learn gulp and make this awesome template. Try [browserSync](https://browsersync.io/docs/gulp), you are gonna fall in :heart_eyes: love with it !!

## Features
- Only one minified `index.html` for production deployment , which contains all the scripts and styling so the loading is __Ultra Fast < 500ms__
- Uses Pug for `HTML` and Sass for `CSS` as pre-processor, `babel` for transpiling JS
- The styling and scripts are injected in the index.html
- `Source code` will be available on github
- Each project has a `code` associated with it to, be used with my personal URL shortener
- The project will be hosted on Github sites
- The `gulpfile.js` contains all the processes used such as minification, Live Reload,auto-prefixing, compilation etc
- This boilerplate has [browserSync](https://browsersync.io/) which is insanely AWESOME :tada: :tada: :tada: :balloon:.
All you need to do is edit the Sass, Pug and JS in `/build/src/`
- Use `gulp production` to update __Production__ `index.html` in root folder
- Use `index.html` in `/build/dist` for testing, it's the one with live reload

## Gulp Plugins employed
- [Sass Compiler](https://www.npmjs.com/package/gulp-sass)
- [Pug.js Compiler](https://www.npmjs.com/package/gulp-pug)
- [Babel](https://babeljs.io/)
- [CSS Minifier](https://www.npmjs.com/package/gulp-cssmin)
- [HTML Minifier](https://www.npmjs.com/package/gulp-htmlmin/)
- [Inliner](https://www.npmjs.com/package/gulp-inline-source)
- [Auto prefixer](https://www.npmjs.com/package/gulp-autoprefixer/)
- [Source Maps](https://www.npmjs.com/package/gulp-sourcemaps/) -- [Source Maps 101??](https://youtu.be/_snS5czNJ0I)
- [Pump for Uglify](https://github.com/terinjokes/gulp-uglify/blob/master/docs/why-use-pump/README.md#why-use-pump) : and  why use it?

## The process
1. Edit the `index.pug` or `styles.sass` in `src` folder
3. `index.pug` is compiled to `index.html` in `dist`
4. `styles.sass` is compiled to `styles.css` in `dist`,  is
    - Source mapped
    - Auto prefixed
    - Minified    
5 `scripts.js` are transpiled to browser-compatible JavaScript with `Babel`   
6. Styles and scripts from `dist` is inlined into index.html, it's uglified and written to `root` folder.  


## Gulp tasks
- __3 main process are__ :
   - gulp pug
   - gulp sass
   - gulp babel
- __gulp serve__ : Serves the dist `index.html` on localhost, with live reload
- __gulp nuke__ : Runs babel, sass and pug in async, then reloads the browser
- __ gulp production__ : Updates the Production version `index.html` from  `index.html` in `/build/dist` folder

## TODO
- ~~Documentation~~
- ~~Publishing to Github~~
- ~~Online with Github Sites~~


## Template Structure
- Build
  - dist - __Not to be touched__
    - `index.html`
    - `styles.css`
    - `scripts.js`
  - src  - __To be edited__
    - `index.pug`
    - `scripts.js`
    - `styles.sass`
  - assets  - contains images and other media
- README.md - contains the information about the project
- screenshot.png - screenshot of the current project
- `gulpfile.js`
- `index.html` - Main production file to be deployed
- `package.json`


---
:wrench: :nut_and_bolt: Created by  __[Kshitij Purwar](https://kshitijpurwar.com)__ with :heart:
