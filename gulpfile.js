var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var mainBowerFiles = require('main-bower-files');

gulp.task('bower', function(){

	var jsFilter = gulpFilter('*.js');
	var dest = '/public/scripts/externe'

	return gulp.src(mainBowerFiles())
		.pipe(jsFilter)
		.pipe(gulp.dest(dest));
});