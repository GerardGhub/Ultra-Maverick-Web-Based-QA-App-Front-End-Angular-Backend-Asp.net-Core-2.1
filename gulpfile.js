var gulp = require("gulp");

gulp.task("Copy-dist-to-wwwroot", () => {
// return gulp.src("./dist/TaskManagerQA/**/*").pipe(gulp.dest("D:\\MY Files\\UM System\\Web\\TaskManagerQA\\MvcTaskManager\\MvcTaskManager\\wwwroot"));
return gulp.src("./dist/TaskManagerQA/**/*").pipe(gulp.dest("\\\\10.10.2.6\\$wwwroot"));
});





gulp.task("default", () => {
    gulp.watch("./dist/TaskManagerQA", gulp.series
    ("Copy-dist-to-wwwroot"));
});
