const express = require("express");
const bodyParser = require("body-parser")

const app = express();
let data1 = [];
let urlencodedParser = bodyParser.urlencoded({extended: false});

app.set("view engine", "ejs");

app.get('/', (req,res) => {
    res.send("You are not permitted.")
})

app.get('/data/letmein',(req,res) => {
    res.render("user");
})
app.get('/data/accessto',(req,res) => {
    res.render("profile", {data: data1});
})

app.post('/data/accessto',urlencodedParser,(req,res) => {
    if(!req.body) return res.send("400, Error");
    if(req.body.pass = "noneedforpass") {
        data.push(req.body.msg)
    }
})

app.listen('3000');