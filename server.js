// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server





































/*
// Setup empty JS object to act as endpoint for all routes
projectData = {};

const port = 3000;

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

 Middleware
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port, ()=>{
    console.loge('Your is up ')
})

app.get('/getData', (req, res)=>{
    res.send(projectData)
})

app.post('/recieveData', (req, res)=>{
    projectData = req.body
    
    better way:
    projectData = {...req.body} speared operator
    res.end() or res.send
    
})

*/