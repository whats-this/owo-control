const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const notify = require('gulp-notify')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const sync = require('browser-sync')
const reload = sync.reload

//ALL DEV STUFF NOT FOR PRODUCTION PLS NO TOUCH

//-- TASKS
gulp.task('babel', () => {
  return gulp.src('./src/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('browser-sync', ['nodemon'], () => {
  sync.init(null, {
    proxy: "localhost:3000",
    port: 5000,
    notify: true
  })
})



gulp.task('css', () => {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({stream:true}))
})

gulp.task('nodemon', (callback) => {
  return nodemon({script: 'app.js'}).on('start', callback)
})

gulp.task('serve', ['css', 'browser-sync'], () => {
  sync.init({
    server: "./app"
  })
  gulp.watch('./src/scss/*.scss', ['css'])

})
