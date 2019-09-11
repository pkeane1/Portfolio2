var express = require("express");
require('dotenv').config()
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

var app = express();

var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
require("./routes/htmlRoutes")(app);
//have to make a post request to my database and then a reponse back 

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});





app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  