var express = require('express');
var app = express();
app.get("/", function (req, res) {
    res.send("Hello World BIJACZ!");
});
app.listen(process.env.PORT || 1337, function () {
    console.log("app started ad 1337");
});
