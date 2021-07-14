/* Global Variables */

//const console = require("console");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const apiKey = "b01ed52bc8bbfa1ecbf22a4140ed00ce"

/* Open Weather Map Current-Weather endpoint */
`api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`

















































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