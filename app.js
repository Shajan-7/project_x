//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const moment = require('moment');
const nodemailer= require('nodemailer');

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let pickup1, drop1, pay, extra_amount, mail, original_date, uname, uphone, material, booking_date, truck_id, ton1, bill_no, km, truckn, tno, pricet, tph, amount1, tamount,dname,dphone,gst=0,flag=0;

//console.log("Hi, I'm Shajan");
 
const url="mongodb+srv://shajan7:EMshjw6MMQiPeEGx@cluster0.2wpsygy.mongodb.net/test";
mongoose.set('strictQuery', false);
mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("db connect!!");    
});
