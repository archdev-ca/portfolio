var gulp = require("gulp");
var sass = require("gulp-dart-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();

var input = "./scss/**/*.scss";
var output = "./css";

var sassOpts = {
  errorLogToConsole: true,
  outputStyle: "expanded",
};

gulp.task(
  "sass",
  gulp.series(function () {
    return (
      gulp
        .src(input)
        // .pipe(sourcemaps.init())
        .pipe(sass(sassOpts).on("error", sass.logError))
        // .pipe(sourcemaps.write(''))
        .pipe(autoprefixer())
        .pipe(gulp.dest(output))
    );
  })
);

gulp.task(
  "serve",
  gulp.series("sass", function () {
    browserSync.init({
      injectChanges: true,
      open: true,
      server: {
        baseDir: "./",
      },
    });

    gulp.watch("scss/**/*.scss", gulp.series("sass"));
    gulp
      .watch(["js/*.js", "css/*.css", "*.html"])
      .on("change", browserSync.reload);
  })
);

gulp.task("default", gulp.series("serve"));
