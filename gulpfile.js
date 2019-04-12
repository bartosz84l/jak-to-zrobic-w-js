var protractor = require("gulp-protractor").protractor;
var gulp = require('gulp'),
jslint = require('./');
var runSequence = require('run-sequence');
var del = require('del');
var jshint = require ("gulp-jshint");
var jshintcli = require('jshint/src/cli');
var stylish = require('jshint-stylish')
var tablereporter = require('jshint-table-reporter');



gulp.task('testTrial', function () {

    gulp.src(["/home/bartosz/Desktop/Jacek/excercsises/*.js"])
        .pipe(protractor({
            configFile: '/home/bartosz/Desktop/Jacek/excercsises/3_synchronization/conf.js'

        }))
        .on('error', function (e) { throw e; });

});



var exc = {
    "1": "excercsises/1_introduction/conf.js",
    '2': "excercsises/2_page_object/conf.js",
    "3": "excercsises/3_synchronization/conf.js" 
};



gulp.task('trialslice', function(){

    var queue = process.argv.slice(-1);

    gulp.src(["/home/bartosz/Desktop/Jacek/excercsises/2_page_object/*.spec.js"])
    .pipe(protractor({
        configFile: exc[queue]
    }))
    .on('error', function(e) {throw e});

});

gulp.task('all-tests', function () {
    for (var i = 1; i <= 3; i++) {
        alltest(i)
    };

});

function alltest  (index) {
    gulp.src(["/*js"])
        .pipe(protractor({
            configFile: exc[index]
        }))
        .on('error', function (e) { throw e });

};


gulp.task('clean', function(){
    return del.sync('screenshots');
});



gulp.task('aftertesting',function(){
    console.log("finished testing");

});


gulp.task('default', function(){
    gulp.start('clean','all-tests', 'aftertesting', 'jslint');
});


gulp.task('jslint', function () {
    gulp.src('excercsises/*/*js')
        .pipe(jshint())
        .pipe(jshint.reporter(tablereporter))
});

