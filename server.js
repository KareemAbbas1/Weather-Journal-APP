// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Declaring a variable to store the port value in case needed to be changed
const port = 8000;

/* Dependencies */

// Require Express to run server and routes
const express = require('express');
// Require Body-Parser for Middleware to parse the final data that will be passed throug routes on the server
const bodyParser = require('body-parser');
// Require CORS for Cross-Origin Resource Sharing
const cors = require('cors');

// Start up an instance of app

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

 
// Setup Server 

app.listen(port, () => {
    console.log(`Server is running on localhost: ${port}`)
});

// A GET route to return the projectData(sends the data to the client)
app.get('/tempData', (req, res) => {
    res.send(projectData)
});

app.post('/recieveData', (req, res) => {
    projectData = {...req.body}
    res.send()
});
