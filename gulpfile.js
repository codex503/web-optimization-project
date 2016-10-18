var gulp = require('gulp');
var uglify = require('gulp-uglify');

// task to minify javascript
gulp.task('uglify', function(){
	gulp.src('views/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('views/dist'));
});

// task for responsive images


const imagemin = require('gulp-imagemin');
 
gulp.task('default', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);