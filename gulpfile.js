import gulp from 'gulp';
import path from 'path';
import pug from 'gulp-pug';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import insert from 'gulp-insert';
import browserSyncPkg from 'browser-sync';
import {deleteAsync} from 'del';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const sass = gulpSass(dartSass);
const browserSync = browserSyncPkg.create();

/* ================= helpers ================= */

const reload = done => {
  browserSync.reload();
  done();
};

/* ================= clean ================= */

export const cleanDist = () => {
  return deleteAsync(['dist']);
};

/* ================= public ================= */

export const copy = () =>
  gulp.src('src/public/**/*', {encoding: false})
    .pipe(gulp.dest('dist'));

/* ================= pug ================= */

export const html = () => {

  const configData = require('./src/config.json');

  return gulp.src('src/pages/**/*.pug')
    .pipe(
      pug({
        pretty: true,
        basedir: path.join(process.cwd(), 'src'),
        locals: configData
      })
    )
    .pipe(rename({dirname: '', extname: '.html'}))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
}


/* ================= styles ================= */

export const styles = () =>
  gulp.src('src/app/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist/css'))
    // .pipe(browserSync.stream({match: '**/*.css'}));
    .pipe(browserSync.stream());


/* ================= scripts ================= */

export const scripts = () =>
  gulp.src([
    'src/app/js/common.js',
    'src/blocks/**/*.js',
    'src/components/**/*.js',
    'src/pages/**/*.js',
  ])
    .pipe(concat('common.js'))
    .pipe(insert.prepend(
      `document.addEventListener('DOMContentLoaded', function () {\n`
    ))
    .pipe(insert.append(
      `\n});`
    ))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());

/* ================= scripts libs ================= */

export const scriptsLibs = () =>
  gulp.src([
    'src/public/libs/**/*.js',
  ])
    .pipe(gulp.dest('dist/libs'))
    .pipe(browserSync.stream());

/* ================= serve ================= */

export const serve = () => {
  browserSync.init({
    server: {
      baseDir: 'dist',
      serveStatic: ['dist']
    },
    notify: false,
    open: false
  });

  gulp.watch([
    'src/app/**/*.pug',
    'src/components/**/*.pug',
    'src/blocks/**/*.pug',
    'src/pages/**/*.pug'
  ], html);
  gulp.watch([
    'src/app/**/*.scss',
    'src/components/**/*.scss',
    'src/blocks/**/*.scss',
    'src/pages/**/*.scss'
  ], styles);
  gulp.watch([
    'src/app/**/*.js',
    'src/components/**/*.js',
    'src/blocks/**/*.js',
    'src/pages/**/*.js'
  ], scripts);
  gulp.watch([
    'src/public/libs/**/*.js'
  ], scriptsLibs);
  gulp.watch('src/public/**/*', copy);

  gulp.watch(
    ['src/sprite/sprite.svg', 'src/data/**/*'],
    gulp.series(html, reload)
  );
};


/* ================= build ================= */

export const build = gulp.series(
  cleanDist,
  copy,
  gulp.parallel(html, styles, scripts, scriptsLibs)
);

export default gulp.series(build, serve);
