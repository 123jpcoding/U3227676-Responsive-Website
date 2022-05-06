//JavaScript for toggle menu//
var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

//Announcements Slider//
var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let x = 0;

upArrow.onclick = function () {
    if (x > "-900") {
        x = x - 300;
        slide.style.top = x + "px";
    }
}
downArrow.onclick = function () {
    if (x < 0) {
        x = x + 300;
        slide.style.top = x + "px";
    }
}

//Calendar//
$(document).ready(function () {
    $('#calendar').evoCalendar({

        theme: "Midnight Blue",
        calendarEvents: [{
                id: 'event1', // Event's ID (required)
                name: "Judo Tournament", // Event name (required)
                date: "May/22/2022", // Event date (required)
                description: "Olympia Judo Club is holding a Judo tournament from 9.30am at MacKinnon St, Wanniassa ACT 2903",
                type: "event", // Event type (required)
                everyYear: true, // Same event every year (optional)
                color: "#7bc1df"
            },
            {
                id: 'event2',
                name: "Training Cancelled",
                date: "May/05/2022", // Date range
                description: "Judo training cancelled due to Marist school musical practice.", // Event description (optional)
                type: "event",
                color: "#7bc1df"
            }
        ]
    });
})