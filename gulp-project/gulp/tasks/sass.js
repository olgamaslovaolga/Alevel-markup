module.exports = function() {
	$.gulp.task('sass', function () {
		return $.gulp.src('src/scss/all.scss')
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass({}))
			.pipe($.gp.autoprefixer({
				overrideBrowserslist:['last 4 versions'],
				cascade: false
			}))
			.on("error", $.gp.notify.onError({
				message: "Error: <%= error.message %>",
				title: "Error running sass"
			}))
			.pipe($.gp.csso())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('src/css/'))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});
}