var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function () {
    var tsResult = gulp.src('src/**/*.ts')
        .pipe(ts({
            out: 'E2ESpec.js',
            removeComments: true,
            module: "commonjs",
            sourceMap: true,
            target: "ES5"

        }));
    return tsResult.js.pipe(gulp.dest('build'));
});