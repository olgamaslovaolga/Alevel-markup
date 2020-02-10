module.exports = function() {
	$.gulp.task('browser-sync', function() {
		$.browserSync.init({
			server: {
				baseDir: "./src"
			}
		});
	});
}