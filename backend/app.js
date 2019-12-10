var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbName = "DashboardProject";
const dbURL = `mongodb://localhost:27017/${dbName}`;
var app = express();

var hostname = 'localhost';
var port = 3000;


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var userRouter = require('./routes/user');
var sensorRouter = require('./routes/sensor');
var measureRouter = require('./routes/measure');
var bodyParser = require('body-parser');

const cors = require('cors');
app.use(cors());

app.use(logger("dev"));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({extended: true}));




app.use(cookieParser());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/user', userRouter);
app.use("/measure", measureRouter);
app.use("/sensor", sensorRouter);


//connection a la database

mongoose.connect(dbURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}
);



module.exports = app;
