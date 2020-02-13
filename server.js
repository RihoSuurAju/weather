const port = 3000;

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.set("view engine", "ejs")
app.use(express.static("public"));

app.listen(port, function(){
    console.log("Server is vibing on port 3000");
})

function getCity(d){
    let city = d.name;
    return city;
}

function getTemp(d){
    let temp = d.main.temp;
    return temp;
}

function getFeel(d){
    let feel = d.main.feels_like;
    return feel;
}

function getDesc(d){
    let description = d.weather[0].description;
    return description;
}

app.get('/', (req, res) => {
    
    
})

app.get('/tallinn', (req, res) => {
    
    let url = `http://api.openweathermap.org/data/2.5/weather?id=862995&units=metric&appid=bffc5ccd73778ee9df5e2c7d48469ce6`
    request(url, function(error, response, body){
        let data = JSON.parse(response.body);

        res.render('City', {
            name: getCity(data),
            temp: getTemp(data),
            feel: getFeel(data),
            desc: getDesc(data)
        })
    })
})

app.get('/parnu', (req, res) => {
    
    let url = `http://api.openweathermap.org/data/2.5/weather?id=589580&units=metric&appid=bffc5ccd73778ee9df5e2c7d48469ce6`
    request(url, function(error, response, body){
        let data = JSON.parse(response.body);

        res.render('City', {
            name: getCity(data),
            temp: getTemp(data),
            feel: getFeel(data),
            desc: getDesc(data)
        })
    })
})

app.get('/tartu', (req, res) => {
    
    let url = `http://api.openweathermap.org/data/2.5/weather?id=588335&units=metric&appid=bffc5ccd73778ee9df5e2c7d48469ce6`
    request(url, function(error, response, body){
        let data = JSON.parse(response.body);

        res.render('City', {
            name: getCity(data),
            temp: getTemp(data),
            feel: getFeel(data),
            desc: getDesc(data)
        })
    })
})