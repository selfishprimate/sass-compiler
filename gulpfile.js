var { watch, src, dest } = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");

function compileSass() {
  return (
    src(["./**/*.scss", "!node_modules/**/*.scss"], { base: "." })
      .pipe(sourcemaps.init())
      // gulp-sass kullanarak Sass dosyasını CSS'e çeviriyor. "nested", "compact", "expanded", "compressed" değerleri kullanılabilir.
      .pipe(sass({ outputStyle: "expanded" }))
      .on("error", function swallowError(error) {
        console.log(error.toString());
        this.emit("end");
      })
      .pipe(sourcemaps.write())
      .pipe(
        autoprefixer({
          Browserslist: ["last 1 version", "iOS 6"],
          cascade: false
        })
      )
      .pipe(dest("./"))
  );
}

exports.default = function() {
  watch("./**/*.scss", compileSass);
};
