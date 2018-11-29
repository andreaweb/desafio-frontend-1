const gulp = require('gulp');
const browserSync = require('browser-sync');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
sass.compiler = require('node-sass');

gulp.task('js', () => {
  gulp.src('./src/*.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('dist'));
});

// gulp.task('css', () => {
//   gulp.src('./src/*.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest('dist'));
// });

gulp.task('scss', () => {
  gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["src/*.scss", "./*.js", "src/*.js", "./*.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch',  ['browser-sync'], function() {

    gulp.watch('./images/*');

    gulp.watch('./*.html');

    gulp.watch('./src/*.js', ['js']);

    gulp.watch('./src/*.scss', ['scss']);

    // gulp.watch('./src/*.css', ['css']);
});