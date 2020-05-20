const gulp = require("gulp");
const sass = require("gulp-sass");
gulp.task("sass", function() {
  return gulp.src("src/scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css"))
});
gulp.task("watch", function() {
  gulp.watch("src/scss/elements/*.scss", gulp.series("sass"));
  gulp.watch("src/scss/*.scss", gulp.series("sass"));
});

