const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

gulp.task("scss", () => {
   return gulp
      .src("./styles/scss/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("./styles/css/"));
});

gulp.task("default", () => {
   gulp.watch("./styles/scss/", gulp.series("scss"));
});
