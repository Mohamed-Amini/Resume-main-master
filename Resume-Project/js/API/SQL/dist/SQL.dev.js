// var express = require("express")
// var sql = require("mysql2")
// // Connection TO the DB 
// // var con = sql.createConnection({ 
// //     host: "localhost",
// //     user: "root",
// //     password: "Meliodas 223", 
// //     database: "Login"
// // });
// function Login(){
//     con.connect(function(err) {
//         if (err) throw err;
//         con.query("SELECT * FROM User", function (err, result, fields) {
//           if (err) throw err;
//           console.log(result);
//         });
//     });
// }
// // document.getElementbyID("#ID").value 
// function Signup(){
//     con.connect(function(err) {
//         if (err) throw err;
//         console.log("Connected!");
//         let sqlQ = "INSERT INTO User (ID,email ,password) VALUES (1,'bitchyilyass@gmail.com','yourtoofu')";
//         con.query(sqlQ, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//         });
//     });
// }
"use strict";