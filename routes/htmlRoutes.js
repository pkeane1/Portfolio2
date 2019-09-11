var path = require("path");

module.exports = function(app) {

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });


app.get("/resume", function(req, res) {
    res.sendFile(path.join(__dirname, "../resume.html"));
  });









}
