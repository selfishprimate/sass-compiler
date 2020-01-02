var { src, dest } = require("gulp");
var sassify = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var watcher = require("gulp-chokidar");

function sass() {
    return (
        src(["./Turna.Apps.Presentation.Web.Base/**/*.scss", "!node_modules/**/*.scss"], { base: "." })
            .pipe(sourcemaps.init())
            //The output style of CSS files can be one of the followings: "nested", "compact", "expanded", "compressed".
            .pipe(sassify({ outputStyle: "expanded" }))
            .on("error", function swallowError(error) {
                console.log(error.toString());
                this.emit("end");
            })
            .pipe(sourcemaps.write())
            .pipe(
                autoprefixer({
                    overrideBrowserslist: ["last 4 version"],
                    cascade: false
                })
            )
            .pipe(dest("./"))
    );
}


exports.sass = sass;
exports.watch = function () {
    watcher("./Turna.Apps.Presentation.Web.Base/**/*.scss", sass);
};
