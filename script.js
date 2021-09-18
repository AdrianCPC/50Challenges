//Declaration variables from document
const starts = document.getElementById("starts");
const moon = document.getElementById("moon");
const mountains_behind = document.getElementById("mountains_behind");
const text = document.getElementById("text");
// const btn = document.getElementById('btn'); problems with this script review later
const mountains_front = document.getElementById("mountains_front");
const header = document.querySelector("header");

//Search bar const
// const searchBar = document.getElementById('searchBar');
// let showPage = [];

//Buttons const
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const search = document.querySelector(".search");

//Even listener button
btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
});

//Events listener transitions
const value = 0;
window.addEventListener("scroll", function () {
    const value = window.scrollY;
    // console.log(window.scrollY);
    moon.style.top = value * 1.05 + "px";
    // starts.style.left = value * 0.25 + 'px';
    mountains_behind.style.top = value * 0.5 + "px";
    mountains_front.style.top = value * 0 + "px";
    text.style.marginRight = value * 4 + "px";
    text.style.marginTop = value * 1.2 + "px";
    // btn.style.marginTop = value * 1.5 + 'px';
    header.style.Top = value * 0.5 + "px";
});

//Search action
// console.log(searchBar)
// searchBar.addEventListener('keyup', (e) => {
//     console.log(e.target.value);
//     const searchString = e.target.value.toLowerCase();

//     const filteredPages = showPage.filter((page) => {
//         return page.name.toLowerCase().includes(searchString);
//     });

// });

function openPage() {
    let page = document.getElementById("searchBar").value;

    switch (page) {
        case "Day 1":
            window.open("./Dia 1-Expanding Cards/index.html");
            break;
        case "Day 2":
            window.open("./Dia 2 - Progress Steps/index.html");
            break;
        case "Day 3":
            window.open("./Día 3 - Rotating Navigation/index.html");
            break;
        case "Day 4":
            window.open("./Día 4 - Hidden Search/index.html");
            break;
        case "Day 5":
            window.open("./Día 5 - Blurry Loading/index.html");
            break;
        case "Day 6":
            window.open("./Día 6 - Drag N Drop/index.html");
            break;
        case "Day 7":
            window.open("./Día 7 - AutoText/index.html");
            break;
        case "Day 8":
            window.open("./Día 8 - Hoverboard/index.html");
            break;

        case "Day 9":
            window.open("./Día 9 - Scroll Animation/index.html");
            break;
        case "Day 10":
            window.open("./Día 10 - Form input wave/index.html");
            break;
        case "Day 11":
            window.open("./Día 11 - Dad Jokes/index.html");
            break;
        case "Day 12":
            window.open("./Día 12 - Sound Board/index.html");
            break;
        case "Day 13":
            window.open("./Día 13 - Live User Filter/index.html");
            break;
        case "Day 14":
            window.open("./Día 14 - Button Ripple Effect/index.html");
            break;
        case "Day 15":
            window.open("./Día 15 - Background Slider/index.html");
            break;
        case "Day 16":
            window.open("./Día 16 - Kinetic loader/index.html");
            break;
        case "Day 17":
            window.open("./Día 17 - Netflix Navigation/index.html");
            break;
        case "Day 18":
            window.open("./Día 18 - Testimonial Box Switcher/index.html");
            break;
        case "Day 20":
            window.open("./Día 20 - Doble click Heart/index.html");
            break;
        case "Day 21":
            window.open("./Día 21 - Event Keycodes/index.html");
            break;
        case "Day 22":
            window.open("./Día 22 - Mobile Nav Navigation/index.html");
            break;
        case "Day 23":
            window.open("./Día 23 - Drink Water/index.html");
            break;
        case "Day 24":
            window.open("./Día 24 - Feedback UI Desing/index.html");
            break;
        case "Day 26":
            window.open("./Día 26 - Sticky Navigation/index.html");
            break;
        case "Day 27":
            window.open("./Día 27 - split landing page/index.html");
            break;
        default:
            window.open("./index.html");
            break;
    };

};
