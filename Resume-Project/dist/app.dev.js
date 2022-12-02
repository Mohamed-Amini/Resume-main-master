"use strict";

var express = require("express");

var sql = require("mysql2");

var app = express();

var path = require('path');

var dotenv = require('dotenv'); // for securing my infos


dotenv.config({
  path: './.env'
}); // To make sure to grab data from the form

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json()); // TO connect to the Database

var db = sql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});
var publicdirectory = path.join(__dirname, './public');
app.use(express["static"](publicdirectory));
var imgdir = path.join(__dirname, './img');
app.use(express["static"](imgdir));
var viewpath = path.join(__dirname, "./views");
app.set('view engine', "hbs");
app.set("views", viewpath); // Routes

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth')); //Routes end 
// data base check if we connected

db.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Rak zaz loz SQL tconnecta !!!");
  }
}); // PORT and PAGES

app.listen(6969, function () {
  console.log("connected to the 6969 PORT");
});