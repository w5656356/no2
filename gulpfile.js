var gulp = require("gulp"),
	minifyCss = require("gulp-clean-css"),
	uglify = require("gulp-uglify"),
	sass = require("gulp-sass"),
	livereload = require('gulp-livereload');

// ���� gulp ����ʵ�� css ѹ��
gulp.task("minify_css", function(){
	gulp.src("css/*.css")
		.pipe(minifyCss())
		.pipe(gulp.dest("dist/css/"));
});

// ��������JS�ļ�ѹ��
gulp.task("_uglify", function(){
	gulp.src("js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js/"));
});

// �������񣬱���sass�ļ�
gulp.task("_sass", function(){
	gulp.src("sass/*.scss")
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest("dist/css/"))
		.pipe(livereload());
});

// ������������
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('sass/*.scss', ['_sass']);
});

gulp.task("default", ["minify_css", "_uglify"]);