"use strict";

var express = require("express");

var app = express();
app.get("/", function (req, res) {
  res.send("");
});
app.listen(6969, function () {
  console.log("Server Started on Port 6969");
});