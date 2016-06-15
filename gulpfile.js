var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('index', function () {
    var target = gulp.src('./index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var sources = gulp.src(['!./node_modules/lite-server/**/*',
        '!./node_modules/gulp/**/*',
        './node_modules/**/*min.js',
         './app/**/*.js',
        './node_modules/**/*min.css',
        './app/**/*.css'], { read: false });

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./'));
});