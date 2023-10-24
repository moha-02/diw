const { series, src, dest, parallel,watch } = require('gulp');
const scss = require('gulp-sass')(require('sass'));


function compilaSCSS(){
    return src('./sass/application.scss')
    .pipe(scss())
    .pipe(dest('./css'))
}

exports.compilaSCSS = compilaSCSS;

/*
const limpiarCSS = require('gulp-clean-css');
const limpiarJS = require('gulp-uglify');
*/
/*
// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb(); 
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

function minimizaCSS() {
  return src('src/css/*.css').pipe(limpiarCSS()).pipe(dest('dist/'));
}

function minimizaJS(){
  return src('src/js/*.js').pipe(limpiarJS()).pipe(dest('dist/'))
}

function watcher(){
  watch('src/scss/*scss',compilaSCSS);
}


exports.build = build;
exports.default = series(clean, build);



exports.watcher = watcher;
//exports.minifyCSS = minimizaCSS;
//exports.minifyJS = minimizaJS;
exports.minifyAll = parallel(minimizaCSS,minimizaJS);*/
