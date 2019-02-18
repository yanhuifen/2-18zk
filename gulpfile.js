var gulp = require('gulp');
var sass = require('gulp-sass'); //编译sass
var minjs = require('gulp-uglify'); //编译js
var server = require('gulp-webserver'); //编译js
var mincss = require('gulp-clean-css'); //压缩css
//编译sass
gulp.task('bysass', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
});
//监听css
gulp.task('watch', function() {
        return gulp.watch('bysass')
    })
    //启服务
gulp.task('startserver', function() {
    return gulp.src('src')
        .pipe(server({
            host: "169.254.112.84",
            port: 8080,
            livereload: true
        }))
});
//默认执行
gulp.task('default', gulp.series('startserver', 'watch'));
//编译压缩js
gulp.task('minjs', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(minjs())
        .pipe(gulp.dest('./dist/js'))
});
//压缩css
gulp.task('mincss', function() {
    return gulp.src('./src/css/**/*.css')
        .pipe(mincss())
        .pipe(gulp.dest('./dist/css'))
});
//上线
gulp.task('build', gulp.series('minjs', 'mincss'))