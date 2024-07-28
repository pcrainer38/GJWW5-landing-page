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
