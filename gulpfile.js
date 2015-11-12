"use strict";

const gulp = require('gulp');
const shell = require('gulp-shell');
const sequence = require('gulp-sequence');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('clean', () => {
	
});

gulp.task('copy',()=> {
	return gulp.src(['./client/**/*.*','!./client/app/styles/','!./client/app/styles/**/*.*','!./client/**/*.js'])	
		.pipe(gulp.dest('./dist/client/'))
});

gulp.task('babel',()=> {
	return gulp.src(['./client/**/*.js'])	
		.pipe(plumber())
		.pipe(babel({
            presets: ['react']
        }))
		.pipe(gulp.dest('./dist/client/'))
});

gulp.task('sass', () => {
	return gulp.src('./client/app/styles/scss/index.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/client/app/styles/'))
});

gulp.task('webpack', () => {
	return shell.task('webpack --config webpack.config.js')();
});

gulp.task('build', ()=> {
	return sequence(
		['webpack','copy','babel','sass']
	)();
});

gulp.task('watch', () => {
	return gulp.watch([
		'./client/**/*.*'
	], () => {
		return sequence(
			'build'
		)()
	})
});

gulp.task('default', ()=> {
	return sequence(
		'build',
		'watch'
	)();
});