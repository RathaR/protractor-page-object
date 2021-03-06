var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function () {
    var tsResult = gulp.src([
        'src/**/*.ts',
        'demo/**/*.ts'
    ]).pipe(ts({
        out: 'E2ESpec.js',
        removeComments: true,
        module: "commonjs",
        target: "ES5",
        sourceMap: true
    }));
    return tsResult.js.pipe(gulp.dest('build'));
});