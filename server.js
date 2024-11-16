const express = require("express");
const app = express();

app.get("/",function(req, res) {
    res.send("<h1>Hello World </h1>");

});
app.get("/contact",function(req, res) {
    res.send("call me");

});
app.get("/about",function(req, res) {
    res.send("BIO: I made this website to expresss what i am doing now in this website");

});
app.get("/Hobby",function(req, res) {
    res.send("Play Cricket");

});







app.listen(3000, function() {
  console.log("Example app listening on port");
});

