const themeSwitcher = document.getElementById("theme-switcher");
const main = document.querySelector(".main");
const myAudio = document.getElementById("audio1");

let mode = "light";

themeSwitcher.addEventListener("click", function() {
    if (mode === "dark") {
        mode = "light";
        main.setAttribute("class", "light");
    } else {
        mode = "dark";
        main.setAttribute("class", "dark");
    }
});

const setHalfVolume = () =>
    {
        myAudio.volume = 0.4;
    }

setHalfVolume();

// set date we're counting down to
let countDownDate = new Date("Jan 16, 2025").getTime();

// update count every 1 second
let x = setInterval(function() {

    // get today's date and time
    let now = new Date();

    // find distance between now and the count down date
    let distance = countDownDate - now;

    //time calculation for days
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // display the result in the element with id='demo'
    document.getElementById("demo").innerHTML = days + " days " + hours + " h " + minutes + " mins";

    // if the count down is finished, write some text

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "It's Time!!"
    }
}, 1000)

// Current temp

let currWeatherEl = document.querySelector('#weather');

var apiKey = 'b25ce75b259c4e61caf9ce00a1f90876';


function searchApi() {
    let wxQueryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=cancun&appid=' + apiKey;


    fetch(wxQueryUrl)
        .then (function (response) {
            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('NETWORK RESPONSE ERROR')
            }
        })
        .then(function (data) {
            console.log('data:', data);

            let temperature = data.main.temp;
            temperature = Math.floor((temperature - 273) * 1.8 + 32);
            console.log(temperature);
            currWeatherEl.append(temperature);
            // displayCurrentWeather(temperature);

        })

        .catch(function(error) {
            console.error(error);
        })

        

}

searchApi();

// function displayCurrentWeather(temperature) {
//     let resultsCard = document.createElement('div');
//     let temperatureEl = document.createElement('h2');
//     temperatureEl = setAttribute('class', 'card-content');
//     temperatureEl.textContent = `Current Cancun Temp: ${temperature} F`;
//     resultsCard.setAttribute('class', 'results-card');
//     resultsCard.append(temperatureEl);
//     currWeatherEl.innerHTML = '';
//     currWeatherEl.append(temperatureEl);

    // let resultsCard = document.createElement('div');
    // let cardBody = document.createElement('div');
    // let temperatureEl = document.createElement('p');
    // let windEl = document.createElement('p');
    // let humidityEl = document.createElement('p');
    // let maxTempEl = document.createElement('p');
    // let minTempEl = document.createElement('p');

    // temperatureEl.setAttribute('class', 'card-content');
    // temperatureEl.textContent = `Current Cancun Temp: ${temperature} F`;
    // windEl.setAttribute('class', 'card-content');
    // windEl.textContent = `Wind: ${wind} mph`;
    // humidityEl.setAttribute('class', 'card-content');
    // humidityEl.textContent = `Humidity: ${humidity}%`;
    // maxTempEl.setAttribute('class', 'card-content');
    // maxTempEl.textContent = `Max temp: ${maxTemp} F`;
    // minTempEl.setAttribute('class', 'card-content');
    // minTempEl.textContent = `Min temp: ${minTemp} F`;

    // resultsCard.setAttribute('class', 'results-card');
    // cardBody.setAttribute('class', 'card-body');
    // resultsCard.append(cardBody);
    // cardBody.append(temperatureEl);
    // console.log(cardBody);
    // currWeatherEl.innerHTML = '';
    // currWeatherEl.append(resultsCard);
// }

// displayCurrentWeather();
