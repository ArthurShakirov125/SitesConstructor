const {src, dest, series, watch} = require("gulp");

const concat = require("gulp-concat");
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require("gulp-autoprefixer");
const cleancss = require("gulp-clean-css");
const browserSync = require("browser-sync").create();
const svgSprite = require("gulp-svg-sprite");
const image = require("gulp-image");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify-es").default;
const notify = require("gulp-notify");
const sourceMaps = require('gulp-sourcemaps');
const del = require("del");
const less = require("gulp-less");

const styles = () => {
    return src('src/**/*.css')
    .pipe(sourceMaps.init())
    .pipe(concat("main.css"))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(cleancss({
        level:2
    }))
    .pipe(sourceMaps.write())
    .pipe(dest("dist/styles"))
    .pipe(browserSync.stream())
}

const stylesless = () =>{
    return src("src/**/*.less")
    .pipe(sourceMaps.init())
    .pipe(less())
    .pipe(concat("styleLess.css"))
    .pipe(autoprefixer())
    .pipe(cleancss())
    .pipe(sourceMaps.write())
    .pipe(dest("dist/styles"))
    .pipe(browserSync.stream())
}

const stylesBuild = () => {
    return src('src/**/*.css')
    .pipe(concat("main.css"))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(cleancss({
        level:2
    }))
    .pipe(dest("dist/styles"))
    .pipe(browserSync.stream())
}

const htmlMinify = () =>{
    return src("src/**/*.html")
    .pipe(htmlMin({
        collapseWhitespace:true
    }))
    .pipe(dest("dist"))
    .pipe(browserSync.stream())
}

const html = () =>{
    return src("src/**/*.html")
    .pipe(dest("dist"))
}

const watchFile = () =>{
    browserSync.init({
        server:{
            baseDir:"dist"
        }
    });
}

const svgSprites = () =>{
    return src("src/images/svg/**/*.svg")
    .pipe(svgSprite({
        mode:{
            stack:{
                sprite: "../sprite.svg"
            }
        }
    }))
    .pipe(dest("dist/images"))
    .pipe(browserSync.stream())
}

const images = () =>{
    return src([
        "src/images/**/*.jpeg",
        "src/images/**/*.jpg",
        "src/images/**/*.png",
        "src/images/*.svg",
    ])
    .pipe(image())
    .pipe(dest("dist/images"))
    .pipe(browserSync.stream())
}

const scriptsBuild = () =>{
    return src([
        "src/js/components/**/*.js",
        "src/js/main.js"
    ])
    .pipe(babel({
        presets:["@babel/env"]
    }))
    .pipe(concat("app.js"))
    .pipe(uglify({
        toplevel:true
    }).on("error", notify.onError()))
    .pipe(dest("dist"))
    .pipe(browserSync.stream())
}

const temp1_scriptsBuild = () =>{
    return src([
        "src/js/template1/**/*.js",
    ])
    .pipe(sourceMaps.init())
    .pipe(babel({
        presets:["@babel/env"]
    }))
    .pipe(concat("temp1.js"))
    .pipe(uglify({
        toplevel:true
    }).on("error", notify.onError()))
    .pipe(sourceMaps.write())
    .pipe(dest("dist"))
    .pipe(browserSync.stream())
}

const temp2_scriptsBuild = () =>{
    return src([
        "src/js/template2/**/*.js",
    ])
    .pipe(babel({
        presets:["@babel/env"]
    }))
    .pipe(concat("temp2.js"))
    .pipe(uglify({
        toplevel:true
    }).on("error", notify.onError()))
    .pipe(dest("dist"))
    .pipe(browserSync.stream())
}

const scripts = () =>{
    return src([
        "src/js/main.js"
    ])
    .pipe(sourceMaps.init())
    .pipe(babel({
        presets:["@babel/env"]
    }))
    .pipe(concat("app.js"))
    .pipe(sourceMaps.write())
    .pipe(dest("dist"))
    .pipe(browserSync.stream())
}

const resources = () =>{
    return src("src/resuorces/**")
    .pipe((dest("dist")))
}

const clean = () =>{
    return del("dist")
}

watch("src/resuorces/**", resources);
watch("src/**/*.css", styles);
watch("src/**/*.html", htmlMinify);
watch("src/images/svg/**/*.svg", htmlMinify);
watch("src/js/**/*.js", scripts);
watch("src/**/*.less", stylesless);
watch("src/js/template1/**/*.js", temp1_scriptsBuild);
watch("src/js/template2/**/*.js", temp2_scriptsBuild);

watch([
    "src/images/**/*.jpeg",
    "src/images/**/*.jpg",
    "src/images/**/*.png",
    "src/images/*.svg",
], images);

exports.styles = styles;
exports.htmlMinify = htmlMinify;
exports.scripts = scripts;
exports.clean = clean;

exports.build = series(clean, stylesBuild, htmlMinify, scriptsBuild, temp1_scriptsBuild, temp2_scriptsBuild, stylesless, resources, images, svgSprites);
exports.default = series(clean, styles, html, svgSprites, scripts, temp1_scriptsBuild, temp2_scriptsBuild, resources, stylesless, images, watchFile);