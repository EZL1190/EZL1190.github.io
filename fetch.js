const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const allowMethods = require('allow-methods');
const cors = require('cors');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());



app.get('/', function(req, res) {
    res.sendFile('index.html', { root: '.' });
});

app.post('/fetch', function(req, res) {
    const url = req.body.url;
    const query = req.body.body;
    const authToken = req.body.authToken;
    console.log("URL: " + url + " Query: " + query + " AuthToken: " + authToken);
    fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json", "authorization": authToken },
            body: JSON.stringify(query),
        })
        .then(data => data.json())
        .then(tmp => res.send(tmp))
})

app.post('/fetch2', function(req, res) {
    const url = req.body.url;
    const query = req.body.body;
    const authToken = req.body.authToken;
    console.log("URL: " + url + " Query: " + query + " AuthToken: " + authToken);
    fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json", "authorization": authToken },
            body: query,
        })
        .then(data => data.json())
        .then(tmp => res.send(tmp))
})

/*app.post('/fetch3', function(req, res) {
    const url = "https://www.holdsport.dk/graphql";
    const query = { "query": "query{current_team{name}}" };
    const authToken = "830700:NiIMqLyOPfu44mhmbs-Eew:67719"
    console.log("URL: " + url + " Query: " + query + " AuthToken: " + authToken);
    fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json", "authorization": authToken },
            body: JSON.stringify(query),
        })
        .then(data => data.json())
        .then(tmp => res.send(tmp))
})*/

app.listen(4000, function() {
    console.log("Started on PORT 3333");
})