/**
 * Variables
 */
var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence');
var typescript      = require('gulp-tsc');
var server          = require('gulp-develop-server');

var paths = {
    app: {
        source: 'sources/app.ts',
        dest:   './dest/app.js'
    },
    sources: 'sources/**/*.*',
    dest: './dest'
}

/**
 * Default task
 */
gulp.task('default', gulpSequence([
    'compile',
    'server:start',
    'watch'
]));

/**
 * Server tasks
 */
gulp.task('server:start', function() {
    server.listen( {
        path: paths.app.dest
    });
});

gulp.task('server:restart', function() {
    server.restart;
});

/**
 * Compile Typescript-files to javascript
 */
gulp.task('compile', function() {
    gulp.src([paths.sources])
        .pipe(typescript())
       .pipe(gulp.dest(paths.dest))
});

/**
 * Filer watcher
 */
gulp.task('watch', function() {
    gulp.watch(paths.sources, [
        'compile',
        'server:restart'
    ]);
});
