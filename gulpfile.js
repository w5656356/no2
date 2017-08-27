var gulp = require("gulp"),
	minifyCss = require("gulp-clean-css"),
	uglify = require("gulp-uglify"),
	sass = require("gulp-sass"),
	livereload = require('gulp-livereload');

// 创建 gulp 任务，实现 css 压缩
gulp.task("minify_css", function(){
	gulp.src("css/*.css")
		.pipe(minifyCss())
		.pipe(gulp.dest("dist/css/"));
});

// 创建任务，JS文件压缩
gulp.task("_uglify", function(){
	gulp.src("js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js/"));
});

// 创建任务，编译sass文件
gulp.task("_sass", function(){
	gulp.src("sass/*.scss")
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest("dist/css/"))
		.pipe(livereload());
});

// 创建监听任务
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('sass/*.scss', ['_sass']);
});

gulp.task("default", ["minify_css", "_uglify"]);