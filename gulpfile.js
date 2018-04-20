let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let nodemon=require('gulp-nodemon');

gulp.task('browser-sync',['nodemon'],function(){
    browserSync.init(null,{
        proxy:"http://localhost:3000",
        port:7002,
        
    });
});
gulp.task('default',['browser-sync'],function(){
    gulp.watch(["./public/**/*.css"],browserSync.reload);
    gulp.watch(["./public/**/*.js"], browserSync.reload);
    gulp.watch(["./views/**/*.hbs"],browserSync.reload);
    
    
});
gulp.task('nodemon',function(cb){
    let callbackCalled=false;
    return nodemon({script:'index.js'}).on('start',function(){
        if(!callbackCalled){
            cb();
            callbackCalled=true;
        }
    });
});