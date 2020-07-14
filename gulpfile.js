var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync'),
	burbon      = require('node-bourbon');

gulp.task('sass', function() {
  return gulp.src('sass/*.sass')
  .pipe(sass({includePaths: require('node-bourbon').includePaths}))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', function() {
	gulp.watch('sass/*.sass',  gulp.parallel('sass'))
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch('app/js/*.js').on('change', browserSync.reload);
})

gulp.task('default', gulp.parallel('browser-sync', 'sass', 'watch'), function() {

});