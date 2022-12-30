// * What this script do :
    // ? perform autoprefixing
    // ? perform minifiying
    // ? concat all css Files into one file
/*****************************************************************************/

/************************Start Import modules********************************/
// const { dest, series, src, task, watch } = require('gulp');

const gulp = require('gulp');

// ! minify css files
const cleanCSS = require('gulp-clean-css');

// ! autoprefix css files
const autoprefixer = require('gulp-autoprefixer');

// ! Concat Files
const concatCss = require('gulp-concat-css');
/************************End Import modules********************************/

function styleCss() {
    // ? scrap all (src) css files
    return gulp.src('src/css/*.css')
    // ? concat all css Files into one file
    .pipe(concatCss('temp.min.css'))
    // ? output Files
    .pipe(gulp.dest('src/harbor/css'));
}

module.exports = styleCss;
