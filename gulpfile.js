var gulp = require('gulp')

gulp.task('default', () => {
    gulp.src('./node_modules/jquery/dist/*.min.js')
        .pipe(gulp.dest('./js/'))
})
