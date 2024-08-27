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

setInterval();