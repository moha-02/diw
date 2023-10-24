const { series, src, dest, parallel,watch } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const limpiarCSS = require('gulp-clean-css');
const limpiarJS = require('gulp-uglify');
const concat = require('gulp-concat');



function compilaSCSS(){
    return src('./sass/application.scss')
    .pipe(scss())
    .pipe(dest('./css'));
}
function watcher(){
    watch('./sass/application.scss',compilaSCSS);
}

function minimizaCSS() {
    return src('./css/*.css').pipe(limpiarCSS()).pipe(dest('dist/css'));
}

function minimizaJS(){
    return src('./js/*.js').pipe(limpiarJS()).pipe(dest('dist/js'));
}

function concatCss(){
    return src('./dist/css/*.css').pipe(concat('all.css')).pipe(dest('./dist/css/'));
}

function concatJs(){
    return src('./dist/js/*.js').pipe(concat('all.js')).pipe(dest('./dist/js/'));
}

/*
exports.compilaSCSS = compilaSCSS;
exports.watcher = watcher;
exports.minifyCSS = minimizaCSS;
exports.minifyJS = minimizaJS;
exports.Concatcss = concatCss;
exports.Concatjs = concatJs;*/

exports.kittens = parallel(series(compilaSCSS,minimizaCSS,concatCss),series(minimizaJS,concatJs));
exports.watcher = watcher;
