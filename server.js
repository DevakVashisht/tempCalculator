const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, function(){
    console.log("Connected to " + port);
})

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/convertKelvin", function(req, res){
    var kelvin = req.body.btn_kelvin;
    var far = req.body.btn_f;
    res.sendFile(__dirname+"/convert.html")
})

app.post("/kelvin", function(req, res){
    var celcius = Number(req.body.inputCelcius);
    var kelvin = celcius + 273.15
    res.send(kelvin+" Kelvin")
})

app.post("/convertFarenheit", function(req, res){
    res.sendFile(__dirname+"/convertFar.html")
})

app.post("/Farenheit", function(req, res){
    var celcius = Number(req.body.inputCelcius);
    var kelvin = celcius * 9/5 + 32
    res.send(kelvin+" Farenheit")
})