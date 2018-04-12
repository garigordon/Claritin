var gulp = require('gulp');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested'); // даёт возможность писать стили в css файле, как в sass
var short = require('postcss-short'); // позволяет писать меньше кода position: absolute 0 10px * 5px;
var assets = require('postcss-assets');
var imagemin = require('gulp-imagemin'); // https://github.com/sindresorhus/gulp-imagemin
var focus = require('postcss-focus'); // https://github.com/postcss/postcss-focus
var pxtorem = require('postcss-pxtorem'); // https://github.com/cuth/postcss-pxtorem
var colorFunction = require("postcss-color-function"); // background: color(red a(90%)) плагин цвета https://github.com/postcss/postcss-color-function#list-of-color-adjuster
var cssnext = require('postcss-cssnext');
var cssnano = require('cssnano');

gulp.task('css', function () {
	var processors = [
		/*autoprefixer({
			browsers: ['last 2 Chrome versions', 'not ie <= 11', 'Firefox >= 20'], add: true
		}),*/
		nested,
		short,
		cssnext,
		focus,
		pxtorem,
		colorFunction(),
		assets({
			loadPaths: ['public/img/'],
			relativeTo: 'public/css/'
		})
        //cssnano()
	];
    return gulp.src('./public/css/post-css.css')
        .pipe(postcss(processors))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('default', function(){
	gulp.watch('./public/css/post-css.css', function(){
		gulp.run('css');
	})
	gulp.src('public/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('public/img/'))
})
