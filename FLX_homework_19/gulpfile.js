const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS =require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const del = require('gulp-clean')
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

function styles() {
	return gulp.src('./src/less/**/*.less')
	.pipe(sourcemaps.init())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('styles.css'))
    .pipe(cleanCSS({level: 2}))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({ stream: true }));
}

function scripts() {
	return gulp.src(["./src/js/main.js", "./src/js/playGame.js"])
		.pipe(sourcemaps.init())
        .pipe(concat("app.js"))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify( {
        	toplevel: true
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({ stream: true }));
    }

function imageMin() {
  return gulp.src("./src/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/img"))
    .pipe(browserSync.reload({ stream: true }));
}

function htmlMin() {
  return gulp.src("./src/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true
      })
    )
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.reload({ stream: true }));
}

function watching() {
	browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

	gulp.watch('./src/less/**/*.less', styles);
	gulp.watch('./src/js/**/*.js', scripts);
	gulp.watch('./src/**/*.html', htmlMin);
	gulp.watch('./src/img/**/*', imageMin);
}

function clean() {
	return gulp.src('./dist/*', {read: false})
        .pipe(del());
}


gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts, htmlMin, imageMin)));
gulp.task('serve', gulp.series('build', watching));