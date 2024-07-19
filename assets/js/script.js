const themeSwitcher = document.getElementById("theme-switcher");
const main = document.querySelector(".main");

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