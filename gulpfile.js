var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');

var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var babel = require('babelify');

gulp.task('css', function () {
	gulp
	.src('./index.scss')
	.pipe(sass())
	.pipe(cssmin())
	.pipe(rename('app.css'))
	.pipe(gulp.dest('./dist/css'))
})

gulp.task('assets', function () {
	gulp
	.src('./assets/images/*')
	.pipe(gulp.dest('./dist/images/'))

	gulp
	.src('./assets/js/*')
	.pipe(gulp.dest('./dist/js/'))

	gulp
	.src('./assets/fonts/roboto/*')
	.pipe(gulp.dest('./dist/fonts/roboto/'))
})

gulp.watch('./index.scss', ['css']);

function compile(watch) {
	var bundle = browserify('./src/index.js', {debug: true});
	if (watch) {
		bundle = watchify(bundle);
		bundle.on('update', function () {
			console.log('Bundling ...');
			rebundle();
		})
	}
	function rebundle() {
		bundle
		.transform(babel, {presets: ['es2016']})
		.bundle()
		.pipe(source('index.js'))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('./dist/js'))
	}

	rebundle();
}

gulp.task('build', function () { return compile(false)})
gulp.task('watch', function () { return compile(true)})

gulp.task('default', ['css', 'build', 'assets'])
