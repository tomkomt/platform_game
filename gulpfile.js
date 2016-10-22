var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./dev/sass/**/*.scss')
        .pipe(sass({
            includePaths: ['./sass'],
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('watch-sass', function() {
    gulp.watch('./dev/sass/**/*.scss', function(event) {
        gulp.run('sass');
    });
});