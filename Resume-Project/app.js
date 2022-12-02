const express =  require("express");
const sql = require("mysql2");
const app = express();
const path = require('path');
const dotenv = require('dotenv');


// for securing my infos
dotenv.config({
    path:'./.env'
});
// To make sure to grab data from the form

app.use(express.urlencoded({ extended : false}));
app.use(express.json());


// TO connect to the Database
const db = sql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

const publicdirectory = path.join(__dirname, './public');
app.use(express.static(publicdirectory));

const imgdir = path.join(__dirname, './img');
app.use(express.static(imgdir))

const viewpath = path.join(__dirname, "./views")
app.set('view engine', "hbs");
app.set("views", viewpath)

// Routes
app.use('/', require('./routes/pages'));
app.use('/auth' , require('./routes/auth'))
//Routes end 



// data base check if we connected
db.connect(
    (error) => {
        if(error) {
            console.log(error)
        }else {
            console.log("Rak zaz loz SQL tconnecta !!!")
        }
    }
)


// PORT and PAGES



app.listen(6969, () => {
    console.log("connected to the 6969 PORT")
})
