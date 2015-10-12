var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var mainBowerFiles = require('main-bower-files');

gulp.task('bower-js', function(){

	var jsFilter = gulpFilter('*.js');
	var jsDest = './public/scripts/externe'

	return gulp.src(mainBowerFiles())
		.pipe(jsFilter)
		.pipe(gulp.dest(jsDest));
});

gulp.task('styles', function(){

	// var cssFilter = gulpFilter('*.css');
	var cssDest = './public/css'

	return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css'])
		//.pipe(cssFilter)
		.pipe(gulp.dest(cssDest));
});

gulp.task('all', function() { 
	gulp.start('bower-js', 'styles'); 
});
