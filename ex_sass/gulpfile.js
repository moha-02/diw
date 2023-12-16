const { series, src, dest, parallel,watch } = require('gulp');
const scss = require('gulp-sass')(require('sass'));


function compilaSCSS(){
    return src('src/scss/main.scss')
    .pipe(scss())
    .pipe(dest('./dist/'));
}

function copy() {
    return src('src/images/*')
      .pipe(dest('dist/'));
  }
   

function watchFiles(){
    watch('src/scss/*.scss', compilaSCSS);
}

exports.compila = parallel(compilaSCSS,copy);
exports.watchFiles = watchFiles;