var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', ['styles'], function(done) {
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch('index.html').on('change', browserSync.reload);

	browserSync.init({
		server: './'
	});
  done();
});

gulp.task('styles', function(done) {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
	done();
});