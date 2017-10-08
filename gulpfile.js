// var gulp        = require('gulp');
// var browserSync = require('browser-sync').create();
// var sass        = require('gulp-sass');




// gulp.task('sass', function() {
//     return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
//     .pipe(sass()) // initialize gulp-sourcemaps with the existing map
//     .pipe(gulp.dest("src/css")) // write the source maps
//     .pipe(browserSync.stream()); // pipe it to the output DIR
// });


// gulp.task('js', function() {
//     return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js',
//     'node_modules/tether/dist/js/tether.min.js'])
//     .pipe(sass()) 
//     .pipe(gulp.dest("src/js")) 
//     .pipe(browserSync.stream()); 
// });


// gulp.task('serve', ['sass'], function(){

//     browserSync.init({
//         server: "./src"
//     });

//     gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
//     gulp.watch("ejs").on('change', browserSync.reload);
    
// });

// gulp.task('default', ['js','serve']);

// var bsConfig = require("gulp-bootstrap-configurator");

// // For CSS 
// gulp.task('make-bootstrap-css', function(){
//  return gulp.src("./config.json")
//    .pipe(bsConfig.css())
//    .pipe(gulp.dest("./assets"));
//    // It will create `bootstrap.css` in directory `assets`. 
// });

// // For JS 
// gulp.task('make-bootstrap-js', function(){
//  return gulp.src("./config.json")
//    .pipe(bsConfig.js())
//    .pipe(gulp.dest("./assets"));
//    // It will create `bootstrap.js` in directory `assets`. 
// });