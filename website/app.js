/* Global Variables */

//const console = require("console");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Declaring a variable to hold the API key
const apiKey = "b01ed52bc8bbfa1ecbf22a4140ed00ce";

// Identifying the generate Button
const generate = document.querySelector('#generate');

generate.addEventListener('click', async () => {
    const zipCode = document.querySelector('#zip').value
    
    // Validation to detect if the user entered a correctly formated zip code
    if(!zipCode){
        alert("Please enter a valid zip code")
        return
    }
    
    /* API call for the Open Weather Map's Current-Weather endpoint */
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`)

    // Converting the response to a JS object
    const data = await response.json()
    
    // Declaring a variable to only hold the temp data from the whole data object
    const temp = data.main.temp;
});


















































/*
const generate = document.querySelector('#generate');

generate.addEventListener("click", async ()=>{
    const zipCode = document.querySelector('#zip').value

    if(!zipCode) {
        alert('Please enter your zip code!')
        return
    }

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`)

    const data = await res.json


    const temp = console.logdata.main.temp;

   
})
*/