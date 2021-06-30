const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cors = require('cors')

app.use(cors())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
const fs = require("fs");
const customersFilePath = "./dummyCustomers.json";
const moviesFilePath = "./dummyMovies.json";
//const dummyFilePath = "./dummyCustomers.json";

//creating GET route for customers
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get("/customers", (req, res) => {
    fs.readFile(customersFilePath, function(err, data) {
        //console.log('rajat......................');
        //console.log(data);
        
        res.send(JSON.parse(data));
    });
});

app.get("/movies", (req, res) => {
    fs.readFile(moviesFilePath, function(err, data) {
    
        res.send(JSON.parse(data));
    });
});


app.listen(4200, () => console.log('Listening on port 4200...'));
