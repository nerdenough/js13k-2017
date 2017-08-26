const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

const files = [
  'src/game.js',
  'src/utils/*.js',
  'src/entities/*.js',
  'src/world/*.js'
]

gulp.task('transpile', () => {
  return gulp
    .src(files)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', ['transpile'], () => {
  gulp.watch('src/**/*.js', ['transpile'])
})
