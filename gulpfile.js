var gulp = require('gulp');
var uglify = require('gulp-uglify');

// testing to make sure gulp is properly configured
gulp.task('default', function(){
	console.log('Gulp is running correctly');
});
// task to minify javascript
gulp.task('uglify', function(){
	gulp.src('views/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('views/dist'));
});
