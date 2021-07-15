/* Global Variables */
const apiKey = "b01ed52bc8bbfa1ecbf22a4140ed00ce";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// Identifying the generate Button
const generate = document.querySelector('#generate');


const mainFunction = () => {

    const zipCode = document.querySelector('#zip').value

    const content = document.querySelector('#feelings').value

    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

    // Validation to detect if the user entered a correctly formated zip code
    if (!zipCode){
        alert("Please enter a valid zip code")
        return
    }

    else {
        getWeatherData(baseUrl, zipCode, apiKey)

          .then(data => postData('/recieveData', {
              temp: data.main.temp,
              date: newDate,
              content: content
          }))

          .then((finalData) => {
              updateUI(finalData)
          })
          
          .catch(function(error) {
              console.log(error);
          })
        
    }
};

generate.addEventListener('click', mainFunction);

const getWeatherData = async(baseUrl, zipCode, apiKey) =>{

    const response = await fetch(baseUrl);

    try {
        const data = await response.json()
        const temp = data.main.temp;
        return temp;
    }

    catch (error) {
        console.log('error', error);
    }
};

const postData = async(url = '/recieveData', data= {}) =>{
    const request =  await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    
    });

    const localApiRes = await fetch('/tempData', {
        credentials: 'same-origin'
    });

    const finalData = await localApiRes.json()
    
    return finalData
};

const updateUI = async (finalData) => {
    //const request = await fetch('/recieveData');

    try {
        const allData = await finalData

        document.getElementById('date').innerHTML = allData.data;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.content;
    }

    catch (error) {
        console.log('error', error);
    }
};