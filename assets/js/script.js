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

const setQuarterVolume = () =>
    {
        myAudio.volume = 0.2;
    }

setQuarterVolume();

// set date we're counting down to
let countDownDate = new Date("Jan 16, 2025").getTime();

// update count every 1 second
let x = setInterval(function() {

    // get today's date and time
    let now = new Date();

    // find distance between now and the count down date
    let distance = countDownDate - now;

    //time calculation for days, hours, minutes
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // display the result in the element with id='demo'
    document.getElementById("demo").innerHTML = days + " d " + hours + " h " + minutes + " m";

    // if the count down is finished, write some text

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "It's Time!!"
    }
}, 1000)

// Current temp

let currWeatherEl = document.querySelector('#weather');
let currConditionsEl = document.querySelector('#conditions');

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

            let icon = data.weather[0].icon;
            console.log(icon);
            icon = 'https://openweathermap.org/img/wn/' + icon +'@2x.png';
            let iconEl = document.createElement('img');
            iconEl.setAttribute('class', 'icon');
            iconEl.src = `${icon}`;
            currConditionsEl.append(iconEl);


        })

        .catch(function(error) {
            console.error(error);
        })

        

}

searchApi();

