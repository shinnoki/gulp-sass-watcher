var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

var documentRoot = process.env.DOCUMENT_ROOT || '/var/www/html';

gulp.task('default', function() {
    var watcher = gulp.watch('sass/**/*.scss', { cwd: documentRoot }, ['sass']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type);
    });
});

gulp.task('sass', function() {
    gulp.src('sass/**/!(_)*.scss', { cwd: documentRoot })
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('css', { cwd: documentRoot }));
});
