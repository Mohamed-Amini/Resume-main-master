const sql = require("mysql2");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const { async } = require("postcss-js");
const e = require("express");



// to connect to the DATABASE
const db = sql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})


exports.register = (req,res) => {
    console.log(req.body);

    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.mail;
    const password = req.body.pswd;
    
    db.query('SELECT email FROM `login-users` WHERE email = ?',[email] , async (error, results) => {
        if (error){
            console.log(error);
        }
        if(results.length > 0){
            return res.render('register', {
               message: 'Kayn li khdam b dak email Awda hmadi' 
            });
        }

        let PasswordHS = await bcrypt.hash(password, 8);
        console.log(PasswordHS)

        db.query('INSERT INTO `login-users` SET ?', {name: name , surname: surname , email: email , password : password }, (error,results) => {
            if(error){
                console.log(error)
            }else{
                console.log(results);
                return res.render('login', {
                    message:' ta rak mriiiid rah kayn had USERRRRR !!!!'
                })
            }
        })
    });   
}

exports.login_in = (req,res) => {
    var email = req.body.email;
    var password =req.body.pswd;

    if(email & password ){
        Qry = `SELECT * FROM login-users WHERE email = "${user_email_address}"  `;

        db.query(Qry, function(error, data){

            if(data.length > 0)
            {
                for(var count = 0; count < data.length; count++)
                {
                    if(data[count].user_password == user_password)
                    {
                        request.session.user_id = data[count].user_id;

                        response.redirect("/Log_in");
                    }
                    else
                    {
                        response.send('Incorrect Password');
                    }
                }
            }
            else
            {
                response.send('Incorrect Email Address');
            }
            response.end();
        });
    }
    else
    {
        response.send('Please Enter Email Address and Password Details');
        response.end();
    }

}