import gulp from "gulp"
import clean from "gulp-clean"
import autoprefixer from "gulp-autoprefixer"
import cleanCSS from "gulp-clean-css"
import concat from "gulp-concat"
import minify from "gulp-minify"
import bs from "browser-sync"
import gulpSass from "gulp-sass"
import dartSass from "sass"

const browsersync = bs.create();
const sass = gulpSass(dartSass);
gulp.task("clean", () => gulp.src(["dist/css/*", "dist/js/*", "dist/images/*"], {
    read: false
}).pipe(clean())); //clean dist folder from all the files
gulp.task("buildCss", () => gulp.src("src/scss/**/*", {
        allowEmpty: true
    }) //get files in scss and get auto prefixes,
    .pipe(sass()) //get sass library
    .pipe(autoprefixer({
        cascade: false
    })) // get auto prefixes
    .pipe(cleanCSS({
        compatibility: "ie8"
    })) //clean css
    .pipe(concat("style.min.css")) //concat all scss into one file
    .pipe(gulp.dest("dist/css")) //put dist folder into css folder
)

gulp.task("buildJs", () => gulp.src("src/js/**/*", {
        allowEmpty: true
    }) //get files in scss and get auto prefixes
    .pipe(concat("script.js")) //concat all js into one file
    .pipe(minify({
        ext: {
            min: ".min.js"
        }
    }))
    .pipe(gulp.dest("dist/js")) //put dist folder into css folder
)
gulp.task("buildImage", () => gulp.src("src/image/**/*", {
        allowEmpty: true
    })
    .pipe(gulp.dest("dist/image")))
gulp.task("build", gulp.series("clean", "buildCss", "buildJs", "buildImage"))
gulp.task("dev", () => {
    browsersync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(["src/**/*", "index.html"]).on("change", gulp.series("clean", "buildCss", "buildJs", browsersync.reload))
})