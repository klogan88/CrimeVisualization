var gulp        = require('gulp'),
    serve       = require('browser-sync'),
    sync        = require('run-sequence');

/**
 * This task will start a server
 * on port 4500 and serve our app
 */
gulp.task('serve', function() {
  serve({
    open: false,
    port: 4500,
    server: {
      baseDir: 'client'
    }
  });
});


/**
 *
 */
gulp.task('dev', function(done) {
  sync('serve', done)
});
