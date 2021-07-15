/* Global Variables */

const apiKey = "b01ed52bc8bbfa1ecbf22a4140ed00ce";

const generate = document.querySelector('#generate');

const zipCode = document.getElementById('zip')

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

/* Beging Main Function */
const mainFunction = () => {


    const content = document.querySelector('#feelings').value

    // Validation to detect if the user entered a correctly formated zip code
    if (!zipCode.value) {
        alert("Please enter a valid zip code")
    }

    else {
        //get temp data from global API
        getWeatherData()
            // post final data to local API
            .then(data => postData('/recieveData', {
                temp: data.main.temp,
                date: newDate,
                content: content
            }))
           // Update the UI
            .then((finalData) => {
                updateUI(finalData)
            })

            .catch(function (error) {
                console.log(error);
            })

    }
};
// Event listener to perform the main function on button click
generate.addEventListener('click', mainFunction);

/* End main Function */



/* Beging helper Functions */

// Get the temprature from the OpenWeatherMap API
const getWeatherData = async () => {

    const request = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${apiKey}&units=metric`);

    try {

        return await request.json()
    }

    catch (error) {
        console.log('error', error);
    }
};

// Post data to the local API
const postData = async (url = '/recieveData', data = {}) => {
    await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        // Converting the data to a String
        body: JSON.stringify(data)

    });
    // Adding the tempData added by the user to the finalData
    const localApiRes = await fetch('/tempData', {
        credentials: 'same-origin'
    });

    const finalData = await localApiRes.json()

    return finalData
};

// Updating the UI with the final data
const updateUI = async (finalData) => {

    try {
        const allData = await finalData

        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.content;
    }

    catch (error) {
        console.log('error', error);
    }
};