"use strict";

var sql = require("mysql2");

var jwt = require('jsonwebtoken');

var bcrypt = require('bcryptjs');

var _require = require("postcss-js"),
    async = _require.async;

var e = require("express"); // to connect to the DATABASE


var db = sql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.register = function (req, res) {
  console.log(req.body);
  var name = req.body.name;
  var surname = req.body.surname;
  var email = req.body.mail;
  var password = req.body.pswd;
  db.query('SELECT email FROM `login-users` WHERE email = ?', [email], function _callee(error, results) {
    var PasswordHS;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (error) {
              console.log(error);
            }

            if (!(results.length > 0)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.render('register', {
              message: 'Kayn li khdam b dak email Awda hmadi'
            }));

          case 3:
            _context.next = 5;
            return regeneratorRuntime.awrap(bcrypt.hash(password, 8));

          case 5:
            PasswordHS = _context.sent;
            console.log(PasswordHS);
            db.query('INSERT INTO `login-users` SET ?', {
              name: name,
              surname: surname,
              email: email,
              password: password
            }, function (error, results) {
              if (error) {
                console.log(error);
              } else {
                console.log(results);
                return res.render('login', {
                  message: ' ta rak mriiiid rah kayn had USERRRRR !!!!'
                });
              }
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  });
};

exports.login_in = function (req, res) {
  var email = req.body.email;
  var password = req.body.pswd;

  if (email & password) {
    Qry = "SELECT * FROM login-users WHERE email = \"".concat(user_email_address, "\"  ");
    db.query(Qry, function (error, data) {
      if (data.length > 0) {
        for (var count = 0; count < data.length; count++) {
          if (data[count].user_password == user_password) {
            request.session.user_id = data[count].user_id;
            response.redirect("/Log_in");
          } else {
            response.send('Incorrect Password');
          }
        }
      } else {
        response.send('Incorrect Email Address');
      }

      response.end();
    });
  } else {
    response.send('Please Enter Email Address and Password Details');
    response.end();
  }
};