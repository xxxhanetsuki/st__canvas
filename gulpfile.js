// 必要プラグインの読み込み (var gulp = ~ でも可)
const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");

// webpackの設定ファイルの読み込み
const webpackConfig = require("./webpack.config");

const sass = require('gulp-sass');

const browsersync = require("browser-sync");


// サーバーを立ち上げる
gulp.task('build-server', (done) => {
    browsersync.init({
        server: {
            baseDir: "./dist",
        }
    });
    done();
});


// .jsをバンドル
gulp.task("js", (done) => {
    webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest("dist/js"));
    done();
});


// .scssのコンパイル
gulp.task('sass', (done) => {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
    done();
});


// ブラウザのリロード
gulp.task('browser-reload', (done) => {
    browsersync.reload();
    done();
});


// 監視
gulp.task('watch-files', (done) => {
    gulp.watch('./src/js/**/*.js', gulp.series('js'));
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch("./dist/*.html", gulp.task('browser-reload'));
    gulp.watch("./dist/css/*.css", gulp.task('browser-reload'));
    gulp.watch("./dist/js/*.js", gulp.task('browser-reload'));
    done();
});


// タスクの実行
gulp.task('default', gulp.series('build-server', 'watch-files', (done) => {
    done();
}));