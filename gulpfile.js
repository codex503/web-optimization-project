var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function(){
	console.log('Gulp is running correctly');
});

gulp.task('uglify', function(){
	gulp.src('views/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('views/dist'));
});
